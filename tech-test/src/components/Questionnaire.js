import React from 'react';
import QuestionOne from './QuestionOne'


class Questionnaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      eligible: '',

    }
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleEligible = this.onHandleEligible.bind(this);
  }

  onHandleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  onHandleEligible(eligible) {
    this.setState({ eligible: eligible })
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
      </div>
    )
  }
}
export default Questionnaire;
