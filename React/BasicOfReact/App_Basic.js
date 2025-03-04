// const header = React.createElement("h1", {id:"header",xyz:"abs"}, "hello world this if form react");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);


// div parent
//    div child1
//       h1
//       h2
//    div child2 
//        h1
//        h2  

let parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "this is h1 insde child1"),
    React.createElement("h2", {}, "this is h2 insde child1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "this is h1 insde child2"),
    React.createElement("h2", {}, "this is h2 insde child2"),
  ]),
]);
console.log(parent);
root.render(parent);
