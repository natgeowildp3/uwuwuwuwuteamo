

/* CONTADOR EN TIEMPO REAL EXACTO */

const inicio = new Date(2025, 1, 25, 0, 0, 0); // 25 febrero 2025 00:00:00

function actualizar() {

    const ahora = new Date();

    let años = ahora.getFullYear() - inicio.getFullYear();
    let meses = ahora.getMonth() - inicio.getMonth();
    let dias = ahora.getDate() - inicio.getDate();
    let horas = ahora.getHours() - inicio.getHours();
    let minutos = ahora.getMinutes() - inicio.getMinutes();
    let segundos = ahora.getSeconds() - inicio.getSeconds();


    /* corregir negativos */

    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }

    if (minutos < 0) {
        minutos += 60;
        horas--;
    }

    if (horas < 0) {
        horas += 24;
        dias--;
    }

    if (dias < 0) {
        meses--;
        const diasMesAnterior = new Date(
            ahora.getFullYear(),
            ahora.getMonth(),
            0
        ).getDate();
        dias += diasMesAnterior;
    }

    if (meses < 0) {
        meses += 12;
        años--;
    }


    /* mostrar contador completo */

    document.getElementById("contador").innerHTML =
        `${años} año${años != 1 ? "s" : ""}, `
        + `${meses} mes${meses != 1 ? "es" : ""}, `
        + `${dias} día${dias != 1 ? "s" : ""}, `
        + `${horas} hora${horas != 1 ? "s" : ""}, `
        + `${minutos} minuto${minutos != 1 ? "s" : ""}, `
        + `${segundos} segundo${segundos != 1 ? "s" : ""} contigo 🤍`;

}


/* actualizar cada segundo */
setInterval(actualizar, 1000);

actualizar();



/* NO MODIFICADO */
function entrar() {

    document.getElementById("musica").play();

    document.getElementById("intro").style.opacity = "0";

    setTimeout(() => {

        document.getElementById("intro").style.display = "none";

        document.getElementById("contenido").style.opacity = "1";

    }, 800);

}

/* MODAL FOTOS */

const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const cerrar = document.getElementById("cerrar");

cards.forEach(card => {
    card.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = card.getAttribute("data-img");
    });
});

cerrar.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

/* MODAL FOTO CON TEXTO */

const fotos = document.querySelectorAll(".fotos img");
const modalFoto = document.getElementById("modalFoto");
const modalFotoImg = document.getElementById("modalFotoImg");
const modalFotoTexto = document.getElementById("modalFotoTexto");
const cerrarFoto = document.getElementById("cerrarFoto");

fotos.forEach(foto => {

    foto.addEventListener("click", () => {

        modalFoto.style.display = "flex";

        modalFotoImg.src = foto.src;

        modalFotoTexto.textContent = foto.getAttribute("data-text");

    });

});

cerrarFoto.onclick = () => {

    modalFoto.style.display = "none";

};

modalFoto.onclick = (e) => {

    if (e.target === modalFoto) {

        modalFoto.style.display = "none";

    }

};