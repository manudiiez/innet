import File from '../models/File.js'
import Person from '../models/Person.js'
import { changeId } from '../utils/utils.js'


// CREATE
export const createFile = async (req, res, next) => {
    const newFile = new File(req.body)
    const personId = req.params.id
    try {
        const savedFile = await newFile.save()
        try {
            await Person.findByIdAndUpdate(personId, {
                $push: { files: savedFile._id }
            })
        } catch (error) {
            next(error)
        }
        res.status(200).json(savedFile)
    } catch (error) {
        next(error)
    }
}
// UPDATE
export const updateFile = async (req, res, next) => {
    try {
        const updatedFile = await File.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )

        res.status(200).json(updatedFile)
    } catch (error) {
        next(error)
    }
}
// DELETE
export const deleteFile = async (req, res, next) => {
    const personId = req.params.personid
    try {
        await File.findByIdAndDelete(req.params.id)
        try {
            await Person.findByIdAndUpdate(personId, {
                $pull: { files: req.params.id }
            })
        } catch (error) {
            next(error)
        }
        res.status(200).json('Hotel has been deleted')
    } catch (error) {
        next(error)
    }
}
// GET
export const getFile = async (req, res, next) => {
    try {
        const file = await File.findById(req.params.id)
        res.status(200).json(file)
    } catch (error) {
        next(error)
    }
}
// GET ALL
export const getAllFiles = async (req, res, next) => {
    try {
        const files = await File.find()
        res.status(200).json(changeId(files))
    } catch (error) {
        next(error)
    }
}