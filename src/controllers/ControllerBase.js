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
}

module.exports = ControllerBase;