const productos = [
    //Indumentaria
    {
        id: "indumentaria-01",
        titulo: "Musculosas NBA ",
        imagen: "./img/indumentaria/musculosanba.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 50000  
    },
    {
        id: "indumentaria-02",
        titulo: "Shorts NBA ",
        imagen: "./img/indumentaria/shortsnba.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentarias"
        },
        precio: 35000  
    },
    {
        id: "indumentaria-03",
        titulo: "Buzo NBA ",
        imagen: "./img/indumentaria/buzonba.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 46000  
    },
    {
        id: "indumentaria-04",
        titulo: "Remeras NBA ",
        imagen: "./img/indumentaria/remeranba.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 22000  
    },
    {
        id: "indumentaria-05",
        titulo: "Musculosa Selecciones ",
        imagen: "./img/indumentaria/camselecciones.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 45000  
    },
    {
        id: "indumentaria-06",
        titulo: "Remeras Selecciones ",
        imagen: "./img/indumentaria/remseleccion.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 28000  
    },
    //Pelotas
    {
        id: "pelota-01",
        titulo: "Molten N°6",
        imagen: "./img/pelotas/molten6.jpg",
        categoria: {
            nombre: "Pelotas",
            id: "pelotas"
        },
        precio: 40700 
    },
    {
        id: "pelota-02",
        titulo: "Euro N°5",
        imagen: "./img/pelotas/euro5.jpg",
        categoria: {
            nombre: "Pelotas",
            id: "pelotas"
        },
        precio: 17800 
    },
    {
        id: "pelota-03",
        titulo: "Spalding Gold",
        imagen: "./img/pelotas/spaldinggold.jpg",
        categoria: {
            nombre: "Pelotas",
            id: "pelotas"
        },
        precio: 25000 
    },
    {
        id: "pelota-04",
        titulo: "Spalding N°7",
        imagen: "./img/pelotas/spalding7.jpg",
        categoria: {
            nombre: "Pelotas",
            id: "pelotas"
        },
        precio: 57000 
    },
    {
        id: "pelota-05",
        titulo: "Molten goma",
        imagen: "./img/pelotas/moltengoma.jpg",
        categoria: {
            nombre: "Pelotas",
            id: "pelotas"
        },
        precio: 12000 
    },
    {
        id: "pelota-06",
        titulo: "Wilson N°7",
        imagen: "./img/pelotas/wilson7.jpg",
        categoria: {
            nombre: "Pelotas",
            id: "pelotas"
        },
        precio: 24200 
    },
    //Accesorios
    {
        id: "accesorios-01",
        titulo:"Rodillera Etnia",
        imagen: "./img/accesorios/rodillera.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 17500  
    },
    {
        id: "accesorio-02",
        titulo:"Musculosa Etnia",
        imagen: "./img/accesorios/musculosaetnia.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 19500  
    },
    {
        id: "accesorio-03",
        titulo:"Calza 3/4 Etnia",
        imagen: "./img/accesorios/calza.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 21000  
    },
    {
        id: "accesorio-04",
        titulo:"Calza corta Etnia",
        imagen: "./img/accesorios/calza1.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 18500  
    },
    {
        id: "accesorio-05",
        titulo:"Manga Etnia",
        imagen: "./img/accesorios/manga.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 7500  
    },
    {
        id: "accesorio-06",
        titulo:"Tobillera McDavid",
        imagen: "./img/accesorios/tobillera.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 27500  
    },
];

const contenedor_productos = document.querySelector("#contenedor-productos");
const botones_categorias = document.querySelectorAll('.boton-categoria');
const titulo_principal = document.querySelector('#titulo-principal');
let botones_agregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");




/*---Función para inyectar productos en el HTML--- */
                                 /*---Parámetro para que carguen solo los productos de la categoría elegida--- */
