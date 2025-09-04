import mongoose from "mongoose";

const enrollSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    age: { type: Number },
    experience: { type: String, default: "Beginner" },
    schedule: { type: String, default: "Morning" },
    course: { type: String }, // course slug or name
  },
  { timestamps: true }
);

const Enroll = mongoose.models.Enroll || mongoose.model("Enroll", enrollSchema);

export default Enroll;
