const { Post } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class PostController {
	async create(req, res, next) {
		try {
			const { id, title, metaTitle, description, metaDescription, slug, content, status, tags, userId } = req.body;
			const { img } = req.files;
			let fileName = uuid.v4() + '.jpg';
			img.mv(path.resolve(__dirname, '..', 'static', fileName));
			const post = await Post.create({
				id,
				title,
				metaTitle,
				description,
				metaDescription,
				slug,
				content,
				status,
				tags,
				userId,
				img: fileName,
			});
			return res.json(post);
		} catch (e) {
			next(ApiError.badRequest(e.message));
		}
	}
	async getAll(req, res) {
		let { limit, page } = req.query;
		page = page || 1;
		limit = limit || 9;
		let offset = page * limit - limit;
		const posts = await Post.findAndCountAll({ limit, offset });
		return res.json(posts);
	}
	async getOne(req, res) {
		const { id } = req.params;
		const post = await Post.findOne({ where: { id } });
		return res.json(post);
	}
}

module.exports = new PostController();
