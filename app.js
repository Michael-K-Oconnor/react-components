let DisplayGroceryList = (props) => (
  <div>
  {props.list.map(item =>
    <Groceries item={item}/>
  )}
  </div>
);

class Groceries extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
      return (
        <li>{this.props.item}</li>
      )
  };
};

ReactDOM.render(<DisplayGroceryList list={["cucumbers", "kale","apples"]} />, document.getElementById("app"));

// let Groceries = (props) => {

//   let onListItemClick = (event) => {
//     console.log('I got clicked');
//   }

//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.list[0]}</li>
//       <li>{props.list[1]}</li>
//       <li>{props.list[2]}</li>
//     </ul>
//   )
// };