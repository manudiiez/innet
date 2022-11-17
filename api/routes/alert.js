import express from 'express'
import { createAlert, deleteAlert, getAllAlerts, getAlert, updateAlert } from '../controllers/Alert.js'

const router = express.Router()

// CREATE
router.post('/', createAlert)
// UPDATE
router.put('/:id', updateAlert)
// DELETE
router.delete('/:id', deleteAlert)
// GET
router.get('/', getAllAlerts)
// GET ALL
router.get('/:id', getAlert)


export default router