class Battle {
    constructor(battle, battleAttributes, country_name="") {
        this.id = battle.id
        this.title = battleAttributes.title
        this.description = battleAttributes.description
        this.image_url = battleAttributes.image_url
        this.country = battleAttributes.country
        this.country_name = country_name
        Battle.all.push(this)
    }

     renderBattleCard() {
        return `
        <div data-id=${this.id}>
          <img src=${this.image_url} height="200" width="250">
          <h3>${this.title}</h3>
          <h5>${this.country.name}</h5>
          <p>${this.description}</p>
          <button data-id=${this.id}>edit</button>
        </div>
        <br><br>`;
    }

    renderBattlePost() {
        return `
        <div data-id=${this.id}>
          <img src=${this.image_url} height="200" width="250">
          <h3>${this.title}</h3>
          <h5>${this.country_name}</h5>
          <p>${this.description}</p>
          <button data-id=${this.id}>edit</button>
        </div>
        <br><br>`;
    }

}

Battle.all = [];
