const http = require('http')

const server = http.createServer( (req,res) => {
  res.end(viewObject(object))
 
})

const PORT = process.env.PORT || 3000

server.listen( PORT , () => {
  console.log(`Servidor Http escuchando en el puerto ${PORT}`) 
   
})

let object = {
 id: numberAleatoryFloor(1,10),
 title: "Producto " + numberAleatoryFloor(1,10),
 price: numberAleatoryRound(0.00,9999.99),
 thumbnail: "Foto " + numberAleatoryFloor(1,10)
}

 function numberAleatoryFloor(min,max){
  return Math.floor((Math.random(min,max)*(max-min))- min)
}

function numberAleatoryRound(min,max){
  return Math.round(Math.random(min,max)*(max-min)- min, -2)
}

function viewObject(obj){
    return `Id: ${obj.id} \nTitle: ${obj.title}\nPrice: $${obj.price}\nThumbnail:  ${obj.thumbnail}\n`
   }
   