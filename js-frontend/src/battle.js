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
          <img src=${this.image_url} height="500" width="750">
          <h3 class="title">${this.title}</h3>
          <h5>${this.country.name}</h5>
          <p class="description">${this.description}</p>
          <button data-id=${this.id}>Edit</button>

        </div>
        <br><br>`;
    }

    renderBattlePost() {
        return `
        <div data-id=${this.id}>
        <img src=${this.image_url} height="500" width="750">
          <h3 class="title">${this.title}</h3>
          <h5>${this.country_name}</h5>
          <p class="description">${this.description}</p>
          <button data-id=${this.id}>Edit</button>
        </div>
        <br><br>`;
    }

    renderUpdateForm() {
      return `
      <form data-id=${this.id} >
        <h3>Edit a battle:</h3>
  
        <label>Title</label>
        <input id='input-title' type="text" name="title" value="${this.title}" class="input-text">
        <br><br>
  
        <label>Description</label>
        <textarea id='input-description' name="description" rows="8" cols="80" value="">${this.description}</textarea>
        <br><br>
  
        <label>Image URL</label>
        <input id='input-url' type="text" name="image" value="${this.image_url}" class="input-text">
        <br><br>
  
        <label>Category</label>
        <select id="countries" name="countries" value="${this.country.name}">
          <option value="1">Egypt</option>
          <option value="2">Germany</option>
          <option value="3">Netherlands</option>
          <option value="4">Portugal</option>
          <option value="5">Russia</option>
          <option value="6">Spain</option> 
        </select>
        <br><br>
  
        <input id='edit-button' type="submit" name="submit" value="Edit Battle" class="submit">
      </form><br>
    `;
    }

}

Battle.all = [];
