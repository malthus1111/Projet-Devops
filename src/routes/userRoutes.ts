import * as express from 'express';
import { UserModel } from "../models/user";
import * as bcrypt from "bcrypt";
// @ts-ignore
import * as jwt from 'jsonwebtoken';
const router = express.Router();

router.post("/register", async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new UserModel({
        email: req.body.email,
        password: hashedPassword,
        role: req.body.role
    });
    await user.save();
    res.status(201).json({ message: "User created" });
});

router.post("/login", async (req, res) => {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id, role: user.role }, "YOUR_SECRET_KEY", { expiresIn: "1h" });
    res.json({ token });
});

export default router;
