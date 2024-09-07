import express from 'express';
import mongoose from 'mongoose';
import { config } from "dotenv";
import cors from 'cors'


// import { addNewContact, deleteContact, getAllContact, getContactById, UpdateContact } from './controller/Contact.js';

import userRouter from './routes/User.js';
import contactRouter from './routes/Contact.js';

const app = express();
// .env setUp
app.use(express.json());
config({path:'.env'});

// cors
app.use(cors({
    origin:true,
    method:["POST","GET","DELETE","PUT"],
    credentials:true
}))

mongoose.connect(
    process.env.MongoUrl,
    { dbName: "Contact_API" }
)
.then(() => console.log("Mongodb connected successfully...!"))
.catch((error) => console.log("Error Occurred", error));


// user router
app.use('/api/user', userRouter);

// contact router
app.use('/api/contact',contactRouter)


// app.use('/api/contact',contactRouter) ye banane k bad niche wale pancho ka kam khatam ye routs bana kar kiya

// Get all contacts
// app.get('/api/contact', getAllContact);

// Get specific contact by ID
// app.get('/api/contact/:id', getContactById);

// Add new contact
// app.post('/api/contact/add', addNewContact);

// Update contact
// app.put('/api/contact/:id', UpdateContact);

// Delete contact
// app.delete('/api/contact/:id', deleteContact);

const port = 3000;

app.listen(port, () => console.log(`Your server is running on port ${port}`));





// when i had not made routes
// at that time my controller and model were there

// import express from 'express'
// import mongoose from 'mongoose'
// import { Contact } from './model/Contact.js'
// import { User } from './model/User.js'
// // import bcrypt from 'bcrypt'

// import { addNewContact, deleteContact, getAllContact, getContactById, UpdateContact } from './controller/Contact.js'

// import { userLogin, userRegister } from './controller/User.js'

// import router from './routes/User.js'


// const app = express()

// app.use(express.json());


// mongoose.connect(
//     "mongodb+srv://yadavamit34996:OMHD8yAcfSBdUZQt@cluster0.5m52s.mongodb.net/",
//      {dbName:"Contact_API"}
// ).then(()=>console.log("Mongodb connected successfully...!")).catch((error)=>console.log("Error Occurred",error));


// app.use('/api/user',router);


// // const contacts = [
// //     {id:1,name:"Amit",email:"amit@gmai.com",phone_no:"9696739213"},
// //     {id:2,name:"Aman",email:"aman@gmai.com",phone_no:"9698799213"},
// //     {id:3,name:"Anand",email:"anand@gmai.com",phone_no:"9856739213"},
// //     {id:4,name:"Alok",email:"alok@gmai.com",phone_no:"8366739213"},
// //     {id:5,name:"Prince",email:"prince@gmai.com",phone_no:"9566739213"},
// // ]



// // get all contacts
// app.get('/api/contact',getAllContact)

// // get specific data
// app.get('/api/contact/:id',getContactById)

// // add data(add new contact)
// app.post('/api/contact/add',addNewContact);

// // update contact
// app.put('/api/contact/:id',UpdateContact);

// // Delete Contact 
// app.delete('/api/contact/:id',deleteContact);


// // User register
// // app.post('/api/user',userRegister);


// // user login
// // app.post('/api/user/login',userLogin)


// const port = 3000;

// app.listen(port,()=>console.log(Your server is running on port ${port}))