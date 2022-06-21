let users = require('../mocks/users');
let { userNotFound } =  require('../errors');

module.exports = {
	listUsers(request, response) {
		const { order } = request.query;

		const sortedUsers = users.sort((initial, current) => {
			if( order === 'desc')	{
				return initial.id < current.id ? 1 : -1;
			}

			return initial.id > current.id ? 1 : -1;
		});

		response.send(200, sortedUsers);
	},

	getUserByID(request, response) {
		const { id } = request.params;
		const user = users.find(user => user.id === Number(id));

		if(!user ){
			return response.send(400, userNotFound);
		} 

		response.send(200, user);
	},

	createUser(request, response){
		const body = request.body;
		const lastUserId = users[users.length - 1].id;

		const newUser = {	
			id: lastUserId + 1,
			name: body.name
		};
		
		users.push(newUser);

		response.send(200, newUser);

	},

	updateUser(request, response){
		let { id } = request.params;
		const { name } =request.body;
		id = Number(id);

		const userExists = users.find((user) => user.id === id);

		if(!userExists){
			return response.send(400, userNotFound);
		}

		users = users.map((user) => user.id === id ? {...user, name} : user);

		response.send(200, { id, name });
	},

	removeUser(request, response){
		let { id } = request.params;
		id = Number(id);

		const userExists = users.find((user) => user.id === id);

		if(!userExists){
			return response.send(400, userNotFound);
		}

		users = users.filter((user) => user.id !== id);
		response.send(200, { deleted: true });
	}
};