import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../../contexts/FormContext';
import { Theme } from '../../../components/Theme';
import { useEffect } from 'react';
import { SelectOption } from '../../../components/SelectOption';
import { SendForm } from '../../../api';

export const FormStep6 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 6
            });
        }
    }, []);

    const handleNextStep = () => {
        SendForm(state)
        history.push('/step7');
    }

    const setModality = (modality: 'PF' | 'PJ') => {
        dispatch({
            type: FormActions.setModality,
            payload: modality
        });
    }


    return (
        <Theme>
            <C.Container>
                <h1>Este plano de saúde que você está procurando contrataria para </h1>
                <hr/>

                <SelectOption
                    title="uma pessoa física"
                    description=""
                    selected={state.modality === 'PF' }
                    onClick={()=>setModality('PF')}
                />

                <SelectOption
                    title="uma empresa"
                    description=""
                    selected={state.modality === 'PJ'}
                    onClick={()=>setModality('PJ')}
                />

                <Link to="/step5" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}