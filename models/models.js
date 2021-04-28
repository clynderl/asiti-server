const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	email: { type: DataTypes.STRING, unique: true },
	password: { type: DataTypes.STRING },
	role: { type: DataTypes.STRING, defaultValue: 'AUTHOR' },
});

const Post = sequelize.define('post', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING, allowNull: false },
	metaTitle: { type: DataTypes.STRING, allowNull: false },
	description: { type: DataTypes.STRING, allowNull: false },
	metaDescription: { type: DataTypes.STRING, allowNull: false },
	slug: { type: DataTypes.STRING, allowNull: false },
	content: { type: DataTypes.TEXT },
	status: { type: DataTypes.INTEGER, defaultValue: 1 },
	tags: { type: DataTypes.STRING, allowNull: true },
	img: { type: DataTypes.STRING, allowNull: false },
});

const Requests = sequelize.define('requests', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	fio: { type: DataTypes.STRING, allowNull: false },
	phone: { type: DataTypes.STRING, allowNull: false },
	comment: { type: DataTypes.STRING, allowNull: true },
});

User.hasMany(Post);
Post.belongsTo(User);

module.exports = {
	User,
	Post,
	Requests,
};
