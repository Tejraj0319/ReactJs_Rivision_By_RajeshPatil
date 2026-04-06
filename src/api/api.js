import axios from "axios";

const base_url = "http://localhost:3030/api/v1/users";

export const getUser = async () => {
  try {
    const response = await axios.get(base_url, { withCredentials: true });
    return response.data?.data;
  } catch (error) {
    console.log(error);
  }
};

export const postUser = async (data) => {
  try {
    const response = await axios.post(base_url, data, {
      headers: {
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
    const response = await axios.put(`${base_url}/${id}`, data, {
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

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${base_url}/${id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


// export const remove = async(id)=>{
//     try {
//     const response = await fetch(`${base_url}/${id}`,{
//       method:"DELETE",
//       credentials:"include"
//     })
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// }


// export const post = async(data)=>{
//   try{
//     const resp = await fetch(base_url,{
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials:"include",
//       body:JSON.stringify(data)
//     })
//     const response = await resp.json()
//     return response;
//   }catch(error){
//       console.log(error)
//   }
// }