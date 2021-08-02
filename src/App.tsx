import { lazy, Suspense } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

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
const ReduxToolkitTodoContainer = lazy(
  () => import("./pages/ReduxToolkit/ReduxToolkitTodoContainer")
);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Suspense fallback={<></>}>
            <Switch>
              <Route path="/context" component={ContextTodoContainer} />
              <Route path="/recoil" component={RecoilTodoContainer} />
              <Route path="/mobx" component={MobxTodoContainer} />
              <Route path="/hooks" component={HooksTodoContainer} />
              <Route path="/redux" component={ReduxTodoContainer} />
              <Route
                path="/reduxtoolkit"
                component={ReduxToolkitTodoContainer}
              />
              <Redirect path="/" to="/context" />
              <Redirect path="*" to="/" />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
