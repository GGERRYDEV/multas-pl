// Función para mostrar la sección seleccionada
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar por defecto la sección "multas"
document.addEventListener('DOMContentLoaded', () => {
    showSection('multas');
});

// Sumamultas
const textarea = document.getElementById("inputText");
textarea.addEventListener("input", function() {
    const scrollPosition = this.scrollTop;
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
    this.scrollTop = scrollPosition;
});

const totalResult = document.getElementById("totalResult");

textarea.addEventListener("input", function () {
    const text = this.value;
    const total = calculateTotal(text);
    totalResult.textContent = `El total es de: ${total}€`;
});

function calculateTotal(text) {
    const regex = /(\d+)\s*€/g;
    let total = 0;
    let match;
    while ((match = regex.exec(text)) !== null) {
        total += parseInt(match[1], 10);
    }
    return total;
}

// Multas
const resultsContainer = document.getElementById("results");
const clipboardContent1 = document.getElementById("clipboard-content1");
const clipboardContent2 = document.getElementById("clipboard-content2");
const copyButton1 = document.getElementById("copy-button1");
const copyButton2 = document.getElementById("copy-button2");
const totalAmountElement = document.getElementById("total-amount");
const totalCountElement = document.getElementById("total-count");

let clipboard1 = new Set();
let clipboard2 = new Set();
let selectedItems = new Set();


// Objeto para almacenar las cantidades seleccionadas en multas de rango
const selectedAmounts = {};

function renderMultas(query = "") {
    resultsContainer.innerHTML = ""; // Limpiar resultados previos

    const filteredMultas = multas.filter(
        multa => multa.articulo.toLowerCase().includes(query) ||
                 multa.descripcion.toLowerCase().includes(query)
    );

    if (filteredMultas.length === 0) {
        resultsContainer.textContent = "No se encontraron resultados.";
        return;
    }

    filteredMultas.forEach(multa => {
        const div = document.createElement("div");
        div.className = "result-item";
        div.dataset.id = multa.id; // Asignar el id como un atributo de datos
        const isRange = multa.multa.includes("-");

        // Aplicar color verde a los artículos previamente seleccionados
        if (selectedItems.has(multa.id)) {
            div.classList.add("selected");
        }

        if (isRange) {
            const [min, max] = multa.multa.replace("€", "").split("-").map(num => parseInt(num.trim(), 10));
            div.innerHTML = `
                <strong>${multa.articulo}</strong> - ${multa.descripcion}: ${min}-${max} €
                <input type="number" min="${min}" max="${max}" placeholder="${min}-${max}" />
                <button class="blue-button">Agregar</button>
                <button class="red-button">Eliminar</button>
            `;
            const input = div.querySelector("input");
            const addButton = div.querySelector(".blue-button");
            const deleteButton = div.querySelector(".red-button");

            // Lógica para el botón azul (Agregar)
            addButton.addEventListener("click", () => {
                const value = parseInt(input.value, 10);
                if (isNaN(value) || value < min || value > max) {
                    alert(`Por favor, selecciona un valor válido entre ${min} y ${max} €.`);
                } else if (clipboard1.has(multa.id) || clipboard2.has(multa.id)) {
                    alert("Este artículo ya está en el portapapeles.");
                } else {
                    clipboard1.add(multa.id);
                    clipboard2.add(multa.id);
                    selectedAmounts[multa.id] = value; // Guardar la cantidad seleccionada
                    div.classList.add("selected");
                    selectedItems.add(multa.id);
                    updateClipboard();
                }
            });

            // Lógica para el botón rojo (Eliminar)
            deleteButton.addEventListener("click", () => {
                if (selectedItems.has(multa.id)) {
                    clipboard1.delete(multa.id);
                    clipboard2.delete(multa.id);
                    delete selectedAmounts[multa.id]; // Eliminar la cantidad seleccionada
                    div.classList.remove("selected");
                    selectedItems.delete(multa.id);
                    updateClipboard();
                } else {
                    alert("Este artículo no está en el portapapeles.");
                }
            });
        } else {
            // Multas que no son de rango (no se incluyen botones)
            div.innerHTML = `
                <strong>${multa.articulo}</strong> - ${multa.descripcion}: ${multa.multa}
            `;

            // Añadir evento de clic para agregar/quitar al portapapeles
            div.addEventListener("click", () => {
                toggleClipboard(div, multa);
            });
        }

        resultsContainer.appendChild(div); // Agregar al contenedor
    });
}

