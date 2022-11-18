import express from 'express'
import { createFile, deleteFile, getAllFiles, getFile, getFilesPerson, updateFile } from '../controllers/File.js'

const router = express.Router()

// CREATE
router.post('/:id', createFile)
// UPDATE
router.put('/:id', updateFile)
// DELETE
router.delete('/:id', deleteFile)
// GET
router.get('/:id', getFile)
// GET ALL
router.get('/', getAllFiles)
router.get('/person/:id', getFilesPerson)


export default router 