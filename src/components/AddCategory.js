import React from 'react';

const AddCategory = (props) => {
    const handleAddCategory = () => {
        let form = document.getElementById('list');
        let label = document.createElement('label');
        label.innerHTML = "Category of a book: ";
        let input = document.createElement('input');
        input.type = 'text';
        input.setAttribute('name', 'category');
        input.setAttribute('id', 'category');
        form.appendChild(label);
        form.appendChild(input);
        let label2 = document.createElement('label');
        label2.innerHTML = "Chosen book: ";
        let input2 = document.createElement('input');
        input2.type = 'text';
        input2.setAttribute('name', 'book');
        input2.setAttribute('id', 'book');
        form.appendChild(label2);
        form.appendChild(input2);
        form.appendChild(document.createElement("br"));
        }
    return (
        <>
            <button onClick={handleAddCategory}>Add new category</button>
        </>
    );
}

export default AddCategory;