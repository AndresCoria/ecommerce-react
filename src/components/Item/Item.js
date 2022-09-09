let productos =
[
    {
        "price": 500,
        "id": 1,
        "title": "Hamburguesa",
        "img": "../Images/img_carrito/HAMBURGUESA-4.jpg"
    },
    {
        "price": 450,
        "id": 2,
        "title": "Burritos",
        "img": "../Images/img_carrito/BURRITOS.jpg"
    },
    {
        "price": 550,
        "id": 3,
        "title": "Albondigas",
        "img": "../images/img_carrito/ALBONDIGAS.jpg"
    },
    {
        "price": 350,
        "id":  4,
        "title": "Aros de Cebolla",
        "img": "../images/img_carrito/CEBOLLA.jpg"
    },
    {
        "price": 300,
        "id":  5,
        "title": "Bastones de Muzzarella",
        "img": "../images/img_carrito/BASTONES-DE-MUZZA.jpg"
    },
    {
        "price": 400,
        "id":  6,
        "title": "Alitas de pollo",
        "img": "../images/img_carrito/ALITAS-DE-POLLO.jpg"
    },
    {
        "price": 250,
        "id":  7,
        "title": "nuggets",
        "img": "../images/img_carrito/NUGGET.jpg"
    },
    {
        "price": 320,
        "id":  8,
        "title": "Papas fritas",
        "img": "../images/img_carrito/PAPAS-FRITAS.jpg"
    },
    {
        "price": 310,
        "id":  9,
        "title": "Tacos",
        "img": "../images/img_carrito/TACOS.jpg"
    },
    {
        "price": 450,
        "id":  10,
        "title": "Tabla de picada",
        "img": "../images/img_carrito/TABLITA.jpg"
    },
    {
        "price": 200,
        "id":  11,
        "title": "Cerveza Artesanal",
        "img": "../images/img_carrito/CERVEZA-4.jpg"
    },
    {
        "price": 250,
        "id":  12,
        "title": "Trago",
        "img": "../images/img_carrito/TRAGO-1.jpg"
    }
]

export const gFetch = new Promise((resolve, reject) => {
    let condition = true

    if(condition) {
        setTimeout( () =>{
            resolve(productos)
        }, 3000 )
    } else {
        reject('400 not found')
    }
})