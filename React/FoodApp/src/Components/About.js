import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent componenet did mount");
  }
  render() {
    // console.log("parent render");
    return (
      <div>
        <h1>This is About page</h1>
        {/* <User name={"Firoz Shaikh (function)"} /> */}
        <UserClass name={"first (Class)"} location={"Kalyan"} />
        {/* <UserClass name={"seconos (Class)"} location={"mumbai"} /> */}
      </div>
    );
  }
}

export default About;

/*    1 render phase  ...2 commit phase 
-parent cons
-parent render
  
   - first const
   - first render
   
   - second const
   - second render

   <DOM updated - in a single batch> commit phase
   - first  compDidMount
   - second compDidMount

- parent compDidMount
*/
