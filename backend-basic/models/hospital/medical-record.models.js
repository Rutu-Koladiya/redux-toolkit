import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
    diagnosis: {
      type: String,
      required: true,
    },
    prescribedMedicines: [String],
    labTests: [String],
    notes: String,
  },
  { timestamps: true }
);

export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema
);
