import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { useEffect } from 'react';
import { ReactComponent as Minus } from '../../svgs/minus.svg'
import { ReactComponent as Plus } from '../../svgs/plus.svg'

const ages : any[] =  [
    ['p18', 'set18', '0', '18'],
    ['p23', 'set23', '19', '23'],
    ['p28', 'set28', '24', '28'],
    ['p33', 'set33', '29', '33'],
    ['p38', 'set38', '34', '38'],
    ['p43', 'set43', '39', '43'],
    ['p48', 'set48', '44', '48'],
    ['p53', 'set53', '49', '53'],
    ['p58', 'set58', '54', '58'],
]

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
        if(
            state.p18 === 0 &&
            state.p23 === 0 &&
            state.p28 === 0 &&
            state.p33 === 0 &&
            state.p38 === 0 &&
            state.p43 === 0 &&
            state.p48 === 0 &&
            state.p53 === 0 &&
            state.p58 === 0 &&
            state.p59 === 0 
        ) {
            alert('Selecione pelo menos uma pessoa')
        } else {
            history.push('/step8');
        }
            
    }

    const handleClick = (type: 'MINUS' | 'PLUS',value:   'set18' | 'set23' | 'set28' | 'set33' | 'set38' | 'set43' | 'set48' | 'set53' | 'set58' | 'set59') => {
        console.log(state.p18)
        let current = 0
        switch(value){
            case 'set18':
                current = state.p18
                break
            case 'set23':
                current = state.p23
                break
            case 'set28':
                current = state.p28
                break
            case 'set33':
                current = state.p33
                break
            case 'set38':
                current = state.p38
                break
            case 'set43':
                current = state.p43
                break
            case 'set48':
                current = state.p48
                break
            case 'set53':
                current = state.p53
                break
            case 'set58':
                current = state.p58
                break
            case 'set59':
                current = state.p59
                break           
        }

        if(type === "PLUS"){
            current += 1 
        } else if(current !== 0) {
            current -= 1 

        }
        console.log(state.p18, current)
        dispatch({
            type: FormActions[value],
            payload: current
        });
    }


    return (
        <Theme>
            <C.Container>
                <h1>Por favor adicione o numero de pessoas por faixa etaria</h1>
                <hr/>
                
                <div style={{display:'block'}}>

                    <C.Row>
                        <h2>Faixa Etaria</h2>
                        <h2>Quantidade de Pessoas</h2>
                    </C.Row>

                    { ages.map( (element,i) => {
                        
                        let aux: 'p18' | 'p23' | 'p28' | 'p33' | 'p38' | 'p43' | 'p48' | 'p53' | 'p58' | 'p59' = element[0]
                        
                        return(
                            <C.Row key={i} >
                                <C.Left>
                                    <p>{element[2]} a {element[3]}</p>
                                </C.Left>

                                <C.Right  >
                                    <div  onClick={(event: React.MouseEvent<HTMLElement>) => handleClick('MINUS',element[1]) }>
                                        <C.IconArea><Minus/></C.IconArea>
                                    </div>
                                    <div style={{margin:'0px 30px'}}>

                                        <p>
                                            {state[aux]}
                                        </p>
                                    </div>
                                    <div onClick={(event: React.MouseEvent<HTMLElement>) => handleClick('PLUS',element[1]) }>
                                        <C.IconArea><Plus/></C.IconArea>
                                    </div>
                            </C.Right>
                            </C.Row>
                        )
                    })}
        
                    <C.Row key={-1}>
                        <C.Left>
                            <p>Acima de 59</p>
                        </C.Left>

                        <C.Right  >
                            <div  onClick={(event: React.MouseEvent<HTMLElement>) => handleClick('MINUS','set59') }>
                                <C.IconArea><Minus/></C.IconArea>
                            </div>
                            <div style={{margin:'0px 30px'}}>

                                <p>
                                    {state.p59}
                                </p>
                            </div>
                            <div onClick={(event: React.MouseEvent<HTMLElement>) => handleClick('PLUS','set59') }>
                                <C.IconArea><Plus/></C.IconArea>
                            </div>
                        </C.Right>
                    </C.Row>

                </div>
                <Link to="/step6" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}