/* function createToDo(toDo) */

createToDo = (toDo) => {
		let div1 = document.createElement('div')
		document.body.append(div1)

		let h1 = document.createElement('h1')
		h1.textContent = toDo.title

		let h2 = document.createElement('h2')
		h2.textContent = toDo.description
		
		let p = document.createElement('p')
		p.textContent = toDo.completed
		
		var x = document.createElement("HR");
		document.body.appendChild(x);
		
		div1.append(h1)
		div1.append(h2)
		div1.append(p)
		/* 	document.body.append(hr) */
		if(toDo.completed == false){
			div1.style.textDecoration= "line-through" 
		}
}

axios.get("https://api.vschool.io/JesusHernandez/todo")
	
	/* .then(response => response.json()) */
	.then(res => {
		for(let i = 0; i < res.data.length; i++) {
			createToDo(res.data[i])
			
			}
		})
	.catch() 
	/* //SOLID principles
		


// const axios = require('axios');
var dataBase =[];

var populateUI = function(htmlElementID, data){
	var htmlElement = document.getElementById(htmlElementID);
	data.forEach(element => {
      
        // htmlElement.insertAdjecentHTML('afterend', `<div>${element.title}</div>`)
        htmlElement.insertAdjacentHTML('afterend',  `<div>${element.title}</div>`);
        htmlElement.insertAdjacentHTML('afterend',  `<div>${element.description}</div>`);
        htmlElement.insertAdjacentHTML('afterend',  `<strike>${element.completed}</strike>`);
	});
}

var getToDos = function (urlQuer, htmlElement){

	axios.get(apiQueryPath)
	  .then(function (response) {
		// handle success
		console.log(response);
		var mydata = response.data;
		populateUI(htmlElement, mydata);
		
	  })
	  .catch(function (error) {
		// handle error
		console.log(error);
	  })
	  .then(function () {
		
	  });


}

var host = "https://api.vschool.io"
var path = "JesusHernandez";
var parameter = "todo";
var apiQueryPath = `${host}/${path}/${parameter}`;
debugger

getToDos(apiQueryPath, "todoID"); */




