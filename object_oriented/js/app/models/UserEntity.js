import { ContactEntity } from "./ContactEntity.js";

export class UserEntity extends ContactEntity{
    constructor (userEntity) {
        super(userEntity);
        this._login = userEntity.login;
        this._password = userEntity.password;
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