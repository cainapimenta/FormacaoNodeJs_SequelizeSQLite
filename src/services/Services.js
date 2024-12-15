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

	async update(entity, id) {
		try {
			const listReturn = dataSource[this.modelName].update(entity, {
				where: {
					id: id
				}
			});

			if (listReturn[0] === 0) {
				return false;
			} else {
				return true;
			}
		} catch (error) {
			//error
		}
	}
}

module.exports = Services;