import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RepoDetail from "./views/RepoDetail"
import RepoList from "./views/RepoList";
import NotFound from "./views/NotFound";
import ErrorBoundary from "./views/ErrorBoundary";
import './index.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<RepoList />} exact />
          <Route path="/repositories/:repoName" element={<RepoDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary> 
    </Router>
  );
};

export default App;
