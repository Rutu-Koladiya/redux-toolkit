import mongoose from "mongoose";

const workInHospitalSchema = new mongoose.Schema({
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
  },
  timeInHours: {
    type: Number,
  },
});

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      defaut: 0,
    },
    worksInHospital: [workInHospitalSchema],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
