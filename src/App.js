import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TeamUp from './pages/TeamUP'
import UnbrokenBond from './pages/UnbrokenBonds'
import Home from './pages/Home';
import PreloaderGate from './components/PreloaderGate';
import CardFinder from './components/CardFinder';
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/teamup" element={<PreloaderGate setid="sm9"><TeamUp /></PreloaderGate>} />
        <Route path="/unbrokenbonds" element={<PreloaderGate setid="sm10"><UnbrokenBond /></PreloaderGate>} />
        <Route path="/cards/:id" element={<CardFinder/>} />
      </Routes>
    </Router>
  );
}

export default App;