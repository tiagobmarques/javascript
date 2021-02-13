export class InvoiceEntity {

    constructor(id, participant, installmentDate, document, value) {
        this._id = id;
        this._participant = participant;
        this._installmentDate = installmentDate;
        this._document = document;
        this._value = value;
    }

    get id(){
        return this._id;
    }

    set id(id){
        this._id = id;
    }

    get participant(){
        return this._participant;
    }

    set participant(participant){
        this._participant = participant;
    }

    get installmentDate(){
        return this._installmentDate;
    }

    set installmentDate(installmentDate){
        this._installmentDate = installmentDate;
    }

    get document(){
        return this._document;
    }

    set document(document){
        this._document = document;
    }

    get value(){
        return this._value;
    }

    set value(value){
        this._value = value;
    }

}