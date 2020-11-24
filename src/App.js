import {lazy, Suspense} from 'react';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';

const ContextPage = lazy(() => import('./pages/Context/Container'));
const RecoilPage = lazy(() => import('./pages/Recoil/Container'));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Switch>
          <Route path="/context" component={ContextPage} />
          <Route path="/recoil" component={RecoilPage} />
          <Redirect path="/" to="/context" />
          <Redirect path="*" to="/" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
