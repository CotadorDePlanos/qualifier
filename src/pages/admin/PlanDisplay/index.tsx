import { ChangeEvent, useEffect, useState } from "react";
import { Logout } from '../../../api';
import { ListPlans, InactivePlan } from '../../../api/plan';
import * as C from './styles'
import { useHistory } from 'react-router-dom'
import { CrossCircledIcon, UpdateIcon, GearIcon, PlusIcon, DotFilledIcon, DotIcon } from '@radix-ui/react-icons'
import * as Toast from '@radix-ui/react-toast'

interface PlanInterface {
    id: string;
    accommodation: string;
    active: boolean;
    city: string;
    min_people: string;
    name: string;
    operator_id: string;
    state: string;
    tag: string;
    type: string;
}

interface PlansInterface extends Array<PlanInterface>{}

export function PlanDisplay() {
    const history = useHistory()
    const [plans, setPlans] = useState<PlansInterface>([])
    const [open, setOpen] = useState(false)


    useEffect(() => {
        getPlans()
    }, []);

    const getPlans = () => {
        ListPlans().then(response => {setPlans(response.result)})
    }

    const handleEditMessage = (plan: PlanInterface) => {
        history.push('/plan/edit/'+ plan.id)
    }

    const handleCsv = () => {
        history.push('/plan/csv')
    }
    
    const handleInactivePlan = (planId:string,status:boolean) => {
        InactivePlan(planId,status).then(res => {
            setOpen(true);
            window.setTimeout(() => {
                setOpen(false);
              }, 5000);
            getPlans()
        })
    }

  return (
    <C.Container>
    <div className="card">
        <div>
            <h1>Lista de planos</h1>
            <hr/>
            { plans.map( (element) => {
                var icon
                if(element.active){
                    icon = <DotFilledIcon color="green"/>
                } else {
                    icon = <DotIcon color="red"/>
                }
                return(
                    <div key={'plan_'+element.id} style={{display:"flex", justifyContent:'space-between', gap:10}}>
                        <div><p ><i>Id:</i>{element.id} | {element.name.substring(0,30)} {icon}</p></div>
                        <div>
                            {/* <span onClick={()=>handleEditMessage(element)}><GearIcon/></span> */}
                            <span onClick={()=>handleInactivePlan(element.id, !element.active)}><UpdateIcon/></span>
                        </div>
                        <hr/>

                    </div>
                )
            })}


            <button onClick={()=>handleCsv()}><PlusIcon/></button>
            <button type="submit" onClick={() => Logout()}>Logout</button>
        </div>
        <Toast.Provider swipeDirection="right">
            <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
                <Toast.Title className="ToastTitle">Plano alterado com sucesso</Toast.Title> 
                <Toast.Description className="ToastDescription">aa</Toast.Description>
                <Toast.Close><CrossCircledIcon/></Toast.Close> 
            </Toast.Root>
            <Toast.Viewport  className="ToastViewport"/>
        </Toast.Provider>
    </div>
    </C.Container>
  );
}
