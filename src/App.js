import Rota from './Routes';
import SentencesProvider from './assets/contexts/sentences';
import './App.css';

function App() {
  return (
    <SentencesProvider>
      <div className="App">
          <Rota />
      </div>
    </SentencesProvider>
  );
}

export default App;
