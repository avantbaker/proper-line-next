const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri, { useNewUrlParser: true });

export default async (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	await client.connect(async (err, db) => {
		await db.db('main').collection('clients', async (err, collection) => {
			try {
				const request = await collection.insertOne(req.query);
				res.statusCode = 200;
				res.json(Object.assign({}, request, req.query));
			} catch (e) {
				res.statusCode = 400;
				res.json({ message: 'unsuccessful', err: true });
			}
		});
	});
};
