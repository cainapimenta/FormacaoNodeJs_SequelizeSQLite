class ControllerBase {
	constructor(service) {
		this.service = service;
	}

	async getAll(req, res) {
		try {
			const entities = await this.service.getAll();
			res.status(200).json(entities);
		} catch (error) {
			// lançar erro
		}
	}

	async update(req, res) {
		const { id } = req.params;
		const model = req.body;

		try {
			const isUpdate = await this.service.update(model, Number(id));

			if (isUpdate) {
				res.status(204).send();
			}
			else {
				res.status(400).send(`Erro ao atualizar objeto ${id}`);
			}
		} catch (error) {
			//error
		}
	}
}

module.exports = ControllerBase;