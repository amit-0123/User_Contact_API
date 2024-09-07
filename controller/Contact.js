import { Contact } from "../model/Contact.js";



// get all contacts
export const getAllContact = async(req,res)=>{
    const contacts = await Contact.find();

    if(!contacts) return res.status(404).json({message:"No Contacts find",contacts})

       res.json({message:"Contact fetched successfully",contacts});

   //   console.log(contacts);
   //   res.json(contacts);
}

// get specific data
export const getContactById = async(req,res)=>{
    const id = req.params.id

    const userContact = await Contact.findById(id);

    if(!userContact) return res.status(404).json({message:"No Contact found",userContact});
    res.json({message:"Contact fetched successfully",userContact});

    // const filterContact = contacts.filter((contact)=>contact.id==id)
    // console.log(filterContact);
    // res.json(filterContact)
}

// add data(add new contact)
export const addNewContact = async(req,res)=>{
    const {name,email,phone_no,type} = req.body;
    console.log(req.body)

    if(name==' '||email==' '||phone_no==' '||type==' ') return res.status(401).json({message:"All fields are required"})

   const saveContact = await Contact.create({
    name,email,phone_no,type,user:req.user
   });
   res.json({message:"Contact saved successfully",saveContact});
}

// Update contact
export const UpdateContact = async(req,res)=>{
    const id = req.params.id;
    const {name,email,phone_no,type} = req.body;

    const updateContact = await Contact.findByIdAndUpdate(id,{name,email,phone_no,type},{new:true});

     if(!updateContact) return res.status(404).json({message:"No Contact Found"});

     res.json({message:"Contact Updated Successfully",updateContact});
}


// delete contact
export const deleteContact = async(req,res)=>{
    const id= req.params.id;

    const deleteContact = await Contact.findByIdAndDelete(id);

    if(!deleteContact) return res.status(404).json({message:"Contact not exist"});
    res.json({message:"Contact deleted successfully!"});
};


// get contact by user Id
export const getContactByUserId = async(req,res)=>{
    const id =req.params.id;
    let contact = await Contact.find({user:id});
    if(!contact) return res.status(404).json({message:"Contact data does not exist for this User!"});
    res.json({message:"User specific contacts",contact})
}