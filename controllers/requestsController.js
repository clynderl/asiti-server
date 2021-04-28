const { Requests } = require('../models/models');
const ApiError = require('../error/ApiError');

class RequestsController {
	async create(req, res, next) {
		try {
			const { id, fio, phone, comment } = req.body;
			const request = await Requests.create({ id, fio, phone, comment });
			return res.json(request);
		} catch (e) {
			next(ApiError.badRequest(e.message));
		}
	}
	async getAll(req, res, next) {
		let { limit, page } = req.query;
		page = page || 1;
		limit = limit || 50;
		let offset = page * limit - limit;
		const requests = await Requests.findAndCountAll({ limit, offset });
		return res.json(requests);
	}
}

module.exports = new RequestsController();
