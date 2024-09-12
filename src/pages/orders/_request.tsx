import axios from 'axios';
import { OrderModel } from '../../models/order';

const API_URL = import.meta.env.VITE_API_URL;

export const getAllOrders = async (page = 1, items_per_page = 50, email = '') => {
  return axios.get(`${API_URL}/order`, { params: { page, items_per_page, email }});
}

export const countOrders = async (email = '') => {
  return axios.get(`${API_URL}/order/count`, { params: { email }});
}

export const getOrder = async (id: number) => {
  return axios.get(`${API_URL}/order/${id}`);
}

export const updateOrder = async (id: number, data: OrderModel) => {
  return axios.put(`${API_URL}/order/${id}`, data);
}

export const deleteOrder = async (id: number) => {
  return axios.delete(`${API_URL}/order/${id}`);
}
