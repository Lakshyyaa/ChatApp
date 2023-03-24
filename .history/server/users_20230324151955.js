const users = [];
const addUser = ({ id, name, room }) => {
    name = name.trim()
    room = room.trim()
    const existingUser = users.find((user) => user.room === room && user.name === name)
    if (existingUser) {
        return { error: 'username already taken!' }
    }
    const user = { id, name, room };
    users.push(user)
    return { user }
}
const removeUser = ({ id }) => {
    const index = users.find((user) => user.id === id)
    if (index !== -1) {
        console.log(index+' is the index');
        return users.splice(index, 1)[0]
    }
    //laks, saks, baks, raks
}
const getUser = ({ id }) => {
    return users.find((user) => user.id === id)
}
const getUsersInRoom = ({ room }) => {
    return users.filter((user) => user.room === room)
}
module.exports = { addUser, getUser, removeUser, getUsersInRoom }