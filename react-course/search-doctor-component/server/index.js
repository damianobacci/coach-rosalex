import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

import Chance from "chance";
const chance = new Chance();

const professions = [
  "Cardiologist",
  "Dermatologist",
  "Emergency Room Doctor",
  "Gastroenterologist",
  "Neurologist",
  "Oncologist",
  "Pediatrician",
  "Radiologist",
  "Surgeon",
  "Anesthesiologist",
  "General Practitioner",
  "Psychiatrist",
  "Obstetrician",
  "Gynecologist",
  "Ophthalmologist",
  "Orthopedic Surgeon",
  "Pathologist",
  "Urologist",
  "Rheumatologist",
  "Nephrologist",
  "Endocrinologist",
  "Allergist",
  "Pulmonologist",
  "Plastic Surgeon",
  "Hematologist",
  "Geriatrician",
  "Family Physician",
  "Vascular Surgeon",
  "Neonatologist",
  "Audiologist",
  "Chiropractor",
  "Podiatrist",
  "Occupational Therapist",
  "Physiotherapist",
  "Speech Therapist",
];

const doctors = [...Array(100).keys()].map((id) => {
  return {
    id,
    name: chance.name({ nationality: "en" }),
    profession: professions[Math.floor(Math.random() * professions.length)],
    address: chance.address(),
    phone: chance.phone({ country: "us" }),
  };
});

app.get("", (req, res) => {
  const q = req.query.q?.toLowerCase() || "";
  const results = doctors.filter((doctor) =>
    doctor.profession.toLowerCase().includes(q)
  );
  res.send(results);
});

app.listen(8080, () => console.log("Listening on port http://localhost:8080"));
