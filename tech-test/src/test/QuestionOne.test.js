import QuestionOne from '../components/QuestionOne';
import './setupTest'

it('renders without crashing', () => {
  shallow(<QuestionOne />)
});

it('call function onHandleChange on text field change', () => {
  const onHandleChangeMock = jest.fn()
  const wrapper = shallow(<QuestionOne onHandleChange={onHandleChangeMock}/>)
  // const instance = wrapper.instance()
  // const eventMock = {target: {name:'date', value:'test'} }
  const input1 = wrapper.find({ name:"date" })
  // instance.handleChange(eventMock);
  input1.simulate('change')
  expect(onHandleChangeMock).toHaveBeenCalled()
  // expect(wrapper.state('date')).toEqual('test');
});

it('returns the date as integer', () => {
  const date = '1991/11/11'
  const wrapper = shallow(<QuestionOne date={date}/>)
  const instance = wrapper.instance()
  expect(instance.dataFormat()).toEqual(19911111);
})

it('returns the date for a user is less than 18', () => {
  const date = '2010/11/11'
  const wrapper = shallow(<QuestionOne date={date}/>)
  const instance = wrapper.instance()
  expect(instance.lessThanEighteen()).toEqual(20281111);
})

it('returns the date for a user is more than 80', () => {
  const date = '1920/11/11'
  const wrapper = shallow(<QuestionOne date={date}/>)
  const instance = wrapper.instance()
  expect(instance.moreThanEighty()).toEqual(20001111);
})

it('returns inelegible message', () => {
  const date = '2010/11/11'
  const wrapper = shallow(<QuestionOne date={date}/>)
  const instance = wrapper.instance()
  expect(instance.handleDateOfBirth()).toEqual('ineligible for this particular insurance product')
})

it('returns true if the user is elegible', () => {
  const date = '1991/11/11'
  const wrapper = shallow(<QuestionOne date={date}/>)
  const instance = wrapper.instance()
  expect(instance.handleDateOfBirth()).toEqual(true)
})

it('call function onHandleEligible', () => {
  const onHandleEligibleMock = jest.fn()
  const date = '1991/11/11'
  const wrapper = shallow(<QuestionOne onHandleEligible={onHandleEligibleMock} date={date}/>)
  const instance = wrapper.instance()
  const eventMock = {preventDefault:function(){}}
  const input1 = wrapper.find({ value:"Submit" })
  input1.simulate('click', eventMock)
  expect(onHandleEligibleMock).toHaveBeenCalled()
});
