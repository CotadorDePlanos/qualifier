import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.operatorName !== '' && state.operatorValue !== '') {
            history.push('/step4');
        } 
    }

    const handleOperatorName = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setOperatorName,
            payload: e.target.value
        });
    }

    const handleOperatorValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setOperatorValue,
            payload: e.target.value
        });
    }

    

    return (
        <Theme>
            <C.Container>
                <h1>{state.name}, me conta em qual momento você está agora?</h1>

                <hr/>

                <label>
                    Qual o nome da sua operadora?
                    <input
                        type="text"
                        autoFocus
                        value={state.operatorName}
                        onChange={handleOperatorName}
                    />
                </label>

                
                <label>
                    Qual o valor da sua fatura hoje?
                    <input
                        type="text"
                        autoFocus
                        value={state.operatorValue}
                        onChange={handleOperatorValue}
                    />
                </label>



                <Link to="/" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}