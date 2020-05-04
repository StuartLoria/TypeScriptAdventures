console.log('Happy Coding Exploration!');

const textEl = document.getElementById('myText')!;
const buttonEl = document.querySelector('button')!;
const labelEl = document.getElementById('myLabel')!;

function clickEventHandler(){
	let textDom : HTMLInputElement = textEl as HTMLInputElement;
	let textDomValue: string = textDom.value;

	let labelDom = labelEl as HTMLLabelElement;
	labelDom.innerText = textDomValue;
}

if(buttonEl) {
	buttonEl.addEventListener('click', clickEventHandler);
}