
async function getData(){
    
    try {
        const result = await axios.get("https://swapi.dev/api/people") 
        console.log(result)
        for(var i=0;i<result.data.results.length; i++){
            console.log(result.data.results[i])
            const films = await axios.get(result.data.results[i].films[i])
            console.log(films.data.title)
            const homeworld = await axios.get(result.data.results[i].homeworld)
            console.log(homeworld.data.name)
            console.log(result.data.results[i])
    
            charInfo(result.data.results[i].name)
            movies(films.data.title)
            maleOrNo(homeworld.data.name)

        }

    }
    catch(error){
        console.log(error)
    }
        
}

getData()

function charInfo(names){
    let h1 = document.createElement('h1')
    h1.textContent = names
    h1.style.border = "1px solid black"
    h1.style.borderRadius = "30px"
    h1.style.backgroundColor = "red"
    h1.style.display = "flex"
    h1.style.justifyContent = "center"
    h1.style.marginRight = "25%"
    h1.style.marginLeft = "25%"

    document.body.appendChild(h1)
}

function movies(films){
    let filmName = document.createElement('h3')
    filmName.textContent = films
    filmName.style.borderRadius = "10px"
    filmName.style.backgroundColor = "green"
    filmName.style.display = "flex"
    filmName.style.justifyContent = "center"
    filmName.style.textAlign = "center"
    filmName.style.marginRight = "35%"
    filmName.style.marginLeft = "35%"

    document.body.appendChild(filmName)
}

function maleOrNo(homeworld){
    let worlds = document.createElement('h5')
    worlds.textContent = homeworld
    worlds.style.borderRadius = "10px"
    worlds.style.backgroundColor = "yellow"
    worlds.style.display = "flex"
    worlds.style.justifyContent = "center"
    worlds.style.marginRight = "40%"
    worlds.style.marginLeft = "40%"

    document.body.appendChild(worlds)
}

