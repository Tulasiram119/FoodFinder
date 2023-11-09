import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utilis/UserContext";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
  }

  async componentDidMount() {
    const name = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await name.json();
    this.setState({
      user: json,
    });
  }
  componentDidUpdate(prevProps) {}
  componentWillUnmount() {}
  render() {
    const { name, public_repos, avatar_url } = this.state.user;

    return (
      <div className="m-4 p-4">
        <h1 className="font-bold">This About Page</h1>
        <UserContext.Consumer>
          {(data) => {
            return <h1>{data.loggedUser}</h1>;
          }}
        </UserContext.Consumer>
        <h2 className="font-semibold">Hello from About Page</h2>
        <UserClass name={name} numberOfRepos={public_repos} img={avatar_url} />
      </div>
    );
  }
}
export default About;
