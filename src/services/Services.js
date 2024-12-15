const dataSource = require('../models');

class Services {
	constructor(modelName) {
		this.modelName = modelName;
	}

	async getAll() {
		try {
			return dataSource[this.modelName].findAll();
		} catch (error) {
			// lançar erro
		}
	}
}

module.exports = Services;