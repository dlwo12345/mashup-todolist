import { lazy, Suspense } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { rootReducer } from "./pages/Redux/ReduxTodoContainer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

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

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  devTools: true,
});

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
