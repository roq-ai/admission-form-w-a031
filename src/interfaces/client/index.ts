import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ClientInterface {
  id?: string;
  father_name?: string;
  qualification?: string;
  course_to_join?: string;
  address?: string;
  phone_number?: string;
  aadhar_no?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;

  user?: UserInterface;
  _count?: {};
}

export interface ClientGetQueryInterface extends GetQueryInterface {
  id?: string;
  father_name?: string;
  qualification?: string;
  course_to_join?: string;
  address?: string;
  phone_number?: string;
  aadhar_no?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
