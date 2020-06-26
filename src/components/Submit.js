import React, { useEffect } from 'react';

const Submit = () => {

  function Marathon (id, name, categories, books, read) {
    this.id = id;
    this.name = name;
    this.categories = categories;
    this.books = books;
    this.read = read;
    };

  let list = [];

  const handleDeleteList = (e) => {
    let classBtn = e.target.classList[1];
    let classLS = e.target.classList[2];
    localStorage.setItem(`${classLS}`,null);

    document.querySelector(`.${classBtn}`).remove();
}
  
  const handleChecked = (e) => {
    let labelBooks = document.querySelectorAll('label');
    labelBooks.forEach(lb => {
      if(e.target.classList[1]===lb.classList[1]){
        lb.classList.toggle('marathon__list__book--read');
      };
    });
  };

  let number = 0;

  const handleAddOneListToPage = () => {
    let item = JSON.parse(localStorage.getItem(`list${localStorage.length-1}`));
    let marathonList = document.createElement('div');
      marathonList.setAttribute('class', `marathon__list marathon__list${item.id}`);
      document.querySelector('.marathon').appendChild(marathonList);
      let list = document.querySelector(`.marathon__list${item.id}`); 

      // button which deletes list
      let deleteBtn = document.createElement('div');
      deleteBtn.onclick = handleDeleteList;
      deleteBtn.setAttribute('class', `marathon__list__delete-list-btn marathon__list${item.id} list${item.id}`);
      list.appendChild(deleteBtn);

      let title = document.createElement('h2');
      title.innerHTML = `${item.name}`;
      title.setAttribute('class', 'marathon__list__title')
      list.appendChild(title);
      document.querySelector('.create-list__form__name-input').value = '';

      //adding categories and books into DOM
      for(let j=0; j<item.categories.length; j++) {
          let checkbox = document.createElement('input');
          checkbox.setAttribute('type', 'checkbox');
          checkbox.setAttribute('id', `book${number+j}`);
          checkbox.setAttribute('class', `marathon__list__checkbox checked${number+j}`);
          checkbox.onclick = handleChecked;
          list.appendChild(checkbox);
          let book = document.createElement('label');
          book.setAttribute('for', `book${number+j}`);
          book.setAttribute('class', `marathon__list__book checked${number+j}`);
          book.innerHTML = `${item.categories[j]}- ${item.books[j]}`;
          list.appendChild(book);
          list.appendChild(document.createElement('br'));
          number++
     };
  }

  const handleAddListToPage = () => {
    for (let i=0;i<localStorage.length;i++){
    let item = JSON.parse(localStorage.getItem(`list${i}`))

    if(item!==null){
      let marathonList = document.createElement('div');
      marathonList.setAttribute('class', `marathon__list marathon__list${item.id}`);
      document.querySelector('.marathon').appendChild(marathonList);
      let list = document.querySelector(`.marathon__list${item.id}`); 

      // button which deletes list
      let deleteBtn = document.createElement('div');
      deleteBtn.onclick = handleDeleteList;
      deleteBtn.setAttribute('class', `marathon__list__delete-list-btn marathon__list${item.id} list${item.id}`);
      list.appendChild(deleteBtn);

      let title = document.createElement('h2');
      title.innerHTML = `${item.name}`;
      title.setAttribute('class', 'marathon__list__title')
      list.appendChild(title);
      document.querySelector('.create-list__form__name-input').value = '';

      //adding categories and books into DOM
      for(let j=0; j<item.categories.length; j++) {
          let checkbox = document.createElement('input');
          checkbox.setAttribute('type', 'checkbox');
          checkbox.setAttribute('id', `book${number+j}`);
          checkbox.setAttribute('class', `marathon__list__checkbox checked${number+j}`);
          checkbox.onclick = handleChecked;
          list.appendChild(checkbox);
          let book = document.createElement('label');
          book.setAttribute('for', `book${number+j}`);
          book.setAttribute('class', `marathon__list__book checked${number+j}`);
          book.innerHTML = `${item.categories[j]}- ${item.books[j]}`;
          list.appendChild(book);
          list.appendChild(document.createElement('br'));
          number++;
     };
    } else console.log('No list')
    }
  };
  
  const handleMarathonItems = () => {
    if (localStorage) {
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key.substring(0, 4) === "list") {
                var item = localStorage.getItem(key);
                var listItem = JSON.parse(item);
                list.push(listItem);
           }
        }
        handleAddListToPage();
    }
    else {
        console.log("Error: you don't have localStorage!");
    }
  };

  useEffect(()=>{
    handleMarathonItems();
  },[]);

  const handleSaveListItem = (listItem) => {
    if (localStorage) {
        let key = "list" + listItem.id;
        var item = JSON.stringify(listItem);
        localStorage.setItem(key, item);
    }
    else {
        console.log("Error: you don't have localStorage!");
    }
  };
  const handleFormData = () => {
    const categories = [];
    document.querySelectorAll('.create-list__form__category-input').forEach(c=>{
      categories.push(c.value);
      c.value='';
    });
    const books = [];
    document.querySelectorAll('.create-list__form__book-input').forEach(b=>{
      books.push(b.value);
      b.value='';
    });

    const name = document.querySelector('.create-list__form__name-input').value;
    
    const id = list.length;
    var listItem = new Marathon(id, name, categories, books, false);
    list.push(listItem);
    handleSaveListItem(listItem);
    handleAddOneListToPage();
  };

      return (
         <>
           <button onClick={handleFormData} className="create-list__form__submit-btn">Submit</button>
           <div className='marathon'></div>
         </>
      )
}

export default Submit;