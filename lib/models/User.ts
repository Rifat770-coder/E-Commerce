import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: String,
  lastName: String,
  role: {
    type: String,
    enum: ['customer', 'admin'],
    default: 'customer',
  },
  profile: {
    avatar: String,
    phone: String,
    dateOfBirth: Date,
  },
  addresses: [{
    type: {
      type: String,
      enum: ['shipping', 'billing'],
      required: true,
    },
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
    isDefault: Boolean,
  }],
  preferences: {
    newsletter: {
      type: Boolean,
      default: true,
    },
    notifications: {
      type: Boolean,
      default: true,
    },
  },
}, {
  timestamps: true,
});

export default mongoose.models.User || mongoose.model('User', UserSchema);