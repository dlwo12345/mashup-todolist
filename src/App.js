import {lazy, Suspense} from 'react';
import {Route, HashRouter, Redirect} from 'react-router-dom';

function App() {
  return (
    <Suspense fallback={<></>}>
      <HashRouter>
        <Route exact path="/context" component={lazy(() => import('./pages/Context/Container'))}></Route>
        <Route exact path="/recoil" component={lazy(() => import('./pages/Recoil/Container'))}></Route>
        <Redirect from="/" to="/context" />
      </HashRouter>
    </Suspense>
  );
}

export default App;
