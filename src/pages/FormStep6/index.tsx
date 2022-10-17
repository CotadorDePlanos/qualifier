import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';


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
        history.push('/step8');
    }

    const setModality = (modality: 'CPF' | 'CNPJ') => {
        dispatch({
            type: FormActions.setModality,
            payload: modality
        });
    }


    return (
        <Theme>
            <C.Container>
                <h1>Este plano de saúde que você está procurando contrataria por CPF ou CNPJ?</h1>
                <hr/>

                <SelectOption
                    title="para uma pessoa física"
                    description=""
                    icon=""
                    selected={state.modality === 'CPF' }
                    onClick={()=>setModality('CPF')}
                />

                <SelectOption
                    title="Para uma empresa"
                    description=""
                    icon=""
                    selected={state.modality === 'CNPJ'}
                    onClick={()=>setModality('CNPJ')}
                />

                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    );
}