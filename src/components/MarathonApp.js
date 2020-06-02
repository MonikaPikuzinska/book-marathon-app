import React, { Component } from 'react';
import AddCategory from './AddCategory';
import Submit from './Submit';

class MarathonApp extends Component {
  state = {
  }

    render() {
        return (
          <>
          <h1>Make your own book list for a reading marathon!</h1>
          <form id="list">
            <label>Marathon name: </label>
            <input type="text" id="mname" name="mname"/><br/>
            <label>Category of a book: </label>
            <input type="text" id="category" name="category"/>
            <label>Chosen book: </label>
            <input type="text" id="book" name="book"/><br/>
          </form>
          <AddCategory/>
          <Submit/>
          </>
        );
      }
    
}        


export default MarathonApp;