import React from 'react';
import moment from 'moment';
import Matrix from './Matrix'

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BMIrange: '',
      age: '',
      ageRange: ''
    }
    this.handleCoefficient = this.handleCoefficient.bind(this)
  }

  BMIrange() {
    var BMI = this.props.BMI;
    if(BMI >= 18 && BMI < 23) { return '18-22' };
    if(BMI >= 23 && BMI < 27) { return '23-26' };
    if(BMI >= 27 && BMI <= 32) { return '27-32' };
  }

  userYear() {
    var date = this.props.date.split('');
    var year = parseInt(date.splice(0,4).join(''));
    return year;
  }

  age() {
    var age = moment().format('YYYY') - this.userYear()
    return age
  }

  ageRange () {
    var age = this.age();
    if(age >= 18 && age < 28) { return '18-28' };
    if(age >= 28 && age <= 48) { return '28-48' };
    if(age > 49 && age <= 80) { return '49-80' };
  }

  calculateCoefficient(coefficient) {
    if(this.props.smoker === 'yes') {
      if(this.BMIrange() === '27-32' || this.BMIrange() === '18-22') { 
        return coefficient = coefficient - 0.8 }
      if(this.BMIrange() === '23-26') {
        return coefficient = coefficient - 1 }
      }
  }

  handleCoefficient(matrix = Matrix) {
    var coefficient = matrix[this.BMIrange()][this.ageRange()]
    this.calculateCoefficient(coefficient)
    this.props.onHandleCoefficient(coefficient)
  }

  render() {
    return (
      <div>
        <button type='submit' onClick={this.handleCoefficient}>
        Result
        </button>
      </div>
    )
  }
}

export default Result;
