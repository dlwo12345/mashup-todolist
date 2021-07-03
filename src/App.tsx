import { lazy, Suspense } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

const ContextTodoContainer = lazy(
  () => import("./pages/Context/ContextTodoContainer")
);
const RecoilTodoContainer = lazy(
  () => import("./pages/Recoil/RecoilTodoContainer")
);
const MobxTodoContainer = lazy(() => import("./pages/Mobx/MobxTodoContainer"));
const HooksTodoContainer = lazy(
  () => import("./pages/Hooks/HooksTodoContainer")
);
const ReduxTodoContainer = lazy(
  () => import("./pages/Redux/ReduxTodoContainer")
);
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Switch>
          <Route path="/context" component={ContextTodoContainer} />
          <Route path="/recoil" component={RecoilTodoContainer} />
          <Route path="/mobx" component={MobxTodoContainer} />
          <Route path="/hooks" component={HooksTodoContainer} />
          <Route path="/redux" component={ReduxTodoContainer} />
          <Redirect path="/" to="/context" />
          <Redirect path="*" to="/" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
