import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';


export const FormStep8 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 8
            });
        }
    }, []);

    const handleNextStep = () => {
        history.push('/step9');
    }

    const setStart = (start: 'NOW' | '3MONTHS' | '6MONTHS') => {
        dispatch({
            type: FormActions.setStart,
            payload: start
        });
    }


    return (
        <Theme>
            <C.Container>
                <h1>Qual sua previsao de contratacao?</h1>
                <hr/>

                <SelectOption
                    title="Imediato"
                    description=""
                    icon=""
                    selected={state.start === 'NOW' }
                    onClick={()=>setStart('NOW')}
                />

                <SelectOption
                    title="Daqui 3 meses"
                    description=""
                    icon=""
                    selected={state.start === '3MONTHS'}
                    onClick={()=>setStart('3MONTHS')}
                />

                <SelectOption
                    title="Daqui 6 meses"
                    description=""
                    icon=""
                    selected={state.start === '6MONTHS'}
                    onClick={()=>setStart('6MONTHS')}
                />

                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    );
}