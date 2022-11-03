import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';
import { SendForm } from '../../api';

export const FormStep4 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            });
        }
    }, []);

    const handleNextStep = () => {
        SendForm(state)
        history.push('/step5');
    }

    const setTag = (tag: 'PRICE' | 'REGIONAL'| 'NATIONAL') => {
        dispatch({
            type: FormActions.setTag,
            payload: tag
        });
    }


    return (
        <Theme>
            <C.Container>
                <h1>{state.name}, Qual desses motivos você considera mais importante?</h1>
                <hr/>

                <SelectOption
                    title="Preço"
                    description=""
                    selected={state.tag === 'PRICE' }
                    onClick={()=>setTag('PRICE')}
                />

                <SelectOption
                    title="Quero uma melhor rede na minha região"
                    description=""
                    selected={state.tag === 'REGIONAL'}
                    onClick={()=>setTag('REGIONAL')}
                />

                <SelectOption
                    title="Quero a melhor opção de Plano com Atendimento Nacional"
                    description=""
                    selected={state.tag === 'NATIONAL'}
                    onClick={()=>setTag('NATIONAL')}
                />
                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}