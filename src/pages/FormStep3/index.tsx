import { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';

export const FormStep3 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();
    const [open, setOpen] = useState(false)

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
        var pass = true
        
        if(state.operatorName === '' || typeof state.operatorName === 'undefined'){
            const operatorName = document.getElementById('operatorName') as HTMLInputElement | null;
            operatorName?.classList.add('required')
            pass = false
        }

        if(state.operatorValue === '' || typeof state.operatorValue === 'undefined'){
            const operatorValue = document.getElementById('operatorValue') as HTMLInputElement | null;
            operatorValue?.classList.add('required')
            pass = false
        }

        if(pass) {
            history.push('/step4');
        } else {
            alert('preencha os dados')
        }
    }

    const handleOperatorName = (value: string) => {
        dispatch({
            type: FormActions.setOperatorName,
            payload: value
        });
    }

    const handleOperatorValue = (value: string) => {
        dispatch({
            type: FormActions.setOperatorValue,
            payload: value
        });
    }

    

    return (
        <Theme>
            <C.Container>
                <h1>Legal! Para que a gente encontre um plano mais atrativo do que você já tem, nos diga qual seu plano de saúde atual?</h1>

                <hr/>

                <div className='dropdown'>
                    <button onClick={()=>{setOpen(!open)}}>
                        Opções
                    </button>
                    {open ? (
                        <ul className="menu">
                            <li className="menu-item">
                                <button onClick={()=>{handleOperatorName('Omint'); setOpen(false)}}>Omint</button>
                            </li>
                            <li className="menu-item">
                                <button onClick={()=>{handleOperatorName('Sulamérica'); setOpen(false)}}>Sulamérica</button>
                            </li>
                            <li className="menu-item">
                                <button onClick={()=>{handleOperatorName('Bradesco Seguros'); setOpen(false)}}>Bradesco Seguros</button>
                            </li>
                            <li className="menu-item">
                                <button onClick={()=>{handleOperatorName('Unimed'); setOpen(false)}}>Unimed</button>
                            </li>
                            <li className="menu-item">
                                <button onClick={()=>{handleOperatorName('Notredame Intermédica'); setOpen(false)}}>Notredame Intermédica</button>
                            </li>
                            <li className="menu-item">
                                <button onClick={()=>{handleOperatorName('Hapvida'); setOpen(false)}}>Hapvida</button>
                            </li>
                            <li className="menu-item">
                                <button onClick={()=>{handleOperatorName(''); setOpen(false)}}>Outro</button>
                            </li>
                        
                        </ul>
                    ) : null}

                </div>

                <label>
                    Qual o nome da sua operadora?
                    <input
                        id='operatorName'
                        type="text"
                        autoFocus
                        value={state.operatorName}
                        onChange={(e)=>{e.target.classList.remove('required'); handleOperatorName(e.target.value);}}
                    />
                </label>

                
                <label>
                    Qual o valor da sua fatura hoje?
                    <input
                        id='operatorValue'
                        type="text"
                        autoFocus
                        value={state.operatorValue}
                        onChange={e => {e.target.classList.remove('required'); handleOperatorValue(e.target.value.replace(/\D/,''))}}
                    />
                </label>

                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}