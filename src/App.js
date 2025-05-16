import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TeamUp from './pages/TeamUP'
import UnbrokenBond from './pages/UnbrokenBonds'
import Home from './pages/Home';
import Search from './pages/Search';
import PreloaderGate from './components/PreloaderGate';
import CardFinder from './components/CardFinder';
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="alviam564/PokemonUTVUB.netlify.app" element={<Home /> } />
        <Route path="alviam564/PokemonUTVUB/teamup.netlify.app" element={<PreloaderGate setid="sm9"><TeamUp /></PreloaderGate>} />
        <Route path="alviam564/PokemonUTVUB/unbrokenbonds.netlify.app" element={<PreloaderGate setid="sm10"><UnbrokenBond /></PreloaderGate>} />
        <Route path="alviam564/PokemonUTVUB/card/:id.netlify.app" element={<CardFinder />} />
        <Route path="alviam564/PokemonUTVUB/search/:searchTerm.netlify.app" element={<Search />} /> 
      </Routes>
    </Router>
  );
}

export default App;