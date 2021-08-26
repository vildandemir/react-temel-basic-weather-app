import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { CityProvider } from './context/CityContext';

function App() {
  return (
    <CityProvider>
      <div className="App">
        <Header/>
        <Body/>
      </div>
    </CityProvider>
  );
}

export default App;
