import { ContactEntity } from "./ContactEntity.js";

export class ParticipantEntity extends ContactEntity{
    constructor (participantEntity) {
        super(participantEntity);
        this._registrationCode = participantEntity.registrationCode;
        this._registrationType = participantEntity.registrationType;
        this._registrationNumber = participantEntity.registrationNumber;
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