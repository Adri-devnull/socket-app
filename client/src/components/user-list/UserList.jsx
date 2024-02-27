const UserList = ({ users, setUsers }) => {
	// useEffect(()=> {
	//     socket.on('id')
	// },[])

	return (
		<div>
			<h2>Users Connected</h2>
			<p>{users}</p>
		</div>
	);
};

export default UserList;
