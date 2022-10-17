import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { useEffect } from 'react';


export const FormStep7 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 7
            });
        }
    }, []);

    const handleNextStep = () => {
        history.push('/step7');
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
                <h1>Por favor adicione o numero de pessoas por faixa etaria</h1>
                <hr/>

           

                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    );
}