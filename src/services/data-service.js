import axios from "axios";

export const getAllData = async () => {
    try {
        const response = await axios.get("http://localhost:5109/api/Table/GetAll");
        return response.data;
    } catch (error) {
        console.log('error - getAllData')
    }
    
}