// Precio inicial
precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

// Contador 
let count = 0;

// Precio final 
function precioFinal() {
    const total = count*precio;
    document.querySelector(".valor-total").innerHTML = total;
}

// Subir contador
function subircontador() {
    count++;
    document.querySelector(".cantidad").innerHTML = count;
    precioFinal();
}

document.querySelector(".buttonmas").onclick = subircontador

// Bajar contador
function bajarcontador() {
    count--;
    document.querySelector(".cantidad").innerHTML = count;
    precioFinal();
}

document.querySelector(".buttonmenos").onclick = bajarcontador
