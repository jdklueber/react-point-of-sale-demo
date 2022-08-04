
function LabeledInput({type, label, value, onChange}) {
    return (
        <div>
            {label} <input type={type} value={value} onChange={onChange}/>
        </div>
    )
}

export default LabeledInput;