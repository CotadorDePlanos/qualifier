import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect, useState } from 'react';

type Postal = {
    bairro?: string;
    cep?: string;
    complemento?: string;
    ddd?: string;
    gia?: string;
    ibge?: string;
    localidade?: string;
    logradouro?: string;
    siafi?: string;
    uf?: string;
}


export const FormStep9 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();
    const [ postal, setPostal ] = useState<Postal>({});
    const [ valid, setValid ] = useState(false);


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
        if(valid){
            history.push('/step10');
        } else {
            alert('digite um cep valido')
        }
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
                setValid(false)
                return {}
            }
        })
        .then(data => {
            setPostal(data)
            setValid(true)
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

                { Object.keys(postal).length > 0 && 
                    <p>{postal?.localidade}</p>
                }
                
                <Link to="/step8" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}