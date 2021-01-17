getData = () => {
	createToDo = (toDo) => {
	let div1 = document.createElement('div')
	document.body.append(div1)
	div1.style.border = '1px solid black'
	div1.style.textAlign = 'center'
	div1.style.marginLeft = '30%'
	div1.style.marginRight = '30%'
	div1.style.marginTop = '10px'
	div1.style.marginBottom = '10px'

	let h1 = document.createElement('h1')
	h1.textContent = toDo.title

	let h2 = document.createElement('h2')
	h2.textContent = toDo.description
	
	let p = document.createElement('p')
	p.textContent = toDo.completed
	
	/* var x = document.createElement("HR");
	document.body.appendChild(x);
	x.style.marginLeft = '30%'
	x.style.marginRight = '30%' */

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
.catch() }

var button = document.createElement('button')
button.textContent = "The to do list"
document.body.append(button)

button.addEventListener("click", getData )









