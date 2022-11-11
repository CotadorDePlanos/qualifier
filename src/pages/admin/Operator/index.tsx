import { useEffect, useState } from "react";
import { OperatorCreate, OperatorList, EditOperator, Logout } from '../../../api';
import * as C from './styles'
import { DotFilledIcon, DotIcon, UpdateIcon, CrossCircledIcon } from '@radix-ui/react-icons'
import * as Toast from '@radix-ui/react-toast';


export interface OperatorInterface {
    id: string;
    name: string;
    active: boolean;
}
export interface OperatorsInterface extends Array<OperatorInterface>{}


export function Operator() {
    const [operators, setOperators] = useState<OperatorsInterface>([])
    const [name,setName] = useState('')
    const [open, setOpen] = useState(false);


    useEffect(() => {
        getOperators()
    }, []);

 

    const getOperators = () => {
        OperatorList().then(response => {setOperators(response.result)})
    }

    const handleCreateOperator = ( name:string ) => {
        if(name === ''){return}
        OperatorCreate(name).then(res => getOperators()).then(()=>setName(''))
        .catch(err => {
            setOpen(true);
            window.setTimeout(() => {
                setOpen(false);
              }, 5000);
        })
    }

    const handleEditOperator = (id:string, name:string, active:boolean) => {
        EditOperator(id,name,active)
        .then(()=>{
            getOperators();
        })
    }
    

  return (
    <C.Container>
        <div className="card">
            <div>
                <h1>Lista de operadoras</h1>
                { operators.map( (element) => {
                    var icon
                    if(element.active){
                        icon = <DotFilledIcon color="green"/>
                    } else {
                        icon = <DotIcon color="red"/>
                    }

                    return(
                        <div key={element.id} style={{display:"flex", justifyContent:"space-between"}}>
                            <p ><i>Id:</i>{element.id} | {element.name} {icon}</p>
                            <span onClick={()=>{ handleEditOperator(element.id,element.name,!element.active) }}>
                                <UpdateIcon />
                            </span>
                        </div>
                    )
                })}
                <hr/>
                <label>
                    Cadastrar nova operadora
                    <input
                        id='name'
                        type="text"
                        placeholder="Nome da operadora"
                        value={name}
                        autoFocus
                        onChange={(e)=>{setName(e.target.value)}}
                    />
                </label>
                <button onClick={()=>handleCreateOperator(name)}>criar operadora</button>

                {/* logout */}
                <button type="submit" onClick={() => Logout()}>Logout</button>


                <Toast.Provider swipeDirection="right">
                    <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
                        <Toast.Title className="ToastTitle">Operador não foi criado</Toast.Title> 
                        <Toast.Description className="ToastDescription">Nome de operadora ja utilizado</Toast.Description>
                        <Toast.Close><CrossCircledIcon/></Toast.Close> 
                    </Toast.Root>

                    <Toast.Viewport  className="ToastViewport"/>
                </Toast.Provider>



            </div>
        </div>
    </C.Container>
  );
}
