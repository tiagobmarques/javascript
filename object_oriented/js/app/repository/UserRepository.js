import { UserEntity } from "../models/UserEntity.js";
import { Repository } from "./Repository.js";

export class UserRepository extends Repository{

    addObjectList(objectList){
        const newUser1 = new UserEntity(1, "Tiago", "tiagobm", "10121990");
        const newUser2 = new UserEntity(2, "Samira", "samiramar", "09081989");

        objectList.push(newUser1, newUser2);
    }
}