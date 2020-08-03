import React from 'react';

import './App.css';

import { useSelector, useDispatch, connect } from 'react-redux';
import { increment, decrement } from './actions';

function App({ counter, isLogged, increment, decrement }) {
	/* const counter = useSelector((state) => state.counter);
	const isLogged = useSelector((state) => state.isLogged); 
	const dispatch = useDispatch(); */

	return (
		<div className='App'>
			<h1>Counter {counter}</h1>
			<button onClick={() => increment(1)}>+</button>
			<button onClick={() => decrement()}>-</button>

			{isLogged ? <h3>Information I shouldnt see</h3> : ''}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		counter: state.counter,
		isLogged: state.isLogged,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		increment: (number) => {
			dispatch(increment(number));
		},
		decrement: () => {
			dispatch(decrement());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
