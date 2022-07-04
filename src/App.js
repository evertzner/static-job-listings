import React from "react";
import Jobs from "./components/jobs/jobs.component";

import { jobs } from "./data/data";

import "./App.styles.scss";

const App = () => {
  return (
    <div className="App">
      <Jobs jobs={jobs} />
    </div>
  );
};

export default App;
