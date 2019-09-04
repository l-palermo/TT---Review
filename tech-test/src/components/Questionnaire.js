import React from 'react';
import QuestionOne from './QuestionOne'
import QuestionTwo from './QuestionTwo'
import QuestionThree from './QuestionThree'
import Result from './Result'

class Questionnaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      eligible: '',
      smoker: '',
      height: '',
      weight: '',
      BMI: '',
      coefficient: ''
    }
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleEligible = this.onHandleEligible.bind(this);
    this.onHandleSmoker = this.onHandleSmoker.bind(this);
    this.onHandleChangeHeight = this.onHandleChangeHeight.bind(this);
    this.onHandleChangeWeight = this.onHandleChangeWeight.bind(this);
    this.onHandleBMI = this.onHandleBMI.bind(this);
    this.onHandleCoefficient = this.onHandleCoefficient.bind(this);
  }

  onHandleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  onHandleEligible(eligible) {
    this.setState({ eligible: eligible })
  }

  onHandleSmoker(event) {
    this.setState({ smoker: event.target.text })
  }

  onHandleChangeHeight(event) {
    this.setState({ height: event.target.value })
  }

  onHandleChangeWeight(event) {
    this.setState({ weight: event.target.value })
  }

  onHandleBMI(bmi) {
    this.setState({ BMI: bmi})
  }

  onHandleCoefficient(coefficient) {
    this.setState({ coefficient: coefficient })
  }

  render() {
    return (
      <div>
        <div>
          <h2>Question 1: Your Date of Birth</h2>
          <QuestionOne 
            date={this.state.date} 
            onHandleChange={this.onHandleChange}
            onHandleEligible={this.onHandleEligible}
          />
        </div>
        <div>{this.state.eligible}</div>
        <div>
          { this.state.eligible === true &&
            <QuestionTwo onHandleSmoker={this.onHandleSmoker}/>
          }
        </div>
        <div>
          { this.state.smoker !== '' &&
            <QuestionThree onHandleBMI={this.onHandleBMI}/>
          }
        </div>
        <div>
          { this.state.BMI !== '' &&
            <Result 
              date={this.state.date}
              BMI={this.state.BMI}
              smoker={this.state.smoker}
              onHandleCoefficient={this.onHandleCoefficient}
            />
          }
        </div>
      </div>
    )
  }
}
export default Questionnaire;
