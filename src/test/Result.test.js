import Result from '../components/Result';
import Matrix from '../components/Matrix'
import './setupTest'

it('renders without crashing', () => {
  shallow(<Result />)
});

describe('#BMIrange', () => {
  it('returns a BMI range of value', () => {
    const wrapper = shallow(<Result BMI={22}/>)
    const instance = wrapper.instance()
    expect(instance.BMIrange()).toEqual('18-22')
  })
  it('returns a BMI range of value', () => {
    const wrapper = shallow(<Result BMI={25}/>)
    const instance = wrapper.instance()
    expect(instance.BMIrange()).toEqual('23-26')
  })
  it('returns a BMI range of value', () => {
    const wrapper = shallow(<Result BMI={29}/>)
    const instance = wrapper.instance()
    expect(instance.BMIrange()).toEqual('27-32')
  })
})

describe('#ageRange', () => {
  it('returns the age range of values', () => {
    const wrapper = shallow(<Result date={'1991/11/11'}/>)
    const instance = wrapper.instance()
    expect(instance.ageRange()).toEqual('28-48')
  })
  it('returns the age range of values', () => {
    const wrapper = shallow(<Result date={'1956/11/11'}/>)
    const instance = wrapper.instance()
    expect(instance.ageRange()).toEqual('49-80')
  })
  it('returns the age range of values', () => {
    const wrapper = shallow(<Result date={'1995/11/11'}/>)
    const instance = wrapper.instance()
    expect(instance.ageRange()).toEqual('18-28')
  })
})

describe('#calculateCoefficient', () => {
  it('returns the right coefficient', () => {
    const wrapper = shallow(<Result BMI={22} date={'1991/11/11'} smoker={'yes'}/>)
    const instance = wrapper.instance()
    const coefficient = 2
    expect(instance.calculateCoefficient(coefficient)).toEqual(1.2)
  })
  it('returns the right coefficient', () => {
    const wrapper = shallow(<Result BMI={24} date={'1991/11/11'} smoker={'yes'}/>)
    const instance = wrapper.instance()
    const coefficient = 2
    expect(instance.calculateCoefficient(coefficient)).toEqual(1)
  })
})

describe('#handleCoefficient', () => {
  it('call function onHandleEligible', () => {
    const onHandleCoefficientMock = jest.fn()
    const wrapper = shallow(<Result onHandleCoefficient={onHandleCoefficientMock} BMI={22} date={'1991/11/11'} smoker={'yes'}/>)
    const instance = wrapper.instance()
    const input1 = wrapper.find({ type: "submit" })
    input1.simulate('click')
    instance.handleCoefficient(Matrix)
    expect(onHandleCoefficientMock).toHaveBeenCalled()
  })

  // it(' returns the right coefficient', () => {
  //   const onHandleCoefficientMock = jest.fn()
  //   const wrapper = shallow(<Result onHandleCoefficient={onHandleCoefficientMock} BMI={22} date={'1991/11/11'}/>)
  //   const instance = wrapper.instance()
  //   instance.handleCoefficient(Matrix)
  //   expect(wrapper.state('date')).toEqual('test'))
  // })
})

// describe('#BMIrange', () => {
//   it('returns true a BMI range of value', () => {
//     const wrapper = shallow(<Result BMI={22}/>)
//     const instance = wrapper.instance()
//     expect(instance.BMIrange()).toEqual('18-22')
//   })
// })
