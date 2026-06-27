import mongoose from 'mongoose';

const WorkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  status: { type: String, enum: ['completed', 'progress', 'coming'], default: 'progress' },
  rating: { type: Number, min: 0, max: 5, default: 0 },
  image: { type: String, default: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg' },
  order: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.models.Work || mongoose.model('Work', WorkSchema);