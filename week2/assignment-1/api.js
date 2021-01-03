const chuckNorris = {
    "categories": [],
    "created_at": "2020-01-05 13:42:19.104863",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "pcIpDYNTSDKnDf0yyT1evA",
    "updated_at": "2020-01-05 13:42:19.104863",
    "url": "https://api.chucknorris.io/jokes/pcIpDYNTSDKnDf0yyT1evA",
    "value": "Nature gets back to Chuck Norris"
}

let data = JSON.stringify(chuckNorris);
let api = document.getElementById("api");
api.textContent = data;
