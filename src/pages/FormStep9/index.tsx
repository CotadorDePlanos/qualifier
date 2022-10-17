import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';


export const FormStep9 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 9
            });
        }
    }, []);

    const handleNextStep = () => {
        history.push('/');
    }

    const handleChangePostal = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setPostal,
            payload: e.target.value
        });
    }


    return (
        <Theme>
            <C.Container>
                <h1>{state.name}, e para finalizar, qual o seu CEP para contratacao do plano?</h1>
                <hr/>
                <label>
                    <input
                        type="text"
                        autoFocus
                        value={state.postal}
                        onChange={handleChangePostal}
                    />
                </label>
                
            
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    );
}