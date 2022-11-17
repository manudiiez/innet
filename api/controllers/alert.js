import Alert from '../models/Alert.js'
import { changeId } from '../utils/utils.js'


// CREATE
export const createAlert = async (req, res, next) => {
    const newAlert = new Alert(req.body)
    try {
        const savedAlert = await newAlert.save()
        res.status(200).json(savedAlert)
    } catch (error) {
        next(error)
    }
}
// UPDATE
export const updateAlert = async (req, res, next) => {
    try {
        const updatedAlert = await Alert.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )

        res.status(200).json(updatedAlert)
    } catch (error) {
        next(error)
    }
}
// DELETE
export const deleteAlert = async (req, res, next) => {
    try {
        await Alert.findByIdAndDelete(req.params.id)
        res.status(200).json('Hotel has been deleted')
    } catch (error) {
        next(error)
    }
}
// GET
export const getAlert = async (req, res, next) => {
    try {
        const alert = await Alert.findById(req.params.id)
        res.status(200).json(alert)
    } catch (error) {
        next(error)
    }
}
// GET ALL
export const getAllAlerts = async (req, res, next) => {
    try {
        const alerts = await Alert.find()
        res.status(200).json(changeId(alerts))
    } catch (error) {
        next(error)
    }
}