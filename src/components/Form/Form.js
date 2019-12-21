import React, { Component } from 'react';

class Form extends Component {
    constructor () {
        super ();
        this.state = {
            name: '',
            price: 0,
            image_url: ''
        };
    }

    handleNameChange(product) {
        this.setState({ name: product});
    }

    handlePriceChange(itemPrice) {
        this.setState({ price: itemPrice});
    }

    handleImage(newImg) {
        this.setState({ image_url: newImg});
    }

    handleCancel() {

    }


    render () {
        const { name, price, image_url } = this.state;
        return (
            <div className="form">
                <h1>Form</h1>
                {/* <img scr='' href=''/> */}
                <h4>Image URL:</h4>    
                <input
                    value={this.state.image_url}
                    onChange={e => this.handleImage(e.target.value)}
                />
                <h4>Product Name:</h4> 
                <input 
                    value={this.state.name}
                    onChange={e => this.handleNameChange(e.target.value)}
                />
                <h4>Price:</h4>
                <input 
                    value={this.state.price}
                    onChange={e => this.handlePriceChange(e.target.value)}
                />
                <br></br>
                <button onClick={() => this.handleCancel({name, price, image})}>Cancel</button>    
                <button onClick={() => this.handleAdd({name, price, image})}>Add to Inventory</button>     
            </div>
        )
    }
}

export default Form;