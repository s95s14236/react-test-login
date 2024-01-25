import './Left.css';
import { NAV_PAGE } from './utils/constants';
import Button from './components/ui/Button';
import useNavContext from './hooks/useNavContext';
import useAuthContext from './hooks/useAuthContext';

function Left() {
  const { navPage, setNavPage } = useNavContext();
  const { user, setUser } = useAuthContext();

  function handleNavClick(nav) {
    setNavPage(nav);
  }

  function handleLogout() {
    setUser(null);
    setNavPage(NAV_PAGE.info);
  }

  return (
    <div className="Left">
      <div className="navContent">
        <Button variant={navPage === NAV_PAGE.home ? 'primary' : 'outline'} onClick={() => handleNavClick(NAV_PAGE.home)} >Home</Button>
        <Button variant={navPage === NAV_PAGE.info ? 'primary' : 'outline'} onClick={() => handleNavClick(NAV_PAGE.info)}>{!user ? 'Sign In' : 'Info'}</Button>
      </div>
      {user && <Button style={{ backgroundColor: '#4b4b4b'}} onClick={handleLogout}>Sign Out</Button>}
    </div>
  );
}

export default Left;
