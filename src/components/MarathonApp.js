import React from 'react';
import AddCategory from './AddCategory';
import Submit from './Submit';

const MarathonApp = () => {
        return (
          <>
          <h1>Make your own book list for a reading marathon!</h1>
          <form className="create-list">
            <label className="create-list__name-description">Marathon name: </label>
            <input type="text" className="create-list__name-input"/><br/>
            <label className="create-list__category-description">Category of a book: </label>
            <input type="text" className="create-list__category-input"/>
            <label className="create-list__book-description">Chosen book: </label>
            <input type="text" className="create-list__book-input"/><br/>
          </form>
          <AddCategory/>
          <Submit/>
          </>
        )
}        


export default MarathonApp;