function toggleClipboard(element, multa) {
    if (clipboard1.has(multa.id) || clipboard2.has(multa.id)) {
        clipboard1.delete(multa.id);
        clipboard2.delete(multa.id);
        element.classList.remove("selected");
        selectedItems.delete(multa.id);
    } else {
        clipboard1.add(multa.id);
        clipboard2.add(multa.id);
        element.classList.add("selected");
        selectedItems.add(multa.id);
    }

    updateClipboard();
}
function updateClipboard() {
    clipboardContent1.innerHTML = "/multas poner usuario: razon:<br>"; // Texto fijo con salto de línea
    clipboardContent2.innerHTML = "/arrestar usuario: razon:<br>"; // Texto fijo con salto de línea

    // Función para actualizar el contenido del portapapeles
    const updateClipboardContent = (clipboard, content) => {
        if (clipboard.size === 0) {
            content.textContent = "No hay multas seleccionadas.";
            return;
        }
        clipboard.forEach(id => {
            const multa = multas.find(m => m.id === id);
            if (multa) {
                const div = document.createElement("div");
                div.className = "clipboard-item";
    
                // Obtener el monto de la multa
                let amountText;
                if (selectedAmounts[id] !== undefined) {
                    // Caso 3: Multa con importe personalizado
                    amountText = `${selectedAmounts[id]} €`; // Añadir "€" al final
                } else {
                    // Caso 1 y 2: Multas con solo importe o importe + texto adicional
                    amountText = multa.multa; // Usar el valor tal cual (ya incluye "€" y texto adicional si lo hay)
                }
    
                // Construir el texto final
                div.textContent = `${multa.articulo} - ${multa.descripcion}: ${amountText}`;
    
                // Botón para eliminar la multa del portapapeles
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Eliminar";
                deleteButton.addEventListener("click", () => {
                    clipboard1.delete(id);
                    clipboard2.delete(id);
                    delete selectedAmounts[id]; // Eliminar la cantidad seleccionada
                    removeHighlight(id); // Quitar el resaltado
                    updateClipboard(); // Actualizar el portapapeles
                });
    
                div.appendChild(deleteButton);
                content.appendChild(div); // Agregar el artículo al portapapeles
            }
        });
    };

    // Actualizar ambos portapapeles
    updateClipboardContent(clipboard1, clipboardContent1);
    updateClipboardContent(clipboard2, clipboardContent2);
    calculateTotals(); // Actualizar los totales
}

function calculateTotals() {
    let totalAmount = 0;
    let itemCount = clipboard1.size;

    clipboard1.forEach(id => {
        const multa = multas.find(m => m.id === id);
        if (multa) {
            const amount = selectedAmounts[id] || parseInt(multa.multa.replace("€", ""), 10);
            totalAmount += amount;
        }
    });

    totalAmountElement.textContent = `Total: ${totalAmount} €`;
    totalCountElement.textContent = `Artículos seleccionados: ${itemCount}`;
}

function removeHighlight(id) {
    const element = document.querySelector(`.result-item[data-id="${id}"]`);
    if (element) {
        element.classList.remove("selected");
    } else {
        console.log("Element not found");
    }
}

copyButton1.addEventListener("click", () => {
    const headerText = "/multas poner usuario: razon:";
    const multasText = Array.from(clipboard1).map(id => {
        const multa = multas.find(m => m.id === id);
        if (multa) {
            // Obtener el monto de la multa
            const amount = selectedAmounts[id] !== undefined
                ? `${selectedAmounts[id]} €`  // Si hay un importe personalizado, añadir "€"
                : multa.multa;               // Si no, usar multa.multa tal cual
            return `${multa.articulo} - ${multa.descripcion}: ${amount}`;
        }
        return "";
    }).join("\n");

    const fullText = `${headerText}\n${multasText}`;
    navigator.clipboard.writeText(fullText).then(() => {
        alert("Contenido copiado al portapapeles.");
    });
});

copyButton2.addEventListener("click", () => {
    const headerText = "/arrestar usuario: razon:";
    const multasText = Array.from(clipboard2).map(id => {
        const multa = multas.find(m => m.id === id);
        if (multa) {
            // Obtener el monto de la multa
            const amount = selectedAmounts[id] !== undefined
                ? `${selectedAmounts[id]} €`  // Si hay un importe personalizado, añadir "€"
                : multa.multa;               // Si no, usar multa.multa tal cual
            return `${multa.articulo} - ${multa.descripcion}: ${amount}`;
        }
        return "";
    }).join("\n");

    const fullText = `${headerText}\n${multasText}`;
    navigator.clipboard.writeText(fullText).then(() => {
        alert("Contenido copiado al portapapeles.");
    });
});
// Función de búsqueda en tiempo real
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", function() {
    const query = searchInput.value.toLowerCase();
    renderMultas(query);
});

renderMultas();

// Premultas
function addPremultaToClipboard(titulo) {
    const entrada = pmultas.find(e => e.titulo === titulo);

    entrada.articulos.forEach(multa => {
        const key = `${multa.articulo} - ${multa.descripcion}: ${multa.multa}`;
        if (!clipboard1.has(multa.id)) {
            clipboard1.add(multa.id);
            clipboard2.add(multa.id);
            selectedItems.add(multa.id);
        }
    });

    updateClipboard();
}

function renderItems(query = "") {
    const resultsContainer = document.getElementById("results-premultas");
    resultsContainer.innerHTML = "";

    let found = false;

    pmultas.forEach(entrada => {
        if (entrada.titulo.toLowerCase().includes(query.toLowerCase())) {
            found = true;
            const cardDiv = document.createElement("div");
            cardDiv.className = "card";
            cardDiv.innerHTML = `
                <h2>${entrada.titulo}</h2>
                <p>Artículos relacionados:</p>
            `;

            let totalMulta = 0;

            entrada.articulos.forEach(multa => {
                const cantidadMulta = parseFloat(multa.multa.replace(' €', '').replace(',', '.'));
                totalMulta += cantidadMulta;

                cardDiv.innerHTML += `
                    <p><strong>${multa.articulo}</strong>: ${multa.descripcion} - ${multa.multa}</p>
                `;
            });

            cardDiv.innerHTML += `
                <p><strong>Total de multas: ${Math.round(totalMulta)} €</strong></p>
            `;

            cardDiv.innerHTML += `
                <button class="blue-button" onclick="addPremultaToClipboard('${entrada.titulo}')">Agregar</button>
            `;

            resultsContainer.appendChild(cardDiv);
        }
    });

    if (!found) {
        resultsContainer.innerHTML = "<p>No se encontraron resultados.</p>";
    }
}

// Función de búsqueda
function searchItems() {
    const query = document.getElementById("search-input-premultas").value;
    renderItems(query);
}

renderItems();
