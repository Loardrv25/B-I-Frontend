// URL del backend en Render
const API_URL = "https://bi-backend-q3f6.onrender.com/tendencias";

fetch(API_URL)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error en la API: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        let lista = document.getElementById("tendencias");
        lista.innerHTML = ""; // Limpiar lista antes de agregar nuevos datos

        data.negocios.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;
            lista.appendChild(li);
        });
    })
    .catch(error => console.error("Error al obtener los datos:", error));
