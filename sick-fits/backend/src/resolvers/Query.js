const { forwardTo } = require('prisma-binding');

const Query = {
	items: forwardTo('db'),
	// async items(parent, arg, context, info) {
	// 	const item = await context.db.query.items();
	// 	return item;
	// }
};

module.exports = Query;
