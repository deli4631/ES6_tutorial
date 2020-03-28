// import nondefault things
// put in curly bracekts
import User, {printName as printUserName, printAge} from '/user.js'

const user = new User('Bob', 11)
console.log(user)
printUserName(user)
printAge(user)
//babble converts to older js