import Person from '../models/Person.js'


// CREATE
export const createPerson = async (req, res, next) => {
    const newPerson = new Person(req.body)
    try {
        const savedPerson = await newPerson.save()
        res.status(200).json(savedPerson)
    } catch (error) {
        next(error)
    }
}
// UPDATE
export const updatePerson = async (req, res, next) => {
    try {
        const updatedPerson = await Person.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )

        res.status(200).json(updatedPerson)
    } catch (error) {
        next(error)
    }
}
// DELETE
export const deletePerson = async (req, res, next) => {
    try {
        await Person.findByIdAndDelete(req.params.id)
        res.status(200).json('Hotel has been deleted')
    } catch (error) {
        next(error)
    }
}
// GET
export const getPerson = async (req, res, next) => {
    try {
        const Person = await Person.findById(req.params.id)
        res.status(200).json(Person)
    } catch (error) {
        next(error)
    }
}
// GET ALL
export const getAllPersons = async (req, res, next) => {
    try {
        const Persons = await Person.find()
        res.status(200).json(Persons)
    } catch (error) {
        next(error)
    }
}