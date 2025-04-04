import userModel from "../modals/userModel.js";
import FormData from 'form-data';
import axios from "axios";

export const generateImage = async (req, res) => {
    try {
        console.log("Request User ID:", req.user?.userId);

        const user = await userModel.findById(req.user.userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        if (user.creditBalance <= 0) {
            return res.status(403).json({ success: false, message: 'No Credit Balance', creditBalance: user.creditBalance });
        }

        const formData = new FormData();
        formData.append("prompt", req.body.prompt);

        const { data } = await axios.post("https://clipdrop-api.co/text-to-image/v1", formData, {
            headers: {
                "x-api-key": process.env.CLIPDROP_API,
                ...formData.getHeaders(),
            },
            responseType: "arraybuffer",
        });

        const base64Image = Buffer.from(data, "binary").toString("base64");
        const resultImage = `data:image/png;base64,${base64Image}`;

        await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 }, { new: true });

        res.status(200).json({ success: true, message: "Image Generated", creditBalance: user.creditBalance - 1, resultImage });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
