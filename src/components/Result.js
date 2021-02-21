import React, { Component } from 'react'

class Result extends Component {

    render() {
        let { result } = this.props
        return (
            <div>
                <div className="result">
                    <h3>{result}</h3>
                </div>            
            </div>
        )
    }
}

export default Result
