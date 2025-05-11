import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TeamUp from './pages/TeamUP'
import UnbrokenBond from './pages/UnbrokenBonds'
import Home from './pages/Home';
import TUcard from './pages/TUcard'
import UBcard from './pages/UBcard'
import Search from './pages/Search';
import './styles.css';
/* remember alviam546/PokemonTCG */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/teamup" element={<TeamUp />}/>
        <Route path="/teamup/:id" element={<TUcard />}
         /* render={() => <CardDetailT cards={cards} />} */ />
        <Route path="/unbrokenbonds" element={<UnbrokenBond />} />
        <Route path="/unbrokenbonds/:id" element={<UBcard />}
        /*  render={() => <CardDetailU cards={cards}  */ />
        <Route path="/search/:searchTerm" element={<Search />} /> 
      </Routes>
    </Router>
  );
}

export default App;