const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    department: { type: String, required: true },
    specialization: [{ type: String }], // e.g. ['billing', 'technical']
    activeComplaintsCount: { type: Number, default: 0 },
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Agent', agentSchema);