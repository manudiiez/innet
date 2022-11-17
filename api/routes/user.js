import express from 'express'
import { deleteUser, getAllUsers, getUser, updateUser } from '../controllers/User.js'
import { loginUser, registerUser } from '../controllers/user.js'

const router = express.Router()

// REGISTER
router.post('/register', registerUser)
// LOGIN
router.post('/login', loginUser)
// UPDATE
router.put('/:id', updateUser)
// DELETE
router.delete('/:id', deleteUser)
// GET
router.get('/', getAllUsers)
// GET ALL
router.get('/:id', getUser)


export default router