import axios from "../api/axios";

const handleImageUpload = async (image) => {
  let formData = new FormData();
  formData.append("image", image);
  try {
    const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`,
      formData
    );
    if (response.data.success) {
      return response.data.data.url;
    } else {
      console.error("Image upload failed:", response.data.error.message);
    }
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};
export default handleImageUpload;