function cargar_productos(productos_elegidos){

    contenedor_productos.innerHTML = "";/*---Vaciar el contenedor_productos antes de realizar el forEach del array, sino c/ vez que cliqueemos los productos se duplican--- */

    productos_elegidos.forEach(producto =>{
        const div = document.createElement("div");/*---Creamos un div con la class producto--- */
        div.classList.add("producto");
        div.innerHTML = `
                    <img class="producto-imagen"  src="${producto.imagen}" alt="${producto.titulo}">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">$${producto.precio}</p>
                    <button class="producto-agregar" id= "${producto.id}"> Agregar</button>
                    `;

        contenedor_productos.append(div);         

    })

    actualizar_botones_agregar()
}

/*---Llamado a la función--- */
cargar_productos(productos);/*---Parámetro para que al cargar por primera vez la página se cargue el array completo--- */


/*---Evento click para activar el botón seleccionado--- */
botones_categorias.forEach(boton => {
    boton.addEventListener("click" , (e) => {

        botones_categorias.forEach( boton => boton.classList.remove("active"));/*---Le saca la clase active al botón que la tiene por defecto--- */
        e.currentTarget.classList.add("active"); /*---Le agrega la clase active al botón clickeado--- */

       /*---Condicional para que cuando hagamos click en Todos los productos, vuelvan a aparecer--- */
       /*---Entonces el filtro se ejecuta cuando se selecciona una categoría diferente a "Todos los productos"--- */
        if(e.currentTarget.id != "todos"){
            
            const producto_categoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
            titulo_principal.innerText = producto_categoria.categoria.nombre;/*---Para que cambie el Título y aparezca el nombre correspondiente a la categoría seleccionada--- */
            
            const productos_boton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)/*---Hacemos un filtro en el array para que solo carguen los productos de la categoría clickeada--- */
            cargar_productos(productos_boton);/*---Parámetro para que carguen solo los productos de la categoría seleccionada--- */
        }else{
            titulo_principal.innerText = "Todos los productos";
            cargar_productos(productos);
        }

    })
});


/*---Función para actualizar los botones---*/
/*---Llamado a la función dentro de la función cargar_productos--- */
function actualizar_botones_agregar(){
    botones_agregar = document.querySelectorAll(".producto-agregar");

    botones_agregar.forEach(boton => {
        boton.addEventListener("click" , agregar_al_carrito) /*---Evento para llamar a la función agregar_al-carrito---*/
    });
}


/*---Si hay productos en carrito entonces el carrito será igual a lo que traiga del Local Storage, sino arranca como un array vacío---*/

let productos_en_carrito;

let productos_en_carrito_LS = localStorage.getItem("productos-en-carrito");

if(productos_en_carrito_LS){
    productos_en_carrito = JSON.parse(productos_en_carrito_LS);
    actualizar_numerito();
}else{
    productos_en_carrito = []; /*---Sino arranca como un array vacío---*/

}


function agregar_al_carrito(e){

    const id_boton = e.currentTarget.id;
    const producto_agregado = productos.find(producto => producto.id === id_boton)
    

    /*---Chequear con some si el producto ya fue agregado para que no se duplique---*/
    /*---Si está subimos la cantidad, sino simplemente pusheamos---*/
    if(productos_en_carrito.some(producto => producto.id === id_boton)){
        const index= productos_en_carrito.findIndex(producto => producto.id === id_boton)/*---Busca el índice de un producto---*/
        productos_en_carrito[index].cantidad++
    }else{
        producto_agregado.cantidad = 1;
        productos_en_carrito.push(producto_agregado);
    }
    actualizar_numerito(); 

    localStorage.setItem("productos-en-carrito", JSON.stringify(productos_en_carrito))
}

/*---Función para que al agregar un producto al carrito se actualice el número de productos en el mismo---*/
/*---Esta función se ejecuta cada vez que agregamos un producto al carrito---*/
function actualizar_numerito(){
    let nuevo_numerito = productos_en_carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevo_numerito;

}