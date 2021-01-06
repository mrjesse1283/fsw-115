const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        const obj = data.objects[0]
        const poke = obj.pokemon 
        pokemon(poke)

    }
}

function pokemon(poke) {
    for(var i =0; i < poke.length; i++) {
        const h4 = document.createElement("h4")
        h4.textContent = poke[i].name
        document.body.appendChild(h4)
        
    }
}
