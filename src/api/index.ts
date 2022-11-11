import axios from 'axios';
import { State } from '../contexts/FormContext'
import Cookies from "universal-cookie";
const cookies = new Cookies();

export function Logout(){
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    // redirect user to the landing page
    window.location.href = "/login";
}

export async function SendForm(state: State) {
  // try {
  //   const { data } = await axios.post<State>(
  //     '/api/make-webhook',
  //     state,
  //     {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //     },
  //   );

  //   return data;
  // } catch (error) {
  //   if (axios.isAxiosError(error)) {
  //     console.log('error message: ', error.message);
  //     return error.message;
  //   } else {
  //     console.log('unexpected error: ', error);
  //     return 'An unexpected error occurred';
  //   }
  // }
}

export async function GetQuotation(quotation:any) {
    const { data } = await axios.post(
        '/plan/list',
        quotation,
        {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        },
    );
    return data;
}

export async function OperatorList() {
    const token = cookies.get("TOKEN");
    const { data } = await axios.get(
        '/operator/list',
        {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token':token
        },
        },
    );
    return data;
}

export async function OperatorCreate(name:string) {
    const token = cookies.get("TOKEN");
    const { data } = await axios.post(
        '/operator/create',
        {name: name},
        {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token':token
        },
        },
    );
    return data;
}

export async function EditOperator(id:string, name:string, active:boolean,) {
    const token = cookies.get("TOKEN");
    const { data } = await axios.post(
        '/operator/edit',
        {id, name, active},
        {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token':token
        },
        },
    );
    return data;
}

export async function ListMessage() {
    const token = cookies.get("TOKEN");
    const { data } = await axios.get(
        '/message/list',
        {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token':token
        },
        },
    );
    return data;
}

export async function ListAssignedOperators(messageId:string) {
    const token = cookies.get("TOKEN");
    const { data } = await axios.get(
        '/message/assigned/' + messageId,
        {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token':token
        },
        },
    );
    return data;
}

export async function UnsignOperator(messageId:string, operatorId:string) {
    const token = cookies.get("TOKEN");
    const { data } = await axios.post(
        '/message/unsign',
        {messageId, operatorId},
        {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token':token
        },
        },
    );
    return data;
}

export async function AssignOperator(messageId:string, operatorId:string) {
    const token = cookies.get("TOKEN");
    const { data } = await axios.post(
        '/message/assign',
        {messageId, operatorId},
        {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token':token
        },
        },
    );
    return data;
}

export async function CreateMessage(text:string, type:string) {
    const token = cookies.get("TOKEN");
    const { data } = await axios.post(
        '/message/create',
        {data: text, type},
        {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token':token
        },
        },
    );
    return data;
}

export async function ExcludeMessage(messageId:string) {
    const token = cookies.get("TOKEN");
    const { data } = await axios.delete(
        '/message/exclude/' + messageId,
        {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token':token
        },
        },
    );
    return data;
}

export async function EditMessage(id:string, message:string, type:string) {
    const token = cookies.get("TOKEN");
    const { data } = await axios.post(
        '/message/edit',
        { id,data:message,type},
        {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token':token
        },
        },
    );
    return data;
}

export async function GetMessage(id:string) {
    const token = cookies.get("TOKEN");
    const { data } = await axios.get(
        '/message/get/' + id,
        {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token':token
        },
        },
    );
    return data;
}

export async function SendPhoneMessage(phone:string,message:string) {
    const { data } = await axios.post(
        '/api/zapi-send/',
        { phone, message },
        {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        },
    );
    return data;
}