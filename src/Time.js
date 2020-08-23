import React, { Component } from 'react'

class Time extends Component {
    render() {
        return (
            <div>
                <h1>The current time is:</h1>
                {this.props.currentTime}
            </div>
        )
    }
}

export default Time
