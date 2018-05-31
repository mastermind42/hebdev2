import React, { Component } from 'react';
import '../css/App.css';
import axios from 'axios';
import Table from './Table';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      result: [],
      tableObjectList: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    const tableObject = await axios.get('/getTable');
    this.setState({ tableObjectList: tableObject.data });
  }
  async handleSubmit(e) {
    e.preventDefault();
    const res = await axios.post('/submit', {
      searchQuery: this.state.searchQuery
    });
    this.setState({ result: res.data })
  }
  render() {
    return (
      <div>
        <h1>HEB Searcher</h1>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="search"
                className="form-control"
                value={this.state.value}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
                id="searchID"
                aria-describedby="search box"
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="container">
          {this.state.result.length !== 0 &&
            <Table searchResult={this.state.result} />
          }
        </div>
      </div>
    );
  }
}

export default App;