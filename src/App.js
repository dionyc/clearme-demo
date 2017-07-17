import React, { Component } from 'react';
import './App.css';

class App extends Component {

   constructor() {
    super();

    this.state = {
      listItemName: '',
      listItemDescription: '',
      promoCode: '',
      listItemCost: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
  }

  handleInputChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    this.setState(currentState => {
      return {
        ...currentState,
        [inputName]: inputValue
      };
    });
  }

  handleSubmitEvent(event) {
    event.preventDefault();

    const { addListItem } = this.props;
    const {
      listItemName,
      listItemDescription,
      promoCode,
      listItemCost
    } = this.state;

    const listItem = {
      date: new Date(),
      name: listItemName.trim(),
      description: listItemDescription.trim(),
      quantity: parseInt(promoCode, 10),
      cost: parseInt(listItemCost, 10)
    };

    addListItem(listItem);
  }

  render() {
    const {
      listItemName,
      listItemDescription,
      promoCode,
      listItemCost
    } = this.state;


    return (
      <div className="container">
        <h2>Clear Membership Estimate</h2>

            <form onSubmit={this.handleSubmitEvent}>
              <h3 className="page-header"></h3>

              <div className="form-group row">
                <label htmlFor="listItemName">Add a Family Member </label>
                <div className="row">
                  <div className="col-xs-5 col-sm-6 col-md-4">  
                <input 
                  type="text"
                  className="form-control"
                  id="listItemName"
                  name="listItemName"
                  placeholder="Enter name"
                  required
                  value={listItemName}
                  onChange={this.handleInputChange} />
              </div>
              </div>
              </div>
              <button type="submit" className="btn btn-primary">Add</button>

              <div className="form-group row">
                <label htmlFor="promoCode"></label>
                <div className="row">
                  <div className="col-xs-5 col-sm-6 col-md-4">
                    <input
                    placeholder="Promo Code"
                      type="text"
                      min="1"
                      max="9999"
                      step="1"
                      className="form-control"
                      id="promoCode"
                      name="promoCode"
                      value={promoCode}
                      onChange={this.handleInputChange} />
                  </div>
                </div>
              </div>  
              <button type="submit" className="btn btn-primary">Apply</button>     

            </form>
      </div>
    );
  }
}

export default App;
