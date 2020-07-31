const endPoint = "http://localhost:3000/api/v1/battles"

document.addEventListener('DOMContentLoaded', () => {
    getBattles()
    
    const createBattleForm = document.querySelector('#create-battle-form')
    // getBody = document.querySelector('body')
    createBattleForm.addEventListener('submit', (e) => createFormHandler(e))
    const battleDetails = document.querySelector('#battle-details')
    battleDetails.addEventListener('click', e => {
      const id = parseInt(e.target.dataset.id);
      const battle = Battle.all.find(battle => battle.id == id)
      document.querySelector('#update-battle').innerHTML = battle.renderUpdateForm();
    });
    document.querySelector('#update-battle').addEventListener('submit', e => updateFormHandler(e))
  });

function getBattles () {
    fetch (endPoint)
    .then(response => response.json())
    .then( battles => {
        battles.data.forEach(battle => {
        let newBattle = new Battle(battle, battle.attributes)
          
        document.querySelector('#battle-details').innerHTML += 
        newBattle.renderBattleCard()
       })
    })
}

function createFormHandler(e) {
    e.preventDefault()
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
      document.querySelector('#battle-details').innerHTML += 
      newBattle.renderBattlePost()

    })
}

function updateFormHandler(e) {
  e.preventDefault();
  const id = parseInt(e.target.dataset.id);
  const battle = Battle.all.find(battle => battle.id == id);
  const title = e.target.querySelector('#input-title').value;
  const description = e.target.querySelector('#input-description').value;
  const image_url = e.target.querySelector('#input-url').value;
  const country_id = parseInt(e.target.querySelector('#countries').value);
  patchSyllabus(battle, title, description, image_url, country_id)
}

function patchSyllabus(battle, title, description, image_url, country_id) {
    const bodyJSON = { title, description, image_url, country_id }
    fetch(`http://localhost:3000/api/v1/battles/${battle.id}`, {
      method: 'PATCH',
  headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(bodyJSON),
  })
    .then(res => res.json());
    // our backend responds with the updated syllabus instance represented as JSON
}



