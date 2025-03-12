// URL del backend en Render
const API_URL = "https://bi-backend-q3f6.onrender.com/tendencias";

// Esperar a que la página cargue antes de hacer la petición
document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ script.js se ha cargado correctamente.");
    console.log("🌍 Intentando hacer fetch a:", API_URL);

    fetch(API_URL)
        .then(response => {
            console.log("📡 Respuesta recibida del backend:", response);

            if (!response.ok) {
                throw new Error(`❌ Error en la API: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("📊 Datos recibidos:", data);
            
            let lista = document.getElementById("tendencias");
            if (!lista) {
                console.error("❌ Elemento con ID 'tendencias' no encontrado en el HTML.");
                return;
            }

            lista.innerHTML = ""; // Limpiar la lista antes de agregar datos

            data.negocios.forEach(item => {
                let li = document.createElement("li");
                li.textContent = item;
                lista.appendChild(li);
            });

            console.log("✅ Datos añadidos a la lista correctamente.");
        })
        .catch(error => console.error("❌ Error al obtener los datos:", error));
});
