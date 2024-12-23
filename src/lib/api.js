import axios from 'axios';

export const registeruser = async (req) => {
    try {
        console.log('Payload: ', req)
        const response = await axios.post(`https://mongrel-auth.api.admongrel.net/api/auth/RegisterSubscriber`, req)
        return response.data
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Failed to register.';
        throw new Error(errorMessage);
    }
}

export const loginUser = async (req) => {
    try {
        console.log('Payload: ', req)
        const response = await axios.post(`https://mongrel-auth.api.admongrel.net/api/auth/LoginSubscriber`, req)
        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Failed to login. Please check your credentials.';
        throw new Error(errorMessage);
    }
};
