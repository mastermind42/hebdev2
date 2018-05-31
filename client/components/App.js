import React, { Component } from 'react';
import '../css/App.css';
import axios from 'axios';
import Table from './Table';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tableList: [],
      result: [],
      search: {},
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  async onChange(e, catagory) {
    const newSearch = this.state.search;
    if(e.target.value !== '') {
      newSearch[catagory] = e.target.value;
    } else {
      delete newSearch[catagory];
    }
    this.setState({ search: newSearch });
  }

  async componentDidMount() {
    const result = await axios.get('/getTable');
    this.setState({ tableList: result.data });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const res = await axios.post('/submit', {
      searchQuery: this.state.search
    });
    this.setState({ result: res.data });
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">HEB Dev II Grocery Searcher</a>
          </nav>
        </header>
        <main>
          <div className="container mt-4">
            <div className="text-nowrap">Search by any and all fields.</div>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                {this.state.tableList.map((catagory) => (
                  <div className="input-group mb-1">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id={catagory}>{catagory}</span>
                    </div>
                    <input
                      type={catagory}
                      className="form-control"
                      value={this.state.search[catagory]}
                      onChange={e => this.onChange(e, catagory)}
                    />
                  </div>  
                ))}
              </div>
              <button type="submit" className="btn btn-primary btn-lg">Submit</button>
            </form>
          </div>
        </main>
        <div className="container">
          {this.state.result.length !== 0 &&
            <Table searchResult={this.state.result} />
          }
        </div>
        <footer>
          <div className="fixed-bottom text-right">
            Rohit Saxena 2018
          </div>
        </footer>
      </div>
    );
  }
}

export default App;