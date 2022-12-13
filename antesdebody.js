window.onclick = function()  {
    //crea una serie de elements por cada tag encontrado. 
    let encabezados = document.createElement("h1");
    const text = document.createTextNode("¿Quieres ser mi parejito?");
    
    encabezados.appendChild(text);
    document.body.appendChild(encabezados); 
}

window.onclose = function() {
    let confirmation = false;
        

}