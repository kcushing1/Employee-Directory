import React from "react";
import Wrapper from "./components/Wrapper";
import fakeData from "./assets/fakeData";
import Table from "./components/Table";

class App extends React.Component {
  state = {
    fakeData,
  };
  //console.log(fakeData)
  render() {
    return (
      <Wrapper>
        {this.state.fakeData.map((user) => (
          <Table
            key={user.name.first}
            name={user.name.first}
            age={user.dob.age}
            email={user.email}
            phone={user.phone}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
