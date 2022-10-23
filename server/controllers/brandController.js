
const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')
class typeController {

    async create(req,res) { // создание типов
        const {name} = req.body // у пост запроса есть тело и мы берем из него имя
        const brand = await Brand.create({name}) // с помощью функции криэйт создаем этот тип
        return res.json(brand) // на клиент возвращаем ввесь массив объектов
    }

    async getAll(req,res) { // получение типов
        const brands = await Brand.findAll()
        return res.json(brands)
    }
}
module.exports = new typeController()

