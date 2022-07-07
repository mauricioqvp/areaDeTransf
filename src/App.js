import Rota from './Routes';
import Navbar from './components/Navbar';
import SentencesProvider from './assets/contexts/sentences';

import './App.css';

function App() {
  return (
    <SentencesProvider>
      <div className="App">
      <Navbar />
          <Rota />
      </div>
    </SentencesProvider>
  );
}

export default App;
