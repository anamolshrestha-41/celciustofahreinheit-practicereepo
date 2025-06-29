import { useState } from "react";
import InputField from "./InputField";
const TemperatureConvo=()=>{
const[temp, setTemp]=useState('');
const [er, setError]= useState('');
const[result, setResult]= useState('');


  const isValid=(value)=>{
    const num= Number(value.trim());
     // Check if the result is a real number (not NaN)
  const isNumber = !isNaN(num);

  // Return true if it's a valid number, false otherwise
  return isNumber;
  }

  const handleChange = () => {
    if(!isValid(temp)){
      setError("Please Enter Valid Number");
      setResult('');
      return;
    }
    setError('');
    const Celcius= Number(temp);
    const Fahrenheit= (Celcius*9)/5+32;
    setResult(`${Fahrenheit.toFixed(2)}: degree^F`);
  };

  return (
    <div>
      <h2>Temperature Converter (C → F)</h2>
      <InputField
        label="Celsius"
        value={temp}
        onChange={(e)=>setTemp(e.target.value)}
      />
      <button onClick={handleChange}>Submit Celcius</button>
      {er && <p style={{color:"red"}}>{er}</p>}
      {result && <p style={{color:"green"}}>{result}</p> }
    </div>
  );
}
export default TemperatureConvo;