const endPoint = "http://localhost:3000/api/v1/battles"

document.addEventListener('DOMContentLoaded', () => {
    getBattles()
  // fetch and load battles  
  getBattles()
  // listen for 'submit' event on form and handle data
    const createBattleForm = document.querySelector('#create-battle-form')
    createBattleForm.addEventListener('submit', (e) => createFormHandler(e))
    // listen for 'submit' event on battle details
    const battleDetails = document.querySelector('#battle-details')
    battleDetails.addEventListener('click', e => {
      const id = parseInt(e.target.dataset.id);
      const battle = Battle.all.find(battle => battle.id == id)
      let battle = Battle.all.find(battle => battle.id == id)
      // render edit form once button is clicked
      document.querySelector('#update-battle').innerHTML = battle.renderUpdateForm();
    });
     // listen for the submit event of the edit form and handle the data
    document.querySelector('#update-battle').addEventListener('submit', e => updateFormHandler(e))

    const sortButton = document.querySelector('#sort-button')
    sortButton.addEventListener('click', e => {
      sortBattles();
    })

  });

  function sortBattles () {
    fetch(endPoint)
    .then(response => response.json())
    .then (battles => {
      battles.data.sort(function(a, b) {
        var nameA = a.attributes.title.toUpperCase(); // ignore upper and lowercase
        var nameB = b.attributes.title.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
      console.log(battles.data)
    })

  }
    fetch (endPoint)
    .then(response => response.json())
    .then( battles => {
        // JSON data is nested thanks to serializer, so need to access it
        battles.data.forEach(battle => {
           // create a new instance of the Battle class for every battle in the array from the DB (which are nested)
        const newBattle = new Battle(battle, battle.attributes)
        // call renderBattleCard() located in Battle class
        document.querySelector('#battle-details').innerHTML += newBattle.renderBattleCard();
       })
    })
}

function createFormHandler(e) {
    // prevents default behavior
    e.preventDefault()
    // gathers all the input values and passes to function to execute fetch
    const titleInput = document.querySelector('#input-title').value
    const descriptionInput = document.querySelector('#input-description').value
    const imageInput = document.querySelector('#input-url').value
    const countryInput = document.querySelector('#countries').value
    const countryId = parseInt(countryInput)
    postBattle(titleInput, descriptionInput, imageInput, countryId)
}

function postBattle(title, description, image_url, country_id) {
    // build warData object outside of my fetch
    const warData = {title, description, image_url, country_id}
    fetch ( endPoint, {
      // POST request
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(warData)
    })
    .then(response => response.json())
    .then( 
      battle => {
        const battleData = battle.data
        const newBattle = new Battle(battleData, battleData.attributes)
        document.querySelector('#battle-details').innerHTML += 
        newBattle.renderBattleCard()
        // call renderBattleCard() located in Battle class
        document.querySelector('#battle-details').innerHTML += newBattle.renderBattleCard()
      });
}

function updateFormHandler(e) {
  // prevents default behavior
  e.preventDefault();
  // gathers all the input values and passes to function to execute fetch
  const id = parseInt(e.target.dataset.id);
  const battle = Battle.all.find(battle => battle.id == id);
  const title = e.target.querySelector('#input-title').value;
  const description = e.target.querySelector('#input-description').value;
  const image_url = e.target.querySelector('#input-url').value;
  const country_id = parseInt(e.target.querySelector('#countries').value);
  patchBattle(battle, title, description, image_url, country_id)
}

function patchBattle(battle, title, description, image_url, country_id) {
    const bodyJSON = { title, description, image_url, country_id }
    fetch(`http://localhost:3000/api/v1/battles/${battle.id}`, {
      method: 'PATCH',
  headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( bodyJSON ),
  })
    .then(res => res.json(),
    afterUpdate(),
    getBattles())}
    .then(res => res.json())
    .then(updatedBattle => {  
     const battle = Battle.findById(updatedBattle.data.id);
     battle.update(updatedBattle);
     addBattles(); 
    })
    }

    function addBattles() {
      document.querySelector('#battle-details').innerHTML = "";
      Battle.all.forEach(
        battle => (document.querySelector('#battle-details').innerHTML += battle.renderBattleCard())
      );
    }

function afterUpdate() {
  window.location.reload(true);
}
