import React, { Component } from 'react';
import Time from './Time';

class TimeContainer extends Component {
	//set initial state to the current time
	state = { currentTime: new Date().toLocaleTimeString() };

	//when component renders, use setint to update the time every second
	componentDidMount() {
		setInterval(() => {
			this.setState({ currentTime: new Date().toLocaleTimeString() });
		}, 1000);
	}

	render() {
		return (
			<div>
				<Time currentTime={this.state.currentTime} />
			</div>
		);
	}
}

export default TimeContainer;
