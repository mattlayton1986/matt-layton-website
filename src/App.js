import React from "react";
import Header from "./components/Header/header.component";
import { Switch, Route } from "react-router-dom";
import links from "./data/links";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {links.mainNav.map((link) => {
          let PageComponent = link.page;
          return (
            <Route exact key={link.name} path={link.route}>
              {PageComponent && <PageComponent />}
            </Route>
          );
        })}
      </Switch>
    </div>
  );
}

export default App;
