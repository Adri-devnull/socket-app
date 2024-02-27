const Counter = ({ number, setNumber }) => {
	return (
		<div>
			<h1>Counter using socket</h1>
			<h2>{number}</h2>
			<button onClick={() => addCounter(number, setNumber)}>+</button>
			<button onClick={() => restartCounter(setNumber)}>Reset</button>
			<button onClick={() => decreaseCounter(number, setNumber)}>-</button>
		</div>
	);
};

// FUNCION PARA AUMENTAR EL COUNTER
const addCounter = (number, setNumber) => {
	setNumber(number + 1);
};

// FUNCION PARA DISMINUIR EL COUNTER
const decreaseCounter = (number, setNumber) => {
	setNumber(number - 1);
};

// FUNCION PARA RESETEAR EL COUNTER
const restartCounter = setNumber => {
	setNumber(0);
};

export default Counter;
