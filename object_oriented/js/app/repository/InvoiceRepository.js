import { InvoiceEntity } from "../models/InvoiceEntity.js";
import { ParticipantRepository } from "./ParticipantRepository.js";
import { Repository } from "./Repository.js";

export class InvoiceRepository extends Repository{

    addObjectList(objectList){
        const participantRepository = new ParticipantRepository();

        const newInvoice1 = new InvoiceEntity(1, participantRepository.findById(3), '2020-01-01', '500', 600);
        const newInvoice2 = new InvoiceEntity(2, participantRepository.findById(4), '2020-02-01', '600', 250);
        const newInvoice3 = new InvoiceEntity(3, participantRepository.findById(1), '2020-03-01', '700', 1500);

        objectList.push(newInvoice1, newInvoice2, newInvoice3);
    }
}