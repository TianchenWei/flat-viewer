import React from "react";
import { useIsFetching } from "react-query";
import { HeadProvider, Title } from "react-head";
import { QueryParamProvider } from "use-query-params";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { RepoDetail } from "./components/repo-detail";
import { OrgListing } from "./components/org-listing";
import { Home } from "./components/home";
import { useProgressBar } from "./hooks";

console.log(import.meta.env.BASE_URL);
const baseUrl = import.meta.env.BASE_URL;

function App() {
  const isFetching = useIsFetching();
  useProgressBar(isFetching);


  return (
    <HeadProvider>
      <Title>Flat</Title>
      <Router>
        <QueryParamProvider ReactRouterRoute={Route}>
          <Switch>
            <Route exact path={baseUrl} component={Home} />
            <Route exact path={`${baseUrl}:org/`} component={OrgListing} />
            <Route path={`${baseUrl}:owner/:name`} component={RepoDetail} />
          </Switch>
        </QueryParamProvider>
      </Router>
    </HeadProvider>
  );
}

export default App;
