import axios from 'axios';
import queryString from 'query-string';
import { PhoneInterface, PhoneGetQueryInterface } from 'interfaces/phone';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPhones = async (query?: PhoneGetQueryInterface): Promise<PaginatedInterface<PhoneInterface>> => {
  const response = await axios.get('/api/phones', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPhone = async (phone: PhoneInterface) => {
  const response = await axios.post('/api/phones', phone);
  return response.data;
};

export const updatePhoneById = async (id: string, phone: PhoneInterface) => {
  const response = await axios.put(`/api/phones/${id}`, phone);
  return response.data;
};

export const getPhoneById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/phones/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePhoneById = async (id: string) => {
  const response = await axios.delete(`/api/phones/${id}`);
  return response.data;
};
