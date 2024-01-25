import Left from './Left';
import Right from './Right';
import './App.css';
import NavContextProvider from './contexts/NavContextProvider';
import AuthContextProvider from './contexts/AuthContextProvider';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <NavContextProvider>
          <Left />
          <Right />
        </NavContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
