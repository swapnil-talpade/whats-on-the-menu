import React, { Component } from 'react'

class AddFishForm extends Component {


    createFish = (event) => {
        event.preventDefault();
        const fish = {
            name: this.nameRef.value,
            price: parseFloat(this.priceRef.value),
            status: this.statusRef.value,
            desc: this.descRef.value,
            image: this.imageRef.value
        }
        // console.log(fish)
        this.props.addFish(fish);
        // resetting the form
        event.currentTarget.reset();
    }
    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish} >
                <input type="text" name="name" ref={nameRef => { this.nameRef = nameRef }} placeholder="Name" />
                <input type="text" name="price" ref={priceRef => { this.priceRef = priceRef }} placeholder="Price" />
                <select type="text" name="status" ref={statusRef => { this.statusRef = statusRef }} placeholder="Status">
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea type="text" name="desc" ref={descRef => { this.descRef = descRef }} placeholder="Desc" ></textarea>
                <input type="text" name="image" ref={imageRef => { this.imageRef = imageRef }} placeholder="Image" />
                <button type="submit">+Add Fish</button>
            </form>
        )
    }

}

export default AddFishForm;