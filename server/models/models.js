const sequelize = require('../db')
const {DataTypes} = require('sequelize') // описываются типы полей

// описание моделей

const User = sequelize.define('user', {
    id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true}, // primaryKey (первичный ключ) autoIncrement (при создание нового объкта id будет 1 2 3 ...)
    email : {type : DataTypes.STRING, unique : true}, // unique (уникальность)
    password : {type : DataTypes.STRING},
    role : {type : DataTypes.STRING, defaultValue : "USER"} // defValue - пользователь по умолчанию просто USER
})

const Basket = sequelize.define('basket', {
    id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true}
})

const BasketDevice = sequelize.define('basket_device', {
    id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true}
})

const Device = sequelize.define('device', {
    id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true},
    name : {type : DataTypes.STRING, unique: true, allowNull : false},
    price : {type : DataTypes.INTEGER,allowNull : false},
    rating : {type : DataTypes.INTEGER,defaultValue: 0},
    img : {type : DataTypes.STRING,allowNull : false},
})

const Type = sequelize.define('type', {
    id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true},
    name : {type : DataTypes.STRING, unique: true, allowNull : false},
})

const Brand = sequelize.define('brand', {
    id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true},
    name : {type : DataTypes.STRING, unique: true, allowNull : false},
})

const Rating = sequelize.define('rating', {
    id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true},
    rate : {type : DataTypes.INTEGER, allowNull : false},
})

const DeviceInfo = sequelize.define('device_info', {
    id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true},
    title : {type : DataTypes.STRING, allowNull : false},
    description : {type : DataTypes.STRING, allowNull : false}
})

const TypeBrand = sequelize.define('type_brand', {
    id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true},
})

//Связи

// связь между пользователем и корзиной 1 к 1
User.hasOne(Basket)
//корзина пренадлежит пользователю
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo, {as : 'info'})
DeviceInfo.belongsTo(Device)

// вид связи между типом и брендом - много ко многим
// при связи много ко многим создается промежуточная таблица свзяей типа с типом брендом с брендом
// нужно создать связующую таблицу
Type.belongsToMany(Brand, {through : TypeBrand})
Brand.belongsToMany(Type, {through : TypeBrand})

module.exports = {
    User, Basket, BasketDevice, Device, Type, Brand, Rating, TypeBrand, DeviceInfo
}



