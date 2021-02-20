import "./App.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./components/Table";
import Header from "./components/Header";
import Search from "./components/Search";
import Button from "./utils/Button";

export default class App extends Component {
  state = {
    people: [],
    search: "",
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

  handleSortCountry = () => {
    let people = this.state.people;
    people.sort((a, b) => {
      let nameA = a.location.country.toUpperCase();
      let nameB = b.location.country.toUpperCase();
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

  handleSearchByName = (e) => {
    this.setState({ search: e.target.value });

    console.log("state.search is", this.state.search);

    let findName = this.state.people.filter((person) => {
      let findPerson = person.name.first.toString().toLowerCase();
      let findOthPerson = person.name.last.toString().toLowerCase();
      if (
        findPerson.includes(this.state.search) ||
        findOthPerson.includes(this.state.search)
      ) {
        return person;
      }
    });
    this.setState({ people: findName });
  };

  render() {
    return (
      <div>
        <Header />
        <input
          type="text"
          label="Search"
          name="search"
          placeholder="Search Name"
          onChange={this.handleSearchByName}
        ></input>
        <Button
          label={"Reset Search"}
          text={"Reset"}
          onClick={(e) => {
            this.setState({ search: "" });
            const data = fetch("https://randomuser.me/api/?results=10");
            data
              .then((resp) => resp.json())
              .then((response) => {
                this.setState({ people: response.results });
                console.log("setState", this.state.people);
              });
          }}
        />
        <Button
          label={"Sort By Name"}
          text={"Sort By Name"}
          onClick={this.handleSortName}
        />

        <Button
          label={"Sort By Country"}
          text={"Sort By Country"}
          onClick={this.handleSortCountry}
        />

        {this.state.people.map((person) => {
          let fullName = person.name.first + " " + person.name.last;
          //console.log(person.name.first);
          let location =
            person.location.city +
            ", " +
            person.location.state +
            ", " +
            person.location.country;
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
