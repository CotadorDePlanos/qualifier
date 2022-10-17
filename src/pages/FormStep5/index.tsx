import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';


export const FormStep5 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 5
            });
        }
    }, []);

    const handleNextStep = () => {
        history.push('/step6');
    }

    const setPriority = (priority: 'APPOINTMENT' | 'EMERGENCY' | 'SURGERY' | 'PREGNANCY') => {
        dispatch({
            type: FormActions.setPriority,
            payload: priority
        });
    }


    return (
        <Theme>
            <C.Container>
                <h1>{state.name}, Qual sua Prioridade Hoje?</h1>
                <hr/>

                <SelectOption
                    title="agendamento"
                    description=""
                    icon=""
                    selected={state.priority === 'APPOINTMENT' }
                    onClick={()=>setPriority('APPOINTMENT')}
                />

                <SelectOption
                    title="emergencia"
                    description=""
                    icon=""
                    selected={state.priority === 'EMERGENCY'}
                    onClick={()=>setPriority('EMERGENCY')}
                />

                <SelectOption
                    title="sirurgia"
                    description=""
                    icon=""
                    selected={state.priority === 'SURGERY'}
                    onClick={()=>setPriority('SURGERY')}
                />
                
                <SelectOption
                    title="gravidez"
                    description=""
                    icon=""
                    selected={state.priority === 'PREGNANCY'}
                    onClick={()=>setPriority('PREGNANCY')}
                />

                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    );
}