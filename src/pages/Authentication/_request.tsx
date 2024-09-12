import axios from 'axios';
import { UserModel } from '../../models/auth';

const API_URL = import.meta.env.VITE_API_URL;

export const verifyToken = async (token: string) => {
    if (token) {
        axios.defaults.headers['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers['Authorization'];
    }
    return axios.post(`${API_URL}/auth/verify_token`, { token: token });
}

export const signinAccount = async (email: string, password: string) => {
    return axios.post(`${API_URL}/auth/token`, { email, password })
}

export const refreshToken = async (token: string) => {
    return axios.post(`${API_URL}/auth/refresh?refresh_token=${token}`);
}

export const createAccount = async (data: UserModel) => {
    return axios.post(`${API_URL}/users`, data);
}

export const updateAccount = async (id: number, data: UserModel) => {
    return axios.put(`${API_URL}/users/${id}`, data);
}

export const getAccount = async (id: number) => {
    return axios.get(`${API_URL}/users/${id}`);
}

export const deleteAccount = async (id: number) => {
    return axios.delete(`${API_URL}/users/${id}`);
}
