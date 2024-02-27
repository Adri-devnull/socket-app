import { useEffect, useState } from 'react';
import Counter from './components/counter/Counter';
import UserList from './components/user-list/UserList';
import { socket } from './sockets/socket';
import { GlobalStyles } from './styles/GlobalStyles';
const App = () => {
	const [number, setNumber] = useState(0);
	const [users, setUsers] = useState([]);
	console.log(socket);

	useEffect(() => {
		socket.on('response', data => {
			setNumber(data);
		});
	}, []);

	useEffect(() => {
		socket.emit('counter', number);
	}, [number]);

	useEffect(() => {
		socket.emit('users', socket.id);
	}, []);

	return (
		<>
			<GlobalStyles />
			<UserList users={users} setUsers={setUsers} />
			<Counter number={number} setNumber={setNumber} />
		</>
	);
};

export default App;
