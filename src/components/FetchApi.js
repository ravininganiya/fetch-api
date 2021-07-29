import React from "react";

class FetchApi extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props.users);
  }
  render() {
    return (
      <>
        <h1>FetchApi</h1>
        {this.props.users
          ? this.props.users.map((item) => (
              <ul key={item.id}>
                <li>{item.email}</li>
                <li>{item.first_name}</li>
              </ul>
            ))
          : null}
      </>
    );
  }
}
export default FetchApi;
