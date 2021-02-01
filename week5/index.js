const form = document.form
const lines = document.getElementById("lines")

let deleteData = () => {
    /* while (lines.firstChild) lines.removeChild(lines.firstChild) */
    lines.innerHTML = ""
}


form.addEventListener("submit", function (event) {
    event.preventDefault();
    const newToDo = {
        title: form.title.value,
        price: form.price.value,
        description: form.description.value
    }
    axios.post("https://api.vschool.io/JesusHernandez/todo", newToDo)
        .then(form.reset())
        .then(deleteData)
        .then(getToDo)


        .catch()
})

let updateComp = (e) => {
    let checkBox = document.getElementsByClassName("checkBox")
    for (let i = 0; i < checkBox.length; i++) {
        if (e.target == checkBox[i]) {
            let item = checkBox[i].parentNode
            if(checkBox[i].checked ){
                item.style.textDecoration = "line-through"
                checkBox[i].checked = true 
            }else {
                item.style.textDecoration = "none"
                checkBox[i].checked = false
            }

            
            let checked = checkBox[i].parentNode  //tag <> parent of checkbox
            let x = checked.id
            let completed={completed:checkBox[i].checked}

            /*  console.log("hi") */
            axios.put(`https://api.vschool.io/JesusHernandez/todo/${x}`, completed)
                /* .then()

                .catch(error => alert("error")) */
            
        }
    }

}



createToDo = (toDo) => {
    let div1 = document.createElement('div')
    div1.setAttribute("id", toDo._id)
   /*  document.body.append(div1) */
    div1.style.display = "flex"
    div1.style.flexDirection = "row"
    div1.style.alignItems = "center"
    div1.style.justifyContent = "space-between"


    let h1 = document.createElement('h1')
    h1.textContent = toDo.title

    let h2 = document.createElement('h2')
    h2.textContent = toDo.description

    let p = document.createElement('p')
    p.textContent = toDo.completed

    let checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    checkBox.className = "checkBox"
    checkBox.onchange = updateComp

    let delBtn = document.createElement("button")
    delBtn.className = "remove"
    delBtn.textContent = "Remove"

  /*   var x = document.createElement("HR");
    document.body.appendChild(x); */

    div1.append(h1)
    div1.append(h2)
    div1.append(p)
    div1.append(checkBox)
    div1.append(delBtn)

    lines.append(div1)

    div1.addEventListener('click', function (e) {
        let remove = document.getElementsByClassName("remove")
        for (let i = 0; i < remove.length; i++) {
            if (e.target == remove[i]) {
                let checked = remove[i].parentNode
                let x = checked.id

                /*  console.log("hi") */
                axios.delete("https://api.vschool.io/JesusHernandez/todo/"+x) //could also use ${x} could only be used with back ticks
                    /* .then()

                    .catch(error => alert("error")) */
                lines.removeChild(checked)
            }
        }

    })

    /* 	document.body.append(hr) */
   /*  if (toDo.completed == true) {
        div1.style.textDecoration = "line-through"
    } else (
        div1.style.textDecoration = "none"
    ) */
}


let getToDo = () => {
    axios.get("https://api.vschool.io/JesusHernandez/todo")
    /* .then(response => response.json()) */
    .then(res => {
        for (let i = 0; i < res.data.length; i++) {
            createToDo(res.data[i])

        }
    })
    .catch(error => alert("error"))
}
getToDo()

// study setAttribute()