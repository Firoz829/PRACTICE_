import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(2);
  return (
    <div className="user-card">
      <h2>Count = {count}</h2>
      <h2>Count = {count2}</h2>
      <h2>Name: {props.name}</h2>
      <h3>Location: Kalyan</h3>
      <h4>contact: @firozz829</h4>
    </div>
  );
};

export default User;
