import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../actions';

class Counter extends Component {
    // incrementIfOdd = () => {
    //     // Extra: Implement an increment function that
    //     // only increments if the counter value is odd
    // };

    incrementAsync = () => {
        // Extra: Implement an increment function that
        // increments after waiting for one second
    };

    render() {
        // Fill in the two button onClick methods
        // Upon clicking these buttons, the count
        // should decrement or increment accordingly
        return (
            <p>
                {/*console.log({...this.props})*/}
                {console.log(this.props)}
                Clicked: {this.props.count} times
                {" "}
            {/* Why don't you use this.props.count.increment() */}
                <button onClick={() => this.props.increment()/* Fill me in */ }>
                    +
                </button>
                {" "}
                <button onClick={ () => this.props.decrement()/* Fill me in */ }>
                    -
                </button>
                {" "}
                 {/* Uncomment these button tags if you got
                around to implementing the extra credit functions */}
                <button onClick={() => this.props.incrementIfOdd()}>
                    Increment if odd
                </button>
                {" "}
                {/*<button onClick={this.incrementAsync}>
                    Increment async
                </button>  */}
            </p>
        );
    }
}

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = (state) => { // used inside react-redux: take in state returns obj set = props
    // console.log(state);
    return {
        count: state
    };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, actions)(Counter);// takes in obj, actions, component