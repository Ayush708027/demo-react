import './App.css'

function App(){
  const cardStyle={
          border: " 1px solid #cccccc3b",
          width:"200px",
          boxShadow:"1px 2px 3px 0px #cccccc57",
          margin:"10px"
        }
  return(
    <div>
      
      <h1 style={{color:'red', backgroundColor:"black"}}>Inline Style in React Js </h1>
    <div style= {{display:"flex"}}>
      <div style={cardStyle}>
        <img style={{width:"200px"}} src="https://www.w3schools.com/howto/img_avatar.png" alt="" srcset="" />
        <div style={{padding:"5px"}}>
          <h4>Ayush Prajapati</h4>
          <p>Software Developer</p>
        </div>
      </div>
      <div style={cardStyle}>
        <img style={{width:"200px"}} src="https://www.w3schools.com/howto/img_avatar.png" alt="" srcset="" />
        <div style={{padding:"5px"}}>
          <h4>Rohit Singh</h4>
          <p>Software Developer</p>
        </div>
      </div>
      <div style={cardStyle}>
        <img style={{width:"200px"}} src="https://www.w3schools.com/howto/img_avatar.png" alt="" srcset="" />
        <div style={{padding:"5px"}}>
          <h4>Amit Yadav</h4>
          <p>Software Developer</p>
        </div>
      </div>
    </div>
      
    </div>
  )
}
export default App
