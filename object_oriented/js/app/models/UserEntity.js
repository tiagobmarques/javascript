import { ContactEntity } from "./ContactEntity.js";

export class UserEntity extends ContactEntity{
    constructor (id, name, login, password) {
        super(id, name);
        this._login = login;
        this._password = password;
    }

    get login () {
        return this._login;
    }

    set login (login) {
        this._login = login;
    }

    get password () {
        return this._password;
    }

    set password (password) {
        this._password = password;
    }
}