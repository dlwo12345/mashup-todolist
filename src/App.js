import {Route, HashRouter, Redirect} from 'react-router-dom';
import Context from './pages/Context/Container';
import Recoil from './pages/Recoil/Container';

function App() {
  return (
    <HashRouter>
      <Route exact path="/context" component={Context}></Route>
      <Route exact path="/recoil" component={Recoil}></Route>
      <Redirect from="/" to="/context" />
    </HashRouter>
  );
}

export default App;
