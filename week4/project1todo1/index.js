//SOLID principles

// const axios = require('axios');
var dataBase =[];

var populateUI = function(htmlElementID, data){
	var htmlElement = document.getElementById(htmlElementID);
	data.forEach(element => {
      
        // htmlElement.insertAdjecentHTML('afterend', `<div>${element.title}</div>`)
        htmlElement.insertAdjacentHTML('afterend',  `<div>${element.title}</div>`);
        htmlElement.insertAdjacentHTML('afterend',  `<div>${element.description}</div>`);
        htmlElement.insertAdjacentHTML('afterend',  `<strike>${element.completed}</strike>`);
        htmlElement.insertAdjacentHTML('afterend', '<hr/>');
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
	/*   .then(function () {
		
	  }); */


}

var host = "https://api.vschool.io"
var path = "JesusHernandez";
var parameter = "todo";
var apiQueryPath = `${host}/${path}/${parameter}`;
debugger

getToDos(apiQueryPath, "todoID");

// axios.get("https://api.vschool.io/JesusHernandez/todo")
//     .then(response => {
//         for(let i = 0; i < response.data.length; i++){
//             const h1 = document.createElement('h1')
//             h1.textContent = response.data[i].title

//             const h2 = document.createElement('h2')
//             h2.textContent = response.data[i].description
          
//             const p = document.createElement('p')
//             p.textContent = response.data[i].completed

//             document.body.appendChild(h1)
//             document.body.append(h2)
//             document.body.append(p)
//         }
//     })
//     .catch() 



