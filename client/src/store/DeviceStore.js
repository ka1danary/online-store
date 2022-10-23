// mobx
import {makeAutoObservable} from "mobx";

export default class DeviceStore { // mobx будет следить за изменением этих переменных и при применении компоненты будут перерендериваться
    constructor() {
        this._types = [
            {id : 1, name : 'Холодильники'},
            {id : 2, name : 'Смартфоны'}
        ]
        this._brands = [
            {id : 1, name : 'Samsung'},
            {id : 2, name : 'Apple'}
        ]
        this._devices = [
            {id : 1, name : 'Iphone 1', price : 25000, rating : 5, img : ''},
            {id : 2, name : 'Iphone 2', price : 35000, rating : 5, img : ''},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }



    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevice(devices) {
        this._devices = devices
    }
    setSelectedType(type) { // выделение при нажатии
        this._selectedType = type
    }

    setSelectedBrand(brand) { // выделение при нажатии
        this._selectedTBrand = brand
    }

    // вызываются только в том случае, если состояние было изменено
    get types() { // геттеры для получения переменных из нашего состояния
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() { // выделение при нажатии
        return this._selectedType
    }

    get selectedBrand() { // выделение при нажатии
        return this._selectedBrand
    }

}