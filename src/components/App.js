import React from "react";
import { Router, Route } from "react-router-dom";

import history from "./../history";
import StreamCreate from "./streams/streamCreate";
import StreamDelete from "./streams/streamDelete";
import StreamEdit from "./streams/streamEdit";
import StreamShow from "./streams/streamShow";
import StreamList from "./streams/streamList";
import { Header } from "./header";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Route path="/" exact component={StreamList} />
            <Route path="/stream/create" exact component={StreamCreate} />
            <Route path="/stream/delete/:id" exact component={StreamDelete} />
            <Route path="/stream/edit/:id" exact component={StreamEdit} />
            <Route path="/stream/show" exact component={StreamShow} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
