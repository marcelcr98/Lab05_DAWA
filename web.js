var url = require('url');
var fs = require('fs');

function renderHTML(path, response){

    fs.readFile(path, null, function(error,data){
        if(error){
            response.writeHead(404);
            responsse.write('Archivo no encontrado');
        }else{
            response.write(data);
        }
        response.end();
    });
}

module.exports= {

    handleRequest: function(request, response){
        response.writeHead(200, {'Content-Type':'text/html'});

        var path = url.parse(request.url).pathname;
        switch(path){
            case '/':
                renderHTML('./vistas/index.html',response);         
                break;
            case '/nosotros':
                renderHTML('./vistas//nosotros.html',response);         
                break;
            case '/servicios':
                renderHTML('./vistas//servicios.html',response);         
                break;
            case '/contact':
                renderHTML('./vistas//contact.html',response);         
                break;
            case '/confirm':
                renderHTML('./vistas//confirm.html',response);         
                break;
            default:
                renderHTML('./vistas//404.html',response);
                break;

        }
    }
};