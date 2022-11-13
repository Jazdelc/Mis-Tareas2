const listaCompras = ["Fresas", "Aceite de Oliva", "Chocolate", "Limones", "Arroz"]
console.log(listaCompras)

listaCompras.push("Aceite de Girasol")
console.log(listaCompras)

listaCompras.pop("Aceite de Girasol")
console.log(listaCompras)

listaPeliculas = [
    {titulo: "Avatar", director: "James Cameron", fecha: new Date(2009, 11, 18)},
    {titulo: "Comer, rezar, amar", director: "Ryan Murphy", fecha: new Date(2010, 07, 13)},
    {titulo: "La Forma del Agua", director: "Guillermo del Toro", fecha: new Date(2017, 11, 08)}
]

const anioPelicula = listaPeliculas.filter(obj => obj.fecha > new Date(2010, 0, 01))
console.log(anioPelicula)

const listaDirectores = listaPeliculas.map(titulo => {
    return titulo.director
})
console.log(listaDirectores)

const listaTitulo = listaPeliculas.map(pelicula => {
    return pelicula.titulo
})
console.log(listaTitulo)

const directoresTitulos = listaDirectores.concat(listaTitulo)
const directoresTitulosProp = [...listaDirectores, ...listaTitulo]
console.log(directoresTitulosProp)