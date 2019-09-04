import React from 'react';

class Summary extends React.Component {

  render() {
    return (
      <div>
        <li>Date of birth: {this.props.date}</li>
        <li>smoker: {this.props.smoker}</li>
        <li>Height: {this.props.height}</li>
        <li>Weight: {this.props.weight}</li>
        <h3>Quote: {this.props.coefficient * 100000}.00£</h3>
      </div>
    )
  }
}
export default Summary;
