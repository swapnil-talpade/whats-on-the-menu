import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {


    goToStore = (event) => {
        // stoping the form from submitting
        event.preventDefault();
        // get the text from the input
        const storeName = this.myInput.value;

        // change page to the url
        this.props.history.push(`/store/${storeName}`);

    };


    render() {
        return (

            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Enter a Store Name</h2>
                <input
                    type="text"
                    // this is how you create ref to bind input
                    ref={(myInput) => { this.myInput = myInput }}
                    placeholder="store name"
                    defaultValue={getFunName()} />
                <button type="submit">View Store</button>
            </form>
        );

    }
}

export default StorePicker;