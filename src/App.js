import "./App.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./components/Table";
import Header from "./components/Header";
import Search from "./components/Search";

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

  handleSortName = () => {
    let people = this.state.people;
    people.sort((a, b) => {
      let nameA = a.name.first.toUpperCase();
      let nameB = b.name.first.toUpperCase();
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    });
    this.setState({ people });
  };

  render() {
    return (
      <div>
        <Header />
        <Search />
        <button
          type="button"
          label="Sort By Name"
          onClick={this.handleSortName}
        >
          Sort By Name
        </button>
        {this.state.people.map((person) => {
          let fullName = person.name.first + " " + person.name.last;
          let location = person.location.city + ", " + person.location.state;
          return (
            <Table
              name={fullName}
              email={person.email}
              phone={person.cell}
              location={location}
              key={person.cell}
            />
          );
        })}
      </div>
    );
  }
}
