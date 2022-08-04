import { useState } from "react";
import LabeledInput from "./LabeledInput";
import Button from "./Button";

function InputArea({addItem}) {
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState(0);

    const handleItemNameChange = (evt) => {
        setItemName(evt.currentTarget.value);
    }

    const handleItemPriceChange = (evt) => {
        setItemPrice(evt.currentTarget.value);
    }

    const addToList = () => {
        addItem(itemName, itemPrice);
        setItemName("");
        setItemPrice(0)
    }

    return (
        <div>
            <h2>POS Input</h2>
            <LabeledInput label="Item" type="text" value={itemName} onChange={handleItemNameChange}/>
            <LabeledInput label="Price" type="number" value={itemPrice} onChange={handleItemPriceChange}/>
            <Button label="Add" onClick={addToList}/>
        </div>
    )
}

export default InputArea;