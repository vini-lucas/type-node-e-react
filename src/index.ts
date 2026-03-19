import express, {Request, Response} from "express";

// Utilizando o express como funcão pode-se usar a constante app para gerenciar rotas e ligar o servidor.
const app = express();

// Cria a rota GET principal
app.get("/", (req: Request, res: Response) => {
    res.send("Seja bem-vindo!");
});

// Inicia o servidor na porta 8080.
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080.");
});