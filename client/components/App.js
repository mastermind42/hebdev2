import React, { Component } from 'react';
import '../css/App.css';
import axios from 'axios';
// import Body from './body';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      result: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(e) {
    e.preventDefault();
    console.log(`asdf: ${this.state.value}`);
    const res = await axios.post('/submit', {
      searchQuery: this.state.searchQuery
    });
    console.log(res.data);
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
          {this.state.result !== '' &&
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Description</th>
                  <th>LastSold</th>
                  <th>ShelfLife</th>
                  <th>Department</th>
                  <th>Price</th>
                  <th>Unit</th>
                  <th>xFor</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                {this.state.result.map((item) => (
                  <tr key={item._id}>
                    <td>{item.ID}</td>
                    <td>{item.Description}</td>
                    <td>{item.lastSold}</td>
                    <td>{item.ShelfLife}</td>
                    <td>{item.Department}</td>
                    <td>{item.Price}</td>
                    <td>{item.Unit}</td>
                    <td>{item.xFor}</td>
                    <td>{item.Cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          }
        </div>
      </div>
    );
  }
}

export default App;