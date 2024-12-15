const db = require('../models');

class PessoaController {
	static async getAll(req, res) {
		try {
			const list = await db.Pessoa.findAll();

			res.status(200).json(list);
		} catch (error) {
			// Tratar erro
		}
	}
}

module.exports = PessoaController;