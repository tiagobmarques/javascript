export class Repository{

    constructor(){
        this._objectList = [];

        this.addObjectList(this._objectList);
    }

    addObjectList(objectList){
        throw new Error("This method should be implemented by class extended!");
    }

    findAll() {
        return [...this._objectList];
    }

    findById(id) {
        return this._objectList.find(element => element.id == id)
    }

    save(entity) {
        this._objectList.push(entity);
    }

    update(id, entity) {
        const index = this.findAll().indexOf(id);

        if (index > -1) {
            this._objectList[index] = entity;
        }
    }

    delete(id) {
        const element = this.findById(id);
        const index = this.findAll().indexOf(element);

        if (index > -1) {
            this._objectList.splice(index, 1);
        }
    }
}