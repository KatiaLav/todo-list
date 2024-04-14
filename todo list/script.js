"use strict"
const button = document.querySelector('.container__input button');
const input = document.querySelector('.container__input input');
const list = document.querySelector('.container__list');

button.addEventListener("click", () => {
	const li = document.createElement('li')// тег li створила
	li.className = 'container__list-item';
	const deleteBtn = document.createElement("button");
	deleteBtn.className = 'delete-btn'
	deleteBtn.innerText = "Видалити";
	li.innerText = input.value;
	list.appendChild(li);// додати тег li в list
	li.appendChild(deleteBtn);// додати кнопку в li
	input.value = '';

	deleteBtn.addEventListener('click', () => {
		list.removeChild(li);
	})
})

