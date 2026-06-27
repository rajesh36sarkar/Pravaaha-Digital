import mongoose from 'mongoose';

const FAQSchema = new mongoose.Schema({
  q: { type: String, required: true },
  a: { type: String, required: true },
  order: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.models.FAQ || mongoose.model('FAQ', FAQSchema);