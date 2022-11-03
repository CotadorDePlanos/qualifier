import { ChangeEvent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { E164Number } from 'libphonenumber-js/types';
import Input  from 'react-phone-number-input/input'
import { CheckBox } from '../../components/Checkbox';
import { SendForm } from '../../api/index'

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
        var pass = true
        
        if(state.name === ''){
            const name = document.getElementById('name') as HTMLInputElement | null;
            name?.classList.add('required')
            pass = false
        }
        if(state.email === '' || !isValidEmail(state.email)){
            const email = document.getElementById('email') as HTMLInputElement | null;
            email?.classList.add('required')
            pass = false
        }
        if(state.phone === '' || !isValidPhone(state.phone)){
            const phone = document.getElementById('phone') as HTMLInputElement | null;
            phone?.classList.add('required')
            pass = false
        }

        if(pass) {
            SendForm(state)
            history.push('/step2');
        } else {
            alert('preencha os dados')
        }
    }
    
    function isValidEmail(email: string) {
        return /\S+@\S+\.\S+/.test(email);
    }

    function isValidPhone(phone: string) {
        return String(phone).length === 13 || String(phone).length === 14  
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.classList.remove('required')
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.classList.remove('required')
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });   
    }

    const handleChangePhone = (value: E164Number | undefined) => {
        dispatch({
            type: FormActions.setPhone,
            payload: value
        });
    }

    const handleChangeMessage = (value: boolean) => {
        dispatch({
            type: FormActions.setMessage,
            payload: !value
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
                        id='name'
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>
                
                <label>
                    Qual seu e-mail?
                    <input
                        id='email'
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual seu Telefone?
                    <Input
                        id='phone'
                        country="BR"
                        value={state.phone}
                        onChange={handleChangePhone}
                    />
                </label>

                <CheckBox
                    title='Concordo em receber o contato da AssessioriaBR para realizar minha cotação'
                    checked={state.message}
                    callback={handleChangeMessage}
                />

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}