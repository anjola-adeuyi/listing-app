import { useState } from "react";
import './App.css';

function App() {

    // const lists = ["A", "B", "C", "D"];
    const [lists, setLists] = useState(["A", "B", "C", "D"]);

    const handleClick = (list) => {
      console.log(list);
      console.log(lists);
  
      // if (list !== lists[0]){
      //   const newLists = lists.filter(listNum => listNum !== list )
  
      //   console.log(newLists)
  
      //   newLists.unshift(list);
      //   setLists(newLists)
      //   console.log(newLists)
  
      //   // lists.pop();
      // } 
  
      const newLists = lists.filter(listNum => listNum != list )
  
      console.log(newLists)
  
      newLists.unshift(list);
      setLists(newLists)
      console.log(newLists)
  
      // setLists(lists)
      console.log(lists)
    }


  return (
    <div className="App">
      <header className="App-header">

      Hello World!!!

      <ul>
        { lists && lists.map( (list, index) => {
          return <li onClick={()=> handleClick(list) } key={index} > {list} </li>
        } )  }
      </ul>
      
      </header>
    </div>
  );
}

export default App;
