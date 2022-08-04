import { useState } from "react";
import InputArea from "./components/InputArea";
import OutputArea from "./components/OutputArea";

function App() {
  const [itemList, setItemList] = useState([]);

  const addItem = (itemName, price) => {
    const newItem = {
      itemName: itemName,
      price: price
    }

    const newItemList = [...itemList, newItem];
    setItemList(newItemList);
  }

  return (
    <div>
        <InputArea addItem={addItem}/>

        <div>
          { itemList.map(item => {return <p>{item.itemName}, {item.price}</p> }) }
        </div>

        <OutputArea/>
    </div>
  );
}

export default App;
