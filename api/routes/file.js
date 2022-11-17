import express from 'express'
import { createFile, deleteFile, getAllFiles, getFile, updateFile } from '../controllers/File.js'

const router = express.Router()

// CREATE
router.post('/:id', createFile)
// UPDATE
router.put('/:id', updateFile)
// DELETE
router.delete('/:id', deleteFile)
// GET
router.get('/', getAllFiles)
// GET ALL
router.get('/:id', getFile)


export default router 