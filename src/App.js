import "./App.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Button from "./utils/Button";
import UserCard from "./components/UserCard";

export default class App extends Component {
  state = {
    people: [],
    search: "",
  };

  componentDidMount() {
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
      <div className="container">
        <Header />
        <div className="text-center m-2">
          <input
            type="text"
            label="Search"
            name="search"
            placeholder="Search Name"
            onChange={this.handleSearchByName}
          ></input>
        </div>

        <div className="text-center">
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
        </div>

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
            <UserCard
              name={fullName}
              email={person.email}
              phone={person.cell}
              location={location}
              src={person.picture.thumbnail}
              alt={fullName}
              key={person.cell}
            />
          );
        })}
      </div>
    );
  }
}
