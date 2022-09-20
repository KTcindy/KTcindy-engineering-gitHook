import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, NavLink, Route, Switch, Redirect } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./redux/store"
const Popular = lazy(() => import("@/views/Popular/index.jsx"));
const Result = lazy(() => import("@/views/Battle/components/result.jsx"));
const Battle = lazy(() => import("@/containers/battile.jsx"));
import "./index.css"
class App extends React.Component {
  render () {
    return (
      <div className="xl:m-10">
        <div className="flex justify-around xl:justify-start">
          <NavLink className="xl:p-10 text-xl" to="/Popular">Popular</NavLink>
          <NavLink className="xl:p-10 text-xl" to="/Battle">Battle</NavLink>
        </div>

        {/* 匹配单一路由 */}
        <Switch>
          <Route path="/Popular" exact component={Popular}></Route>
          <Route path="/Battle" exact component={Battle}></Route>
          <Route path="/Result" exact component={Result}></Route>
          {/*默认重定向路由 */}
          <Redirect to="Popular"></Redirect>
        </Switch>

      </div>
    )
  }
}
ReactDOM.createRoot(document.getElementById("app")).render(
  <HashRouter>
    <Suspense fallback={<div className="m-auto">Loading...</div>}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </HashRouter>
)