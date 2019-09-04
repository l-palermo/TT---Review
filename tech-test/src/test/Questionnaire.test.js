import Questionnaire from '../components/Questionnaire';
import './setupTest'

it('renders without crashing', () => {
  shallow(<Questionnaire />)
});

describe('#onHandleChange', () => {
  it('calls this.state to change date state', () => {
    const wrapper = shallow(<Questionnaire />);
    const instance = wrapper.instance()
    const eventMock = {target: {name:'date', value:'test'} }
    instance.onHandleChange(eventMock);
    expect(wrapper.state('date')).toEqual('test');
  })
})

describe('#onHandleEligible', () => {
  it('calls this.state to change eligible state', () => {
    const wrapper = shallow(<Questionnaire />);
    const instance = wrapper.instance()
    const eventMock = true
    instance.onHandleEligible(eventMock);
    expect(wrapper.state('eligible')).toEqual(true);
  })
})

describe('#onHandleSmoker', () => {
  it('calls this.state to change smoker state', () => {
    const wrapper = shallow(<Questionnaire />);
    const instance = wrapper.instance()
    const eventMock = {target: {text: 'yes'}}
    instance.onHandleSmoker(eventMock);
    expect(wrapper.state('smoker')).toEqual('yes');
  })
})
