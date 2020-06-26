import React from 'react';
import AddCategory from './AddCategory';
import Submit from './Submit';

const MarathonApp = () => {
        return (
          <>
          <h1 className="header">Make your own book list for a reading marathon!</h1>
          <div className="create-list">
            <form className="create-list__form">
              <label className="create-list__form__name-description">Marathons name: </label>
              <input type="text" className="create-list__form__name-input"/><br/>
              <label className="create-list__form__category-description">Book category: </label>
              <input type="text" className="create-list__form__category-input"/>
              <label className="create-list__form__book-description">Picked book: </label>
              <input type="text" className="create-list__form__book-input"/><br/>
            </form>
            <AddCategory/>
            <Submit/>
          </div>
          </>
        )
}        


export default MarathonApp;