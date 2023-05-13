import mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

interface UserDocument extends mongoose.Document {
    email: string;
    password: string;
    role: string;  // 'admin', 'veterinarian', or 'maintenance'
    name: string;
    forename: string;
}

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    name: { type: String, required: true },
    forename: { type: String, required: true },
});

// Hash the password before saving it
userSchema.pre('save', async function(next) {
    const user = this as UserDocument;
    if (!user.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
});

const UserModel = mongoose.model<UserDocument>('User', userSchema);
