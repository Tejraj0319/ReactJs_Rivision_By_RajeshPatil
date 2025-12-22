import axios from "axios";

const base_url = "http://localhost:3030/api/v1/users";

export const getUser = async () => {
  try {
    const response = await axios.get(base_url, { withCredentials: true });
    return response.data?.data || []; // optional chaining
  } catch (error) {
    console.log(error);
  }
};

export const postUser = async (data) => {
  try {
    const response = await axios.post(base_url, data, {
      Headers: {
        "Content-Type": "text/plain",
      },
      withCredentials: true,
    });
    return response.data?.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (id, data) => {
  try {
    const response = await axios.put(`${base_url}/id`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return response.data?.data;
  } catch (error) {
    console.log(error);
  }
};
