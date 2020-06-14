import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query.toLowerCase();
  }
  
  async requestQuery() {
    // make request
    let result;
    try {
       result = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
       // save results in internal data stucture
       this.results = result.data.recipes;
    } catch (error) {
      console.log(error);
      this.toggleSpinner("search");
    }
  }
}