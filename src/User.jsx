function User({user}){
    
    return(
        <div>
            <hr/>
            <h2>Name:{user.name}</h2>
            <h2>Age:{user.age}</h2>
            <h3>Email:{user.email}</h3>
        </div>
    )
}
export default User;