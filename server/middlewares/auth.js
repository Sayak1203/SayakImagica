import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    try {
        const token = req.headers.token;
        if (!token) {
            return res.status(401).json({ success: false, message: 'Not Authorized. Login Again' });
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { userId: decoded.id };
        console.log("Authenticated User ID:", req.user.userId);
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Invalid Token' });
    }
};

export default userAuth;