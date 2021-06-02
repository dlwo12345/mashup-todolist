import { lazy, Suspense } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

const ContextTodoContainer = lazy(() =>
  import("./pages/Context/ContextTodoContainer")
);
const RecoilPage = lazy(() => import("./pages/Recoil/Container"));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Switch>
          <Route path="/context" component={ContextTodoContainer} />
          <Route path="/recoil" component={RecoilPage} />
          <Redirect path="/" to="/context" />
          <Redirect path="*" to="/" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
