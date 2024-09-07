import express from 'express'
import { addNewContact, deleteContact, getAllContact, getContactById, getContactByUserId, UpdateContact } from '../controller/Contact.js';

import { Authenticate
} from '../Middlewares/Auth.js';

const router = express.Router();

// get all contact
router.get('/',getAllContact)

// get contact by id
router.get('/:id',getContactById)

// add contact
router.post('/add',Authenticate, addNewContact)

// update contact
router.put('/:id',Authenticate, UpdateContact)

// delete contact
router.delete('/:id',Authenticate,deleteContact)

// contact by UserId
router.get('/user_id/:id',Authenticate,getContactByUserId);


export default router;