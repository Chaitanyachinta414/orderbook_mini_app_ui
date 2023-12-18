import { menuItemsData } from '../menuItemsData';
const Navbar = () => {
    return (
        <nav className="desktop-nav">
      <ul className="menus">
        {menuItemsData.map((items, index) => {   
           return(
            <li className="menu-items">
            {items.submenu ? (
              <>
                   <button type="button" aria-haspopup="menu">
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
  