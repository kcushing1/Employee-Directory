import "./App.css";
import { Component } from "react";
import Table from "./components/Table";

export default class App extends Component {
  state = {
    people: [],
  };

  componentDidMount() {
    console.log("component did mount");
    const data = fetch("https://randomuser.me/api/?results=10");
    data
      .then((resp) => resp.json())
      .then((response) => {
        this.setState({ people: response.results });
        console.log("setState", this.state.people);
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.people.map((person) => {
          return (
            <Table
              name={person.name.first}
              age={person.dob.age}
              email={person.email}
              phone={person.cell}
              key={person.cell}
            />
          );
        })}
      </div>
    );
  }
}
