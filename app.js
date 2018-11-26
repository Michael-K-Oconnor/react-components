let DisplayGroceryList = (props) => (
  <div>
    <Groceries list={props.list}/>
  </div>
);

let Groceries = (props) => (
  <ul>
    <li>{props.list[0]}</li>
    <li>{props.list[1]}</li>
  </ul>
);

ReactDOM.render(<DisplayGroceryList list={["cucumbers", "kale"]} />, document.getElementById("app"));
/*  */