import ItemComponent from '../components/Item'
import { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'

const fakeItem = {
  id: 'ABC123',
  title: 'A cool item',
  price: 5000,
  description: 'This item is really cool',
  image: 'dog.jpg',
  largeImage: 'largedog.jpg'
}

describe('<Item/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  // it('renders the image propperly', () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem}/>)
  //   const img = wrapper.find('img')
  //   expect(img.props().src).toBe(fakeItem.image)
  //   expect(img.props().alt).toBe(fakeItem.title)
  // })

  // it('renders the price tag and title', () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem}/>)
  //   const priceTag = wrapper.find('PriceTag')
  //   const title = wrapper.find('Title a')
  //   expect(priceTag.children().text()).toBe('$50')
  //   expect(title.text()).toBe(fakeItem.title)
  // })

  // it('renders out the buttons properly', () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem}/>)
  //   console.log(wrapper.debug())
  //   const buttonList = wrapper.find('.buttonList')
  //   expect(buttonList.children()).toHaveLength(3)
  //   expect(buttonList.find('Link')).toHaveLength(1)
  //   expect(buttonList.find('AddToCart').exists()).toBe(true)
  //   expect(buttonList.find('DeleteItem').exists()).toBe(true)
  // })

})