const{Router} = require("express");

const usersController = require ("../controllers/usersController");

const usersRoutes = Router();

function myMiddleware(request, response, next){
    console.log("oooiii")
}



const UserController = new usersController();




/*app.get("/message/:id/:user", (request, response) => {
   const {id, user } = request.params;
    response.send(`
    Id da mensagem: ${id}.
    Para o usuário: ${user}.
    `);

});*/

usersRoutes.post("/", myMiddleware, UserController.create);



module.exports = usersRoutes;