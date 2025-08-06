import { Link } from 'react-router'
import './Menu.scss'
import {menu} from '../data'

const Menu = () => {
  return (
    <div className='menu'>
      {menu.map((item) => (
        <div className="item" key={item.id}>
        <span className="title">{item.title}</span>
        {item.listItems.map((listItems) => (
        <Link to={listItems.url} className='listItems' key={listItems.id}>
        <img src={listItems.icon} alt="" className='listItem' />
        <span className="listItemTitle">{listItems.title}</span>
        </Link>
        ))}
      </div>
      ))}
    </div>
  )
}

export default Menu