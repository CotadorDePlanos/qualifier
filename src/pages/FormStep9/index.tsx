import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
// import { ChangeEvent, useEffect } from 'react';
import { ChangeEvent, useEffect, useState } from 'react';


export const FormStep9 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();
    const [ postal, setPostal ] = useState({})

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
        if(e.target.value.length >= 8){
            fetchCep(e.target.value)
        }

        dispatch({
            type: FormActions.setPostal,
            payload: e.target.value
        });
    }


    const fetchCep = (postalCode:any) => {
        fetch('/viacep/'+ postalCode)
        .then(response => {
            if(response.status === 200){
               return response.json()
            } else {
                return {}
            }
        })
        .then(data => {
            setPostal(data)
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
                
                <Link to="/step8" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}