import React, { useEffect, useState } from "react";
import { 
    GetMessage,
    EditMessage,
    OperatorList,
    ListAssignedOperators,
    UnsignOperator,
    AssignOperator,
    Logout,
    CreateMessage,
    ExcludeMessage,
} from '../../../api';
import * as C from './styles'
import * as Toast from '@radix-ui/react-toast'
import { CrossCircledIcon } from '@radix-ui/react-icons'
import { useParams, useHistory } from 'react-router-dom'

interface RouteParams {
    messageId:string;
}

interface AssignedOperatorInterface {
    id: string;
    name: string;
    operator_id: string | '';
}
interface AssignedOperatorsInterface extends Array<AssignedOperatorInterface>{}



export function MessageEdit() {
    let { messageId } = useParams<RouteParams>();
    const history = useHistory()
    const [messageText,setMessageText] = useState('')
    const [open,setOpen] = useState(false)
    const [messageType,setMessageType] = useState('opening')
    const [assignedOperators,setAssignedOperators] = useState<AssignedOperatorsInterface>([])
    const [operators,setOperators] = useState<AssignedOperatorsInterface>([])

    useEffect(() => {
        if(messageId){
            GetMessage(messageId).then(res=> {
                setMessageText(res.result.message)
                setMessageType(res.result.type)
            })
            .catch(() => {
                history.push('/message/edit')
            })
            ListAssignedOperators(messageId).then(res => setAssignedOperators(res.result))
        }
        OperatorList().then(res =>{
            setOperators(res.result)
        })
    }, [messageId]);

    const handleEditMessage = () => {
        EditMessage(messageId, messageText, messageType)
        .then(()=>{
            setOpen(true);
            window.setTimeout(() => {
                setOpen(false);
              }, 5000);
        })
    }

    const handleUnsignOperator = (operatorId:string) => {
        UnsignOperator(messageId,operatorId).then(() => {
            ListAssignedOperators(messageId).then(res => setAssignedOperators(res.result))
        })
    }
    const handleAssignOperator = (operatorId:string) => {
        AssignOperator(messageId,operatorId).then(() => {
            ListAssignedOperators(messageId).then(res => setAssignedOperators(res.result))
        })
    }

    const handleCreateMessage = () => {
        CreateMessage(messageText,messageType)
        .then(res=>{
            setOpen(true);
            window.setTimeout(() => {
                setOpen(false);
              }, 5000);
            history.push('/message/edit/'+ res.result.id)
        })
    }

  return (
    <C.Container>
    <div className="card">
        <div>
            <h1>Criar/Editar mensagem</h1>
            <p>{messageId}</p>
            <label>
                texto da mensagem
            </label>
            <textarea
                id='message'
                autoFocus
                spellCheck={false}
                value={messageText}
                onChange={(e)=>{ setMessageText(e.target.value) }}
                rows={30}
                cols={45}
            />
            <div>
                <label>
                    Tipo da mensagem
                    <input 
                        type='text'
                        value={messageType}
                        onChange={(e)=>{setMessageType(e.target.value)}}
                    />
                </label>
            </div>

            <div>
            {assignedOperators.map((element) => {
                return(
                    <button 
                    key={element.id} 
                    className='operator' 
                    onClick={()=>{handleUnsignOperator(element.operator_id)}}
                    >
                        {element.name}
                    </button>
                )
            })}
            </div>

            {messageId &&
                <select onChange={(e)=> handleAssignOperator(e.target.value) }>
                    {operators.map((element,i) => {
                        return(
                            <option key={i} value={element.id}>
                                {element.name}
                            </option>
                        )
                    })}
                </select>   
            }

            <div>
                {messageId ?
                    <>
                    <button onClick={()=>handleEditMessage()}>editar Mensagem</button>
                    <button onClick={()=>{ExcludeMessage(messageId); history.push('/message')}}>excluir Mensagem</button>
                    </>
                    :
                    <button onClick={()=>handleCreateMessage()}>criar Mensagem</button>
                } 
                <button type="submit" onClick={() => Logout()}>Logout</button>
            </div>
        </div>
        <Toast.Provider swipeDirection="right">
            <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
                <Toast.Title className="ToastTitle">Mensagem criada/editada com sucesso</Toast.Title> 
                <Toast.Description className="ToastDescription">aa</Toast.Description>
                <Toast.Close><CrossCircledIcon/></Toast.Close> 
            </Toast.Root>

            <Toast.Viewport  className="ToastViewport"/>
        </Toast.Provider>
    </div>
    </C.Container>
  );
}

