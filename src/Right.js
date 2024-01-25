import './Right.css';
import { NAV_PAGE } from './utils/constants';
import Home from './pages/Home';
import Info from './pages/Info';
import Login from './pages/Login';
import useNavContext from './hooks/useNavContext';
import useAuthContext from './hooks/useAuthContext';

function Right() {
  const { navPage } = useNavContext();
  const { user } = useAuthContext();

  function getView() {
    switch (navPage) {
      case NAV_PAGE.home:
        return <Home />;
      case NAV_PAGE.info:
        return !user ? <Login /> : <Info />;
      default:
        break;
    }
  }

  return (
    <div className="Right center">
      {getView()}
    </div>
  );
}

export default Right;
