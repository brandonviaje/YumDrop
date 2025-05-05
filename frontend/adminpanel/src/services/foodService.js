import axios from "axios";

const API_URL = "http://localhost:8080/api/foods";

export const addFood = async (foodData, image) => {
  // Prepare formData
  const formData = new FormData();
  formData.append("food", JSON.stringify(foodData));
  formData.append("file", image);

  // POST API Call
  try {
    await axios.post(API_URL, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

export const getFoodList = async () => {
  // GET API Call
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.log("Error fetching food list", error);
    throw error;
  }
};

export const deleteFood = async (foodId) => {
  // DELETE API Call
  try {
    const response = await axios.delete(API_URL + "/" + foodId);
    return response.status === 204;
  } catch (error) {
    console.log("Error deleting food", error);
    throw error;
  }
};
