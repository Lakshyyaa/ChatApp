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
        return users.splice(index, 1)[0]
    }
}
const getUser = ({ id }) => {
    return {(users.find((user) => user.id === id))}
}
const getUsersInRoom = ({ room }) => {
    users.filter((user) => user.room === room)
}
module.exports = { addUser, getUser, removeUser, getUsersInRoom }