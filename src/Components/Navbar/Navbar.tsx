import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <div className='logofoto'>
          <img src="Logoo.svg" alt="" />
        </div>
        <span>Molladmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className='icon'/>
        <img src="/app.svg" alt="" className='icon'/>
        <img src="/expand.svg" alt="" className='icon'/>
        <div className="notifications">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="/profil.jpg" alt="" />
          <span>Mollid</span>
        </div>
        <img src="/settings.svg" alt="" className='icon'/>
      </div>
    </div>
  )
}

export default Navbar