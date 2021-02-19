export class ContactEntity {

    constructor (contactEntity) {
        this._id = contactEntity.id,
        this._name = contactEntity.name;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }
}