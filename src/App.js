import React from "react";

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
    console.log(this.state.users);
    return (
      <>
        <h1>app</h1>
        {this.state.users
          ? this.state.users.map((item) => (
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
export default App;

const data = {
  title: "Modal Header",
  body: ` Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of
        Lorem Ipsum.`
};
