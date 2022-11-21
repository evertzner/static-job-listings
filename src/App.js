import React from "react";
import Jobs from "./components/jobs/jobs.component";
import Filter from "./components/filter/filter.component";
import { FilterProvider } from "./context/filter.context";

import { jobs } from "./data/data";

import "./App.styles.scss";

const App = () => {
	return (
		<FilterProvider>
			<div className="app">
				<header className="app__header"></header>
				<Filter customClass={"app__filter"} />
				<Jobs customClass={"app__jobs"} jobs={jobs} />
			</div>
		</FilterProvider>
	);
};

export default App;
