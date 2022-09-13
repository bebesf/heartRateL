import React, { useState } from "react";
import './App.css';

function App() {
        const onSubmit = (event) => {
          event.preventDefault();
        }

    // Upper = (220 – age) * 0.85
    // Lower = (220 – age) * 0.65

    const [age, setAge] = useState();

    const [rate, setRate] = useState({upperRate: ' ', lowerRate: ' '});
    

  const rateLimit = () => {
    setRate({ ...rate,  upperRate : (220 - age) * 0.85,
      lowerRate : (220 - age) * 0.65 }) 
  }


    return (
      
     <div class="formcontainer">
      <form onSubmit={onSubmit}>
      <h2>Heart rate limits calculator</h2>
        <label>Age</label>
        <div class="input">
<input type="number" onChange = {(event) => setAge(event.target.value)}/>
</div>

        <label>Heart rate limits</label>
        <div class="input">
<input type="text" value={ rate.lowerRate + "-" + rate.upperRate }  readOnly/>
</div>
        <button onClick={ rateLimit } > calculate </button>
      </form>
      </div>
    );
}
export default App;
