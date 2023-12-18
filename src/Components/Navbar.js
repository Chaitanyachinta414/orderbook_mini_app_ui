import { menuItemsData } from '../menuItemsData';
const Navbar = () => {

    const onMouseEnter =() => {
        document.querySelector('.dropdown').classList.add('show');
    }
    const onMouseLeave =() => {
        document.querySelector('.dropdown').classList.remove('show');
    }
    const closeDropdown = () => {
        if (document.querySelector('.dropdown')){
            document.querySelector('.dropdown').classList.remove('show') ;
        }
    }
    return (
        <nav className="desktop-nav">
      <ul className="menus">
        {menuItemsData.map((items, index) => {   
           return(
            <li className="menu-items"  
                onMouseEnter={onMouseEnter} 
                onMouseLeave={onMouseLeave}
                onClick={closeDropdown}>
            {items.submenu ? (
              <>
                   <button type="button" aria-haspopup="menu" className='menu-btn'>
                   {items.title}{' '}
                   </button>
                   <ul className="dropdown">
                       {items.submenu.map((submenu, index) => (
                           <li key={index} className="menu-items">
                           <a href={submenu.url}>{submenu.title}</a>
                           </li>
                       ))}
                   </ul>
              </>
            ) : (
              <a href={items.url}>{items.title}</a>
            )}
          </li>
           ) 
        })}
      </ul>
    </nav>
    );
  };
  
  export default Navbar;
  