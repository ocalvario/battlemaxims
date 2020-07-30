const endPoint = "http://localhost:3000/api/v1/battles"

document.addEventListener('DOMContentLoaded', () => {
    getBattles()
    
    createBattleForm = document.querySelector('#create-battle-form')
    getBody = document.querySelector('body')
    getBody.addEventListener('submit', (e) => createFormHandler(e))
  });

function getBattles () {
    fetch (endPoint)
    .then(response => response.json())
    .then( battles => {
        battles.data.forEach(battle => {
        // debugger
        let newBattle = new Battle(battle, battle.attributes)
          
        document.querySelector('#battle-container').innerHTML += 
        newBattle.renderBattleCard()
       })
    })
}

function createFormHandler(e) {
    e.preventDefault();
    const titleInput = document.querySelector('#input-title').value
    const descriptionInput = document.querySelector('#input-description').value
    const imageInput = document.querySelector('#input-url').value
    const countryInput = document.querySelector('#countries').value
    const countryId = parseInt(countryInput)
    let countryName 
    switch(countryInput) {
      case "1":
        countryName = "Egypt";
        break;
      case "2":
        countryName = "Germany";
        break;
      case "3":
        countryName = "Netherlands";
        break;
    case "4":
      countryName = "Portugal";
      break;
    case "5":
      countryName = "Russia";
      break;
    case "6":
      countryName = "Spain";
      break;
     }
    postBattle(titleInput, descriptionInput, imageInput, countryId, countryName)
}

function postBattle(title, description, image_url, country_id, country_name) {
    // confirm these values are coming through properly
    // console.log(title, description, image_url, country_id, country_name);
    const warData = {title, description, image_url, country_id, country_name}
    fetch (endPoint, {
      // POST request
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(warData)
    })
    .then(response => response.json())
    .then(battle => {
      let newBattle = new Battle(battle, battle, country_name)
      document.querySelector('#battle-container').innerHTML += 
      newBattle.renderBattlePost()

    })
}
