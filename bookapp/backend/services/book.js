const { User } = require('../models/user');
const { Book } = require('../models/books');



function addUser(username, password, accountno) {
    console.log("in services addduser");
   return User.findOne({
       username
   })
   .then(user=>{
       if(user){
         return {
             statusCode:400,
             message:"Account already exists"
         }
       }
       const newUser = new User({
        username, password, accountno
       })
        newUser.save();
        return {
            statusCode:200,
            message:"Account created sucessfully"
        }

   })
    // data[username] = { username, password, accountn0, balance:0 };
    
}
function addbook(title, price) {
    console.log("in services adddbook");
    //console.log(imagePath);
   return Book.findOne({
       title
   })
   .then(books=>{
       if(books){
         return {
             statusCode:400,
             message:"Book exists"
         }
       }
       const newbook = new Book({
        title,price
       })
        newbook.save();
        return {
            statusCode:200,
            message:"Book added sucessfully"
        }

   })
    // data[username] = { username, password, accountn0, balance:0 };
    
}


function createNewBook(title,price){
    console.log("productServices - createNew");
    return Book.findOne({
        title
    })
    .then (book=>{
        if(book){
            return{
                statusCode:400,
                message:"Book already exists"
            }
        }
        const newBook= new Book({
            title,price

        });
        newBook.save();

        return {
            statusCode:200,
            message:"Book added successfully"
        }
    })
}

function login(username){
    console.log('bookServices - login');
    
    return User.findOne({
        username
        
    })
    .then (user=>{
        if(user){
            let record1= user.username
            console.log(record1)
            return{
                statusCode:200,
                record:user,                
                message:"Logged in successfully"
                
            }
        }
        return {
            statusCode:400,
            message:"Invalid credentials"
        }
    });
}


function getAllBooks(){
    console.log("in backend services--getAllboioks")
                return Book.find({})

                .then(books=>{
                return {
                statusCode:200,
                message:"Books List Following",
                books:books
    }
})}
function getBooksByTitle (title){
    console("inside service getbooks  by title")
    return Book.find({"title":title}) 
    .then (books=>{
            return{
                statusCode:200,
                books:books
            }
    })
}

function setCurrentUser(username) {
    currentUser=username ;

}
function getCurrentUser(username) {
    return currentUser;

}
module.exports={
//getUsers:getUsers,
addUser:addUser,
login:login,
addbook:addbook,
createNewBook:createNewBook,
getAllBooks:getAllBooks,
getBooksByTitle:getBooksByTitle
}