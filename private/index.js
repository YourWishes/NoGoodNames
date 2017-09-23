'use strict';

//Module will be loaded only after the /public/ webpack directory has successfully compiled.
import path from 'path';
import express from 'express';

//Create our server instance, as well as some constant variables
const server = express();
const port = 80;

//Server the /static/ folder for static files.
server.use('/static', express.static('dist'));

function handleRender(req:object, res:object) {
    res.send(renderFullPage())
}

function renderFullPage() {
    //TODO load this in from a simple .html file.
    return `
        <!DOCTYPE HTML>
        <html lang="en">
            <head>
                <title></title>
            </head>
            
            <body>
                <div id="root"></div>
                <script src="/static/bundle.js"></script>
            </body>
    </html>
    `;
}

//Use our method through our server.
server.use(handleRender);

//Start listening.
server.listen(port, function() {
    console.log("Server online");
});