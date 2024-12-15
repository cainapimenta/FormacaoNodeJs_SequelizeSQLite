const ControllerBase = require('./ControllerBase.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();

class PessoaController extends ControllerBase {
	constructor() {
		super(pessoaServices);
	}
}

module.exports = PessoaController;