import React from 'react';
import moment from 'moment';

class QuestionOne extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleEligible = this.handleEligible.bind(this);
  }

  handleChange(event) {
    this.props.onHandleChange(event);
  };



  dataFormat() {
    var arrayDate = this.props.date.split('/');
    var date = parseInt(arrayDate.join(''));
    return date
  }

  lessThanEighteen() {
    return this.dataFormat() + 180000;
  }

  moreThanEighty() {
    return this.dataFormat() + 800000;
  }

  todaysDate() {
    return moment().format('YYYYMMDD')
  }

  handleDateOfBirth() {
    if(this.lessThanEighteen() > this.todaysDate() || this.moreThanEighty() < this.todaysDate()){
      return 'ineligible for this particular insurance product'
    } else { 
      return true 
    }
  };

  handleEligible(event) {
    var eligible = this.handleDateOfBirth();
    this.props.onHandleEligible(eligible);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form>
          <input type='text' name='date' value={this.props.date} placeholder='yyyy/mm/dd' onChange={this.handleChange} />
          <button type='submit' value='Submit' onClick={this.handleEligible}>
          Submit
          </button>
        </form>
      </div>
    )
  }
}
export default QuestionOne;
