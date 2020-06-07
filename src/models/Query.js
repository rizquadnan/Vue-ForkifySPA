export default class Search {
  constructor(query) {
    this.query = query;
  }

  print () {
    console.log("hey");
  }
  
  async requestQuery() {
    this.results = 1;
  }

}