import axios from "axios";

export const getAllData = async () => {
    try {
        const url = `${process.env.REACT_APP_API_URL}/Table/GetAll`
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log('error - getAllData')
    }
}

export const addData = async (data) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/Table/AddUser`, data)
        return response.data;
    } catch (err) {
        console.error('error - deleteData')
    }
};

export const deleteData = async (id) => {
    try {
        const url = `${process.env.REACT_APP_API_URL}/Table/DeleteUser/${id}`
        const response = await axios.delete(url);
        return response.data;
    } catch (error) {
        console.log('error - deleteData')
    }
}