import { useEffect, useState } from "react";
import { ListMessage, ExcludeMessage, Logout } from '../../../api';
import * as C from './styles'
import { useHistory } from 'react-router-dom'
import { CrossCircledIcon, GearIcon, PlusIcon } from '@radix-ui/react-icons'
import * as Toast from '@radix-ui/react-toast'

interface MessageInterface {
    id: string;
    message: string;
    type: string;
}
interface MessagesInterface extends Array<MessageInterface>{}

export function MessageDisplay() {
    const history = useHistory()
    const [messages, setMessages] = useState<MessagesInterface>([])
    const [open, setOpen] = useState(false)

    useEffect(() => {
        getMessages()
    }, []);


    const getMessages = () => {
        ListMessage().then(response => {setMessages(response.result)})
    }

    const handleEditMessage = (message: MessageInterface) => {
        history.push('/message/edit/'+ message.id)
    }

    const handleCreateMessage = () => {
        history.push('/message/edit')
    }
    
    const handleExcludeMessage = (messageId:string) => {
        ExcludeMessage(messageId).then(res => {
            setOpen(true);
            window.setTimeout(() => {
                setOpen(false);
              }, 5000);
            getMessages()
        })
    }

  return (
    <C.Container>
    <div className="card">
        <div>
            <h1>Lista de mensagems</h1>
            <hr/>
            { messages.map( (element) => {
                return(
                    <div key={'msg_'+element.id} style={{display:"flex", justifyContent:'space-around', gap:10}}>
                        <div>{element.message.substring(0,30)}</div>
                        <div>
                            <span onClick={()=>handleEditMessage(element)}><GearIcon/></span>
                            <span onClick={()=>handleExcludeMessage(element.id)}><CrossCircledIcon/></span>
                        </div>
                        <hr/>
                    </div>
                )
            })}

            <button onClick={()=>handleCreateMessage()}><PlusIcon/></button>
            <button type="submit" onClick={() => Logout()}>Logout</button>
        </div>
        <Toast.Provider swipeDirection="right">
            <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
                <Toast.Title className="ToastTitle">Mensagem excluida com sucesso</Toast.Title> 
                <Toast.Description className="ToastDescription">aa</Toast.Description>
                <Toast.Close><CrossCircledIcon/></Toast.Close> 
            </Toast.Root>
            <Toast.Viewport  className="ToastViewport"/>
        </Toast.Provider>
    </div>
    </C.Container>
  );
}
