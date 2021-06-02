import { lazy, Suspense } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

const ContextTodoContainer = lazy(() =>
  import("./pages/Context/ContextTodoContainer")
);
const RecoilTodoContainer = lazy(() =>
  import("./pages/Recoil/RecoilTodoContainer")
);
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Switch>
          <Route path="/context" component={ContextTodoContainer} />
          <Route path="/recoil" component={RecoilTodoContainer} />
          <Redirect path="/" to="/context" />
          <Redirect path="*" to="/" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
