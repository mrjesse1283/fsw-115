/* function createToDo(toDo) */
7
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




