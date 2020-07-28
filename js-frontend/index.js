const endPoint = "http://localhost:3000/api/v1/battles"

document.addEventListener('DOMContentLoaded', () => {
    getBattles()
})

function getBattles () {
    fetch (endPoint)
    .then(response => response.json())
    .then( battles => {
        battles.data.forEach(battle => {
         const battleMarkup = `
          <div data-id=${battle.id}>
            <img src=${battle.attributes.image_url} height="200" width="250">
            <h3>${battle.attributes.title}</h3>
            <h5>${battle.attributes.country.name}</h5>
            <p>${battle.attributes.description}</p>

            <button data-id=${battle.id}>edit</button>
          </div>
          <br><br>`;
          document.querySelector('#battle-container').innerHTML += battleMarkup
        })
    })
}
