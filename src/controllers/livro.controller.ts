import { type Request, type Response } from "express"
import type { CreateLivro } from "../types/livro.js"
import { livroService } from "../services/livro.service.js"

class livroController {
    async create(req: Request, res: Response) {
        try {
            const livro = await livroService.create(req.body)
            return res.json(livro)
        } catch (error) {
            console.error(error)
            return res.json({ message: "Erro interno do servidor" })
        }
    }
}