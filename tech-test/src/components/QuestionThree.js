import React from 'react';

class QuestionThree extends React.Component {
  constructor(props) {
    super(props);
    this.handleBMI = this.handleBMI.bind(this);
    this.handleChangeHeight = this.handleChangeHeight.bind(this);
    this.handleChangeWeight = this.handleChangeWeight.bind(this);
  }

  handleChangeHeight(event) {
    this.props.onHandleChangeHeight(event)
  }

  handleChangeWeight(event) {
    this.props.onHandleChangeWeight(event)
  }

  handleBMI(event) {
    var BMI = this.props.weight / (this.props.height**2)
    this.props.onHandleBMI(BMI)
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Question 3: Your height and weight</h2>
        <form>
        <input type='text' name='height' value={this.props.height} placeholder='height in meters' onChange={this.handleChangeHeight} />
        <input type='text' name='weight' value={this.props.weight} placeholder='weight in kilograms' onChange={this.handleChangeWeight} />
        <button type='submit' onClick={this.handleBMI}>
          Submit
        </button>
        </form>
      </div>
    )
  }
}
export default QuestionThree;
