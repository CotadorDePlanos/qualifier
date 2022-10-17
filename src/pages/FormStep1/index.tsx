import { useHistory } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep1 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);

    const handleNextStep = () => {
        if(state.name !== '' && state.email !== '' && state.phone !== '') {
            history.push('/step2');
        } else {
            alert("Preencha os dados.");
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }
    const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setPhone,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <h1>Simule seu Plano de Saúde</h1>
                <hr/>
                <label>
                    Como Podemos Te Chamar?
                    <input
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>
                
                <label>
                    Qual seu e-mail?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual seu Telefone?
                    <input
                        type="text"
                        value={state.phone}
                        onChange={handleChangePhone}
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}