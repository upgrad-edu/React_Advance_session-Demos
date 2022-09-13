import React, { Component } from 'react';

export default class App extends Component {
// Initializing the state
state = {
	error: false,
};

componentDidCatch(error) {
	// Changing the state to true
	// if some error occurs
	this.setState({
	error: true
	});
}

render() {
	return (
	<React.StrictMode>
		<div>
		{this.state.error ? <div>Some error</div> : <GFGComponent />}
		</div>
	</React.StrictMode>
	);
}
}

class GFGComponent extends Component {

// GFGComponent throws error as state of
// GFGCompnonent is not defined

render() {
	return <h1>{this.state.heading}</h1>;
}
}
