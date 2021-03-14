import React, { Component } from 'react';
import Order from './components/Order';
import Inventory from './components/Inventory';
import { Header } from './components/Header';
import sampleFishes from './sample-fishes';
import Fish from './components/Fish';
import base from './base';


class App extends Component {
  state = {
    fishes: {},
    order: {}
  }

  addFish = fish => {
    console.log(`Adding fish`);
    // take a copy of existing state
    const fishes = { ...this.state.fish };

    // Add new fish to fishes
    fishes[`fish${Date.now()}`] = fish;
    // set new fishes object to state
    this.setState({
      // can also use just fishes as the name is same
      fishes: fishes
    })
  }
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes })
  }

  updateFish=(key,updatedFish)=>{
    // take copy of current fish
    const fishes={...this.state.fishes};
    // update that state
    fishes[key]=updatedFish;
    // setstate 
    this.setState({fishes:fishes});
  }

  deleteFish=(key)=>{
    // take a copy
    const fishes={...this.state.fishes};
    // set fish you wish to delete to null in order for firebase to reflec changes
    fishes[key]=null;
    // update state
    this.setState({fishes:fishes});
  }

  addToOrder = key => {
    // tale a copy
    const order = { ...this.state.order };

    // either add to the order or increment the number
    order[key] = order[key] + 1 || 1;

    // call setstate to update order
    this.setState({ order: order });

  }

  removeFromOrder=key=>{
    // tale a copy
    const order = { ...this.state.order };

    // remove order
    delete order[key];

    // call setstate to update order
    this.setState({ order: order });
  }

  componentDidMount() {
    console.log('mounted');
    const { params } = this.props.match;

    const localStorageRef = localStorage.getItem(params.storeId);
    console.log(localStorageRef);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) })
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate() {
    console.log(this.state.order);
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    console.log("Its updated");
  }
  // this is done because syncState is constantly looking for
  //  changes and this may cause inefficeint memory managemnet hence do the cleanup after unmounting
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }


  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Swapnil is cool" />
          <ul className="fishes">
            {/* iterate over fishes object using map  */}
            {Object.keys(this.state.fishes).map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)}
          </ul>
        </div>
        <Order order={this.state.order} fishes={this.state.fishes} removeFromOrder={this.removeFromOrder}/>
        <Inventory 
        deleteFish={this.deleteFish}
        addFish={this.addFish} 
        loadSampleFishes={this.loadSampleFishes} 
        fishes={this.state.fishes} 
        updateFish={this.updateFish}/>

      </div>
    );
  }

}

export default App;
