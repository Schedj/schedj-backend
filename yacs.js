module.exports = function(app, api) {
	app.get("/api/departments", (req,res) => 
		api.yacs.departments((err, body) => {
			if (!err) res.send(body);
			else res.send(err);
		}));
}