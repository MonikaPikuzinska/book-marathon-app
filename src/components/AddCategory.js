import React from 'react';

const AddCategory = (props) => {

    let classNumber = 1; 

    const handleDeleteInputs = (e) => {
        let inputs = document.querySelectorAll(`.newBook`);
        let buttonDelete = e.target.className;
        inputs.forEach(input => {
            if(input.className===buttonDelete) document.getElementById('list').removeChild(input);
            return console.log(input);
        })
    }
    
    const handleAddCategory = () => {
        let form = document.getElementById('list');
        let label = document.createElement('label');
        label.innerHTML = "Category of a book: ";
        label.setAttribute('class', `input${classNumber} newBook`);
        let input = document.createElement('input');
        input.type = 'text';
        input.setAttribute('name', 'category');
        input.setAttribute('id', 'category');
        input.setAttribute('class', `input${classNumber} newBook`);
        form.appendChild(label);
        form.appendChild(input);
        let label2 = document.createElement('label');
        label2.innerHTML = "Chosen book: ";
        label2.setAttribute('class', `input${classNumber} newBook`);
        let input2 = document.createElement('input');
        input2.type = 'text';
        input2.setAttribute('name', 'book');
        input2.setAttribute('id', 'book');
        input2.setAttribute('class', `input${classNumber} newBook`);
        form.appendChild(label2);
        form.appendChild(input2);
        let button = document.createElement('button');
        button.innerHTML = 'Delete';
        button.onclick = handleDeleteInputs;
        button.type = 'button';
        button.setAttribute('class', `input${classNumber} newBook`);
        form.appendChild(button);
        form.appendChild(document.createElement("br"));
        classNumber++;
        }
    return (
        <>
            <button onClick={handleAddCategory}>Add new category</button>
        </>
    );
}

export default AddCategory;