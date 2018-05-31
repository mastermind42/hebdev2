import React, { Component} from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
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
          {this.props.searchResult.map((searchLine) => (
            <tr key={searchLine._id}>
              <td>{searchLine.ID}</td>
              <td>{searchLine.Description}</td>
              <td>{searchLine.lastSold}</td>
              <td>{searchLine.ShelfLife}d</td>
              <td>{searchLine.Department}</td>
              <td>${searchLine.Price}</td>
              <td>{searchLine.Unit}</td>
              <td>{searchLine.xFor}</td>
              <td>${searchLine.Cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

Table.propTypes = {
  searchResult: PropTypes.arrayOf(PropTypes.shape({
    ID: PropTypes.number,
    Description: PropTypes.string,
    lastSold: PropTypes.string,
    ShelfLife: PropTypes.number,
    Department: PropTypes.string,
    Price: PropTypes.number,
    Unit: PropTypes.string,
    xFor: PropTypes.number,
    Cost: PropTypes.number,
  })),
};

export default Table;