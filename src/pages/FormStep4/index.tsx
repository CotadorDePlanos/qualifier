import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';


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
        history.push('/step5');
    }

    const setTag = (tag: 'PRICE' | 'ATTENDANCE'| 'NATIONAL') => {
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
                    title="Preco"
                    description=""
                    icon=""
                    selected={state.tag.includes('PRICE') }
                    onClick={()=>setTag('PRICE')}
                />

                <SelectOption
                    title="beneficios"
                    description=""
                    icon=""
                    selected={state.tag.includes('ATTENDANCE')}
                    onClick={()=>setTag('ATTENDANCE')}
                />

                <SelectOption
                    title="atendimento nacional"
                    description=""
                    icon=""
                    selected={state.tag.includes('NATIONAL')}
                    onClick={()=>setTag('NATIONAL')}
                />
                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    );
}