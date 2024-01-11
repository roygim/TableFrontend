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