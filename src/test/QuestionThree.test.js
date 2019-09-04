import QuestionThree from '../components/QuestionThree';
import './setupTest'

it('renders without crashing', () => {
  shallow(<QuestionThree />)
});

describe('#handleBMI', () => {
  it('call function onHandleBMI', () => {
    const onHandleBMIMock = jest.fn()
    const wrapper = shallow(<QuestionThree onHandleBMI={onHandleBMIMock}/>)
    const eventMock = {preventDefault:function(){}}
    const input1 = wrapper.find({type: 'submit'})
    input1.simulate('click', eventMock)
    expect(onHandleBMIMock).toHaveBeenCalled()
  });
})

describe('#handleChangeHeight', () => {
  it('call function onHandleChangeHeight', () => {
    const onHandleChangeHeightMock = jest.fn()
    const wrapper = shallow(<QuestionThree onHandleChangeHeight={onHandleChangeHeightMock}/>)
    const eventMock = {preventDefault:function(){}, target: { value: 1.77}}
    const input1 = wrapper.find({name: 'height'})
    input1.simulate('change', eventMock)
    expect(onHandleChangeHeightMock).toHaveBeenCalled()
  });
})

describe('#handleChangeWeight', () => {
  it('call function onHandleChangeWeight', () => {
    const onHandleChangeWeightMock = jest.fn()
    const wrapper = shallow(<QuestionThree onHandleChangeWeight={onHandleChangeWeightMock}/>)
    const eventMock = {preventDefault:function(){}, target: { value: 69}}
    const input1 = wrapper.find({name: 'weight'})
    input1.simulate('change', eventMock)
    expect(onHandleChangeWeightMock).toHaveBeenCalled()
  });
})
