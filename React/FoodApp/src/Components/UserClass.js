import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   count: 0,
      //   count2: 2,
      userInfo: {
        login: "dummy",
        location: "mumbai",
        html_url: "hello123",
      },
    };
    // console.log(this.props.name + "child constructor");
    // console.log(this.state.userInfo);
    console.log("constructor");
  }
  // first constructor is called after render is called then after copmDidMount is called
  async componentDidMount() {
    // console.log(this.props.name + "child componenet did mount");
    // api cal

    const data = await fetch("https://api.github.com/users/Firoz829");
    const json = await data.json();
    // console.log(json);

    this.setState({
      userInfo: json,
    });
    console.log("did Mount");
  }
  componentDidUpdate() {
    console.log("did Update");
  }

  componentWillUnmount() {
    console.log("com will Unmount");
  }
  render() {
    // const { location } = this.props;
    // const { count, count2 } = this.state;
    // console.log(this.props.name + "child render");
    console.log("render");
    const { login, location, html_url, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h2>Count = {count}</h2> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          count incress
        </button> */}
        <img src={avatar_url}></img>
        <h2>Name: {login}</h2>
        <h3>Location: {location}</h3>
        <h4>contact: {html_url}</h4>
      </div>
    );
  }
}

export default UserClass;

// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
//life cycle
/*
     --MOUNTING---

const(dummy)  
render(dummy)
    <HTML dummmy>

componenet Did Mount
    <api data>
    <this.setState  ->state varivale is updated
    
   ----UPDATE-----   

   render(api data)
   <html new api data>

 componenet Did Update  



 constructor
 render
 did Mount
 render
 did Update
*/
