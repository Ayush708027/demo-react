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
      <h1>Loop in JSX with Map Function</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
           
          </tr>
        </thead>
        <tbody>
          {
            userData.map((user)=>(
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
           
              
            </tr>
            ))
          }
        </tbody>
      </table>
      <h1>Dummy Data</h1>
      <table border="1" cellSpacing="0">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
        
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Anil</td>
            <td>29</td>
            <td>anil@test.com</td>
           
          </tr>
          <tr>
            <td>2</td>
            <td>Sam</td>
            <td>23</td>
            <td>sam@test.com</td>
            
          </tr>
          <tr>
             <td>3</td>
            <td>Peter</td>
            <td>19</td>
            <td>peter@test.com</td>
           
          </tr>
          <tr>
            <td>4</td>
            <td>Bruce</td>
            <td>30</td>
            <td>bruce@test.com</td>
            
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default App;
