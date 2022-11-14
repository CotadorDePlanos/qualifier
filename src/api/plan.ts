import axios from 'axios';
import Cookies from "universal-cookie";
const cookies = new Cookies();

export async function ListPlans() {
    const token = cookies.get("TOKEN");
    const { data } = await axios.get(
        '/plan/list',
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

export async function InactivePlan(planId:string,status:boolean) {
    const token = cookies.get("TOKEN");
    const { data } = await axios.post(
        '/plan/inactive/' + planId,
        { status },
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

export async function CreatePlan(plans:any) {
    const token = cookies.get("TOKEN");
    console.log(plans)
    const { data } = await axios.post(
        '/plan/create',
        { plans },
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