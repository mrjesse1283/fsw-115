getData = () => {

	createToDo = (toDo) => {

	let div1 = document.createElement('div')
	document.body.append(div1)
	div1.style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
	div1.style.border = '1px solid black'
	div1.style.borderRadius = '40%'
	div1.style.textAlign = 'center'
	div1.style.marginLeft = '30%'
	div1.style.marginRight = '30%'
	div1.style.marginTop = '10px'
	div1.style.marginBottom = '10px'

	let h1 = document.createElement('h1')
	h1.textContent = toDo.name
	h1.style.color = 'white'

	let h2 = document.createElement('h2')
	h2.textContent = toDo.height + " inches"
	
	let p = document.createElement('p')
	p.textContent = toDo.gender 
	
/* 	var x = document.createElement("HR");
	document.body.appendChild(x); */
	
	div1.append(h1)
	div1.append(h2)
	div1.append(p)
	/* 	document.body.append(hr) */

    if(toDo.gender !== "male" && toDo.gender !== "female"){
	    div1.style.textDecoration= "line-through" 
	}
}
console.log("wheres the data")

// the get request using axios
axios.get("https://swapi.dev/api/people")

/* .then(response => response.json()) */
.then(res => {
    console.log("wheres the data")
    console.log(res.data)
	for(let i = 0; i < res.data.results.length; i++) {
		createToDo(res.data.results[i])
		
		}
	})
	.catch() }

var button = document.createElement('button')
button.textContent = "People"
button.style.backgroundColor = 'red'
document.body.append(button)

// button.style.padding = '15px 32px';
// button.style.textAlign = 'center';
// button.style.textDecoration = 'none';
// button.style.display = 'inline-block';
// button.style.fontSize = '16px';

button.addEventListener("click", getData )
