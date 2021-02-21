import React, { Component } from 'react'

class ResultClass extends Component {
    constructor(props) {
        super()

        this.state = {
            results: ""
        }
    }
    render() {
        return (
            <div>
                <div className="calculator">
                    <ResultClass results={this.state.results} />
                </div>            
            </div>
        )
    }
}

export default ResultClass
