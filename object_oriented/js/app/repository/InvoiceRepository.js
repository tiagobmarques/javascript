import { InvoiceEntity } from "../models/InvoiceEntity.js";
import { ParticipantRepository } from "./ParticipantRepository.js";
import { Repository } from "./Repository.js";

export class InvoiceRepository extends Repository{

    addObjectList(objectList){
        const participantRepository = new ParticipantRepository();

        const newInvoice1 = new InvoiceEntity({id: 1, participant: participantRepository.findById(3),
                                               installmentDate: '2020-01-01', document: '500', value: 600});
        const newInvoice2 = new InvoiceEntity({id: 2, participant: participantRepository.findById(4),
                                               installmentDate: '2020-02-01', document: '600', value: 250});
        const newInvoice3 = new InvoiceEntity({id: 3, participant: participantRepository.findById(1),
                                               installmentDate: '2020-03-01', document: '700', value: 1500});

        objectList.push(newInvoice1, newInvoice2, newInvoice3);
    }
}