const InputField=({label, value, error, onChange})=>{

    return(
        <>
        <label>{label}</label>
        <input type="text"
        label="Celcius"
        value={value}
        onChange={onChange}
        placeholder="Enter Celcius___"
        />
        {error && <section style={{color:'red'}}>{error}</section> }
        </>
    )
}
export default  InputField;