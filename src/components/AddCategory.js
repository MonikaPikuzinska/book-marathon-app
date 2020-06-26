import React from 'react';

const AddCategory = (props) => {

    let classNumber = 1; 

    const handleDeleteInputs = (e) => {
        let inputs = document.querySelectorAll('.create-list__form__new-book');
        let buttonDelete = e.target.classList[0];
        inputs.forEach(input => {
            if(input.classList[0]===buttonDelete) {
                input.remove()
        }})
    }
    
    const handleAddCategory = () => {
        let form = document.querySelector('.create-list__form');

        //label and input with category
        let label = document.createElement('label');
        label.innerHTML = "Book category: ";
        label.setAttribute('class', `create-list__form__input${classNumber} create-list__form__new-book create-list__form__category-description`);
        let input = document.createElement('input');
        input.type = 'text';
        input.setAttribute('class', `create-list__form__input${classNumber} create-list__form__new-book create-list__form__category-input`);
        form.appendChild(label);
        form.appendChild(input);

        // label and input with books
        let label2 = document.createElement('label');
        label2.innerHTML = "Picked book: ";
        label2.setAttribute('class', `create-list__form__input${classNumber} create-list__form__new-book create-list__form__book-description`);
        let input2 = document.createElement('input');
        input2.type = 'text';
        input2.setAttribute('class', `create-list__form__input${classNumber} create-list__form__new-book create-list__form__book-input`);
        form.appendChild(label2);
        form.appendChild(input2);

        // delete button
        let button = document.createElement('button');
        button.innerHTML = 'Delete';
        button.onclick = handleDeleteInputs;
        button.type = 'button';
        button.setAttribute('class', `create-list__form__input${classNumber} create-list__form__new-book create-list__form__delete-btn`);
        form.appendChild(button);

        let br = document.createElement("br")
        br.setAttribute('class', `create-list__form__input${classNumber} create-list__form__new-book`);
        form.appendChild(br);
        classNumber++;
        }
    return (
        <>
            <button className="create-list__form__add-category-btn" onClick={handleAddCategory}>Add new category</button>
        </>
    );
}

export default AddCategory;