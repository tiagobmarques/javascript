import { ContactEntity } from "./ContactEntity.js";

export class ParticipantEntity extends ContactEntity{
    constructor (id, name, registrationCode, registrationType, registrationNumber) {
        super(id, name);
        this._registrationCode = registrationCode;
        this._registrationType = registrationType;
        this._registrationNumber = registrationNumber;
    }

    get registrationCode() {
        return this._registrationCode;
    }

    set registrationCode(registrationCode) {
        this._registrationCode = registrationCode;
    }

    get registrationType() {
        return this._registrationType;
    }

    set registrationType(registrationType) {
        this._registrationType = registrationType;
    }

    get registrationNumber() {
        return this._registrationNumber;
    }

    set registrationNumber(registrationNumber) {
        this._registrationNumber = registrationNumber;
    }
}