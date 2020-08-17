import React, { Component } from 'react';
import './App.css';
import RouteMap from './routes/route';
class App extends Component {
	render() {
		return (
			<div id="App">
				<RouteMap />
			</div>
		);
	}
}
export default App;