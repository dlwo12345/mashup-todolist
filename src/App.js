import { lazy, Suspense } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

const ContextTodoContainer = lazy(() =>
  import("./pages/Context/ContextTodoContainer")
);
const RecoilTodoContainer = lazy(() =>
  import("./pages/Recoil/RecoilTodoContainer")
);
const MobxTodoContainer = lazy(() => import("./pages/Mobx/MobxTodoContainer"));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Switch>
          <Route path="/context" component={ContextTodoContainer} />
          <Route path="/recoil" component={RecoilTodoContainer} />
          <Route path="/mobx" component={MobxTodoContainer} />
          <Redirect path="/" to="/context" />
          <Redirect path="*" to="/" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
