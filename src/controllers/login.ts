import express, {Request, Response} from "express";

// Utilizando o express como funcão pode-se usar a constante app para gerenciar rotas e ligar o servidor.
const router = express.Router();

// Cria a rota GET principal
router.get("/", (req: Request, res: Response) => {
    res.send("Seja bem-vindo!");
});

export default router;