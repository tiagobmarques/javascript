export class InvoiceEntity {

    constructor(invoiceEntity) {
        this._id = invoiceEntity.id;
        this._participant = invoiceEntity.participant;
        this._installmentDate = invoiceEntity.installmentDate;
        this._document = invoiceEntity.document;
        this._value = invoiceEntity.value;
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