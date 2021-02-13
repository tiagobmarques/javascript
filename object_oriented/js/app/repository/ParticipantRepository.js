import { ParticipantEntity } from "../models/ParticipantEntity.js";
import { Repository } from "./Repository.js";

export class ParticipantRepository extends Repository{

    addObjectList(objectList){
        const newParticipant1 = new ParticipantEntity(1, "Tiago", "0181365", "CPF", "06606787998");
        const newParticipant2 = new ParticipantEntity(2, "Samira", "6665444", "CPF", "07565465445");
        const newParticipant3 = new ParticipantEntity(3, "Valentina", "123155", "CPF", "98065445677");
        const newParticipant4 = new ParticipantEntity(4, "Nicolas", "99954456", "CPF", "32045645677");

        objectList.push(newParticipant1, newParticipant2, newParticipant3, newParticipant4);
    }
}