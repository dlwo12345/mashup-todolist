import { lazy, Suspense } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { createStore } from "redux";
import { rootReducer } from "./pages/Redux/ReduxTodoContainer";
import { Provider } from "react-redux"
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

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

export const store = createStore(rootReducer, composeWithDevTools());

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
