import { HashRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Pages from './pages';

type Props = {};

function App({}: Props) {
  return (
    <div className='app'>
      <HashRouter>
        <Pages />
      </HashRouter>
    </div>
  );
}

export default App;
