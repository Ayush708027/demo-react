import User from "./User"
import Wrapper from "./Wrapper"

function App(){
  
  return(
    <div>
      <h1>Props in React Js</h1>
      <User name="Ayush"/>
      <User/>



      <Wrapper color="orange">
        <h1>Hello Everyone</h1>
      </Wrapper>   
      
      <Wrapper color="purple">
        <h1>Hello Ayush!</h1>
        <h2 style={{color:"red"}}>Please Login</h2>
      </Wrapper> 



    </div>
  )
}
export default App;