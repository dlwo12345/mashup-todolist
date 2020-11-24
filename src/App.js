import {Route, HashRouter, Redirect} from 'react-router-dom';
import Context from './pages/Context';
import Recoil from './pages/Recoil';

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
