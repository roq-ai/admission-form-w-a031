import axios from 'axios';
import queryString from 'query-string';
import { QualificationInterface, QualificationGetQueryInterface } from 'interfaces/qualification';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getQualifications = async (
  query?: QualificationGetQueryInterface,
): Promise<PaginatedInterface<QualificationInterface>> => {
  const response = await axios.get('/api/qualifications', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createQualification = async (qualification: QualificationInterface) => {
  const response = await axios.post('/api/qualifications', qualification);
  return response.data;
};

export const updateQualificationById = async (id: string, qualification: QualificationInterface) => {
  const response = await axios.put(`/api/qualifications/${id}`, qualification);
  return response.data;
};

export const getQualificationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/qualifications/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteQualificationById = async (id: string) => {
  const response = await axios.delete(`/api/qualifications/${id}`);
  return response.data;
};
