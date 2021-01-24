const http = require('http');

const server = http.createServer( (peticion,respuesta) => {
    let hora = new Date().getHours()
    if(hora >= 6 || hora <= 12){
        respuesta.end('Buenos dias!')
    }
    else if( hora >= 13 || hora <= 19 ){
        respuesta.end('Buenos tardes!')
    }
    else if( hora >= 20 || hora <= 5 ){
        respuesta.end('Buenos noches!')
    }
});

server.listen ( 8080, function(){
    console.log(`Tu servidor está listo en ${this.address().port}`)
})