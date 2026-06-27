import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: String, required: true },
  icon: { type: String, default: '✨' },
  order: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.models.Service || mongoose.model('Service', ServiceSchema);