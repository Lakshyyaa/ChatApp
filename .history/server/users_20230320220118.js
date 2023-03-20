const users=[];
const addUser=({id, name ,room})=>{
    name=name.trim()
    room=room.trim()
    const existingUser=users.find((user)=>user.room===room && user.name===name)
    if(existingUser){
        return {e}
    }
}
const removeUser=()=>{

}
const getUser=()=>{

}
const getUsersInRoom=()=>{

}