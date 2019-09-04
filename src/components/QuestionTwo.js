import React from 'react';

class QuestionTwo extends React.Component {
  constructor(props) {
    super(props);
    this.handleSmoker = this.handleSmoker.bind(this);
  }

  handleSmoker(event) {
    this.props.onHandleSmoker(event)
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <h2>Question 2: Are you a smoker?</h2>
        <ul>
        <li><a id='yes' href='#a' onClick={this.handleSmoker}>Yes</a></li>
        <li><a id='no' href='#b' onClick={this.handleSmoker}>No</a></li>
        </ul>
      </div>
    )
  }
}
export default QuestionTwo;
