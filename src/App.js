import React from "react";
import FetchApi from "./components/FetchApi";

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      users: null
    };
  }
  componentDidMount() {
    fetch(`https://reqres.in/api/users`).then((res, req) => {
      res.json().then((result) => {
        this.setState({ users: result.data });
      });
    });
  }
  render() {
    // console.log(this.state.users);
    return (
      <>
        <FetchApi users={this.state.users} />
      </>
    );
  }
}
export default App;
