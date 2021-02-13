// Imports 
import { ParticipantEntity } from "./app/models/ParticipantEntity.js";
import { UserEntity } from "./app/models/UserEntity.js";
import { InvoiceRepository } from "./app/repository/InvoiceRepository.js";
import { ParticipantRepository } from "./app/repository/ParticipantRepository.js";
import { UserRepository } from "./app/repository/UserRepository.js";

// Participant
const newParticipant = new ParticipantEntity(5, "Carlos", "840005", "CPF", "32165498745");

const participantRepository = new ParticipantRepository();
participantRepository.save(newParticipant);

// User
const newUser = new UserEntity(3, "Rafael", "rafaelbm", "12345");

const userRepository = new UserRepository();
userRepository.save(newUser);

// OutPut
console.log("All Participants: ", participantRepository.findAll());
console.log("All Users: ", userRepository.findAll());
console.log("-------------------------------------");
console.log("Find Participant by id: ", participantRepository.findById(3));
console.log("Find User by id: ", userRepository.findById(2));
console.log("-------------------------------------");
console.log("Deleting by id Tiago and Samira in ParticipantRepository...");
participantRepository.delete(1);
participantRepository.delete(2);
console.log("All Participants afeter deleting: ", participantRepository.findAll());
console.log("Deleting by id Samira in UserRepository...");
userRepository.delete(2);
console.log("All Users afeter deleting: ", userRepository.findAll());
console.log("-------------------------------------");
console.log("Update Valentina to Valentina Marques");
let valentinaUpdated = participantRepository.findById(3);
valentinaUpdated.name = "Valentina Marques"
valentinaUpdated.registrationCode = "999999"
participantRepository.update(3, valentinaUpdated);
console.log("Valentina Updated: ", participantRepository.findById(3));
console.log("-------------------------------------");

// Invoice
const invoiceRepository = new InvoiceRepository();
console.log(invoiceRepository.findAll());