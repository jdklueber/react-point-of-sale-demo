
function OutputArea({itemList}) {
    const subtotal = itemList.reduce( (accumulator, item) => {
        return accumulator += item.price
    }, 0.00 );

    const tax = subtotal * .05;
    const total = subtotal + tax;

    return (
        <p>
            subtotal: {subtotal.toFixed(2)}<br/>
            tax: {tax}<br/>
            total: {total}

        </p>
    )
}

export default OutputArea;