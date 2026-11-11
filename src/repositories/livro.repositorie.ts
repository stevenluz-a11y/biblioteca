import { db } from "../database/knex.js";
import type { CreateLivro } from "../types/livro.js";


class LivroRepository {
    async create(dados: CreateLivro) {
        const [livroCriado] = await db('livros').insert(dados).returning("*")
        return livroCriado
    }
    async getAll() {
        const livros = await db('livros').select("*").returning("*")
        return livros
    }
    async getById(id: string) {
        const [livro] = await db('livros').where({ id }).select("*").returning("*")
        return livro
    }
    async update(id: string, dados: CreateLivro) {
        const [livroAtualizado] = await db('livros').where({ id }).update(dados).returning("*")
        return livroAtualizado
    }
    async delete(id: string) {
        const [livroDeletado] = await db('livros').where({ id }).del().returning("*")
        return {
            livro_deletado: {
                status: 'Ok',
                message: "Livro deletado com sucesso",
                livroDeletado
            }
        }
    }
}

export const livroRepository = new LivroRepository()