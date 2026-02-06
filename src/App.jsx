import {useState} from "react";
function App(){
  const[gender,setGender]=useState('male')
  const[city, setCity]=useState("NewDelhi")
  return(
    <div>
      <h1>Handle Radio and Dropdown</h1>
      <h3>Select Gender</h3>
      <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" value={"Male"} checked={gender=='male'} id="male"/> 
      <label htmlFor="male">Male</label>
      <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender"  value={"Female"} checked={gender == 'female'} id="female"/>
       <label htmlFor="female">Female</label>

       <h2>Selected Gender:{gender}</h2>
       <br/> <br/> <br/>
       <h4>Select City</h4>
       <select onChange={(event)=>setCity(event.target.value)} defaultValue={"NewDelhi"}>
        <option value="noida">Noida</option>
        <option value="gurgaon">Gurgaon</option>
        <option value="NewDelhi">NewDelhi</option>
        
       </select>
       <h2>Selected City:{city}</h2>
    </div>
    
  )
}
export default App;