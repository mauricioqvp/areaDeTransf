import Rota from './Routes';
import UserProvider from './assets/contexts/user';
import './App.css';

function App() {
  return (
    <UserProvider>
      <div className="App">
          <Rota />
      </div>
    </UserProvider>
  );
}

export default App;
