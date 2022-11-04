import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../../contexts/FormContext';
import { Theme } from '../../../components/Theme';
import { useEffect } from 'react';
import { SelectOption } from '../../../components/SelectOption';
import { SendForm } from '../../../api';

export const FormStep2 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.hasPlan === 'ALREADY') {
            SendForm(state)
            history.push('/step3');
        } else {
            SendForm(state)
            history.push('/step4');
        }
    }

    const setHasPlan = (hasPlan: 'ALREADY'| 'BENEFITS' | 'PARTICULAR' |'DONT') => {
        dispatch({
            type: FormActions.setHasPlan,
            payload: hasPlan
        });
    }

    return (
        <Theme>
            <C.Container>
                <h1>{state.name}, me conta em qual momento você está agora?</h1>

                <hr/>

                <SelectOption
                    title="Não tenho plano de saúde"
                    description=""
                    selected={state.hasPlan === 'DONT'}
                    onClick={()=>setHasPlan('DONT')}
                />

                <SelectOption
                    title="Tenho cartão de beneficios"
                    description=""
                    selected={state.hasPlan === 'BENEFITS'}
                    onClick={()=>setHasPlan('BENEFITS')}
                />

                <SelectOption
                    title="Faço consultas e exames no particular"
                    description=""
                    selected={state.hasPlan === 'PARTICULAR'}
                    onClick={()=>setHasPlan('PARTICULAR')}
                />


                <SelectOption
                    title="Já tenho plano de saúde"
                    description=""
                    selected={state.hasPlan === 'ALREADY'}
                    onClick={()=>setHasPlan('ALREADY')}
                />


                <Link to="/" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}