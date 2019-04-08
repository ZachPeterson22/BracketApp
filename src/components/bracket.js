import React, { Component } from 'react';

class App extends Component {

    getStyles = (a) => {
        if(a) {
            return {
                display: "flex",
                flexDirection: "row",
            }
        } else {
            return {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: "15px"
            }
        }
    }

    style = () => {
        return {
            border: "1px solid black",
            margin: "5px",
            padding: "5px"
        }
    }

    render() {
        const br = this.props.brackets;

        let bracket = br.length;
        let allBrackets = [];
        allBrackets.push(br);
        let sample = [];

    // create the functionality to divide 
    // the bracket in half till the winner is found
        while(bracket >= 1) {
            for(let i = 0; i < bracket; i++) {
                if (br[i].winner) {
                    sample.push(br[i]);
                }
            }
            allBrackets.push(sample);
            bracket = sample.length;
            sample = [];
        }

    return (
        <div style={this.getStyles(true)}>{
            allBrackets.map(
                (a) => (<div style={this.getStyles(false)}>{
                    a.map(
                        (b) => (
                            <div style={this.style()}>{b.id} : {b.title}</div>
                        ))
                }</div>
                ))
            }</div>
    );
  }
}

export default App;