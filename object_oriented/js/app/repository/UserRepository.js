import { UserEntity } from "../models/UserEntity.js";
import { Repository } from "./Repository.js";

export class UserRepository extends Repository{

    addObjectList(objectList){
        const newUser1 = new UserEntity({id:1, name:"Tiago", login: "tiagobm", password: "10121990"});
        const newUser2 = new UserEntity({id:2, name:"Samira", login: "samiramar", password: "09081989"});

        objectList.push(newUser1, newUser2);
    }
}