function cargarCategorias(){
    
    let img_1 = document.getElementById("img_1");
    img_1.src = 'https://gmedia.playstation.com/is/image/SIEPDC/ps4-product-thumbnail-01-en-14sep21?$facebook$';
    let cat_1 = document.getElementById("categoria_1");
    cat_1.innerHTML= ("Electronicos");

    let img_2 = document.getElementById("img_2");
    img_2.src = 'https://www.lg.com/cac/images/lavadoras-y-secadoras/md07532284/gallery/D-01.jpg';
    let cat_2 = document.getElementById("categoria_2");
    cat_2.innerHTML= ("Hogar");

    let img_3 = document.getElementById("img_3");
    img_3.src = 'https://consultores.cafetotal.es/wp-content/uploads/2015/08/BARISTA-PRO-2gr-gran.jpg';
    let cat_3 = document.getElementById("categoria_3");
    cat_3.innerHTML= ("Negocio")
}

function cargarCambalachesRecientes(){
    
    let array_img = JSON.parse(localStorage.getItem('img_cambalache'));
    let array_titulo = JSON.parse(localStorage.getItem('titulo'));
    
    let tamanno = array_img.length;

    let reciente_1 = tamanno - 2;
    let reciente_2 = tamanno - 1;

    let img_1 = document.getElementById("img_r1");
    img_1.src =array_img[reciente_1];
    let txt_r1 = document.getElementById("txt_r1");
    txt_r1.innerHTML = array_titulo[reciente_1];

    let img_2 = document.getElementById("img_r2");
    img_2.src = array_img[reciente_2];
    let txt_r2 = document.getElementById("txt_r2");
    txt_r2.innerHTML = array_titulo[reciente_2];
    
}


function cargarLocalStorage(){

    let array_img = ["https://media.nidux.net/pull/599/800/3365/117235_product_5a25e9bc59d58.jpg", "https://m.media-amazon.com/images/I/71Nly9vPapL._AC_SY450_.jpg"];
    let array_titulo = ["Bola de Voleibol" , "Acer Predator Helios"];
    let array_descripcion = ["Bola de voleibol, en excelente estado", "Computadora nueva, solo 2 meses de uso"];
    let array_busco = ["Busco una bicicleta o algo de mi interés, recibo ofertas","Busco una de mejor gama"];
    let array_publicador_por  = ["Anibal Castro", "Anibal Castro"];
    let array_nombre = ["Anibal","Fabricio"];
    let array_apellido = ["Castro", "Ponce"];
    let array_direccion = ["Frente a la estación de bomberos", "50 metros sur del parque"];
    let array_pais = ["Costa Rica", "Costa Rica"];
    let array_ciudad = ["La Fortuna","La Fortuna"];
    let array_gmail = ["anibalcastro1515@gmail.com", "fc070707@gmail.com"];
    let array_contrasenna = ["Anibal", "Fabricio"];

    localStorage.setItem("img_cambalache", JSON.stringify(array_img));
    localStorage.setItem("titulo", JSON.stringify(array_titulo));
    localStorage.setItem("descripcion", JSON.stringify(array_descripcion));
    localStorage.setItem("busco", JSON.stringify(array_busco));
    localStorage.setItem("publicado_por", JSON.stringify(array_publicador_por));
    localStorage.setItem("nombre", JSON.stringify(array_nombre));
    localStorage.setItem("apellido", JSON.stringify(array_apellido));
    localStorage.setItem("direccion", JSON.stringify(array_direccion));
    localStorage.setItem("pais", JSON.stringify(array_pais));
    localStorage.setItem("ciudad", JSON.stringify(array_ciudad));
    localStorage.setItem("gmail", JSON.stringify(array_gmail));
    localStorage.setItem("constrasenna", JSON.stringify(array_contrasenna));
}

//cargarLocalStorage();

cargarCategorias();
cargarCambalachesRecientes();