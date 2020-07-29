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
    postBattle(titleInput, descriptionInput, imageInput, countryId)
}

function postBattle(title, description, image_url, country_id) {
    // confirm these values are coming through properly
    // console.log(title, description, image_url, country_id);

    const warData = {title, description, image_url, country_id}
  
    fetch (endPoint, {
      // POST request
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(warData)
    })
    .then(response => response.json())
    .then(battle => {
      const battleData = battle.data
      let newBattle = new Battle(battleData, battleData.attributes)
          
      document.querySelector('#battle-container').innerHTML += 
      newBattle.renderBattleCard()

    })
}
