import express from "express";
// Cria a aplicação express
const app = express();
// Inclui as controllers
import login from "./controllers/login.js";
// Cria as rotas
app.use('/', login);
// Inicia o servidor na porta 8080.
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080.");
});
//# sourceMappingURL=index.js.map