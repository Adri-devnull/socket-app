const UserList = ({ users }) => {
	return (
		<div>
			<h2>Users Connected</h2>
			<div>
				{users.map(user => (
					<p key={user}>Usuario: {user}</p>
				))}
			</div>
		</div>
	);
};

export default UserList;
