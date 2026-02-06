import User from './User'
function App(){
  const userName=['anil','sam','peter','bruce']

  const userData=[
    { 
      id:1,
      name:'Anil',
      age:'29',
      email:"anil@test.com",
      
    },
    {
      id:2,
      name:'Sam',
      age:'23',
      email:"sam@test.com",
      
    },
    {
      id:3,
      name:'Peter',
      age:'19',
      email:"peter@test.com",
     
    },
    {
      id:4,
      name:'Bruce',
      age:'30',
      email:"bruce@test.com",
      
    }
  ]
  return(
    <div>
      <h1>Reuse Component in Loop</h1>
  {
    userData.map((user)=>(
      <div key={user.id}>
        <User data={user}/>
      </div>
    ))
  } 

    </div>
   
   
  )
}
export default App;
