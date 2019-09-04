import QuestionTwo from '../components/QuestionTwo';
import './setupTest'

it('renders without crashing', () => {
  shallow(<QuestionTwo />)
});

it('call function onHandleSmoker if click yes', () => {
  const onHandleSmokerMock = jest.fn()
  const wrapper = shallow(<QuestionTwo onHandleSmoker={onHandleSmokerMock}/>)
  const eventMock = {preventDefault:function(){}}
  const input1 = wrapper.find({id: 'yes'})
  input1.simulate('click', eventMock)
  expect(onHandleSmokerMock).toHaveBeenCalled()
});

it('call function onHandleSmoker if click no', () => {
  const onHandleSmokerMock = jest.fn()
  const wrapper = shallow(<QuestionTwo onHandleSmoker={onHandleSmokerMock}/>)
  const eventMock = {preventDefault:function(){}}
  const input1 = wrapper.find({id: 'no'})
  input1.simulate('click', eventMock)
  expect(onHandleSmokerMock).toHaveBeenCalled()
});