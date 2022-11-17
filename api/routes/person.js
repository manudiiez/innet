import express from 'express'
import { createPerson, deletePerson, getAllPersons, getPerson, updatePerson } from '../controllers/person.js'

const router = express.Router()

// CREATE
router.post('/', createPerson)
// UPDATE
router.put('/:id', updatePerson)
// DELETE
router.delete('/:id', deletePerson)
// GET
router.get('/', getAllPersons)
// GET ALL
router.get('/:id', getPerson)


export default router