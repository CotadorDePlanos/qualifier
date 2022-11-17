import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../../contexts/FormContext';
import { Theme } from '../../../components/Theme';
import { useEffect, useState } from 'react';
import { SendForm, GetQuotation, SendPhoneMessage } from '../../../api';


export const FormStep10 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();
    const [ quotation, setQuotation ] =   useState<any[]>([]);

    useEffect(() => {
        if(state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 10
            });
        }
    }, []);

    const handleNextStep = async() => {
        SendForm(state)
        const response = await requestQuotation()
        setQuotation( response.result)
        const msg = parsePhoneMessage(response.result)
        SendPhoneMessage(state.phone,msg)
        // history.push('/');   
    }

    const requestQuotation = async() => {
        const ageGroup = mountAgeGroup()
        const data = {
            city:state.city,
            type: state.modality,
            minPeople: 1,
            ageGroup: ageGroup
        } 
        const response = await GetQuotation(data)
        return response
    }

    const mountAgeGroup = () => {
        let arr = []

        if(state.p18 > 0) for(let i=1;i<=state.p18;i++) arr.push('18')       
        if(state.p23 > 0) for(let i=1;i<=state.p23;i++) arr.push('23')       
        if(state.p28 > 0) for(let i=1;i<=state.p28;i++) arr.push('28')       
        if(state.p33 > 0) for(let i=1;i<=state.p33;i++) arr.push('33')       
        if(state.p38 > 0) for(let i=1;i<=state.p38;i++) arr.push('38')       
        if(state.p43 > 0) for(let i=1;i<=state.p43;i++) arr.push('43')       
        if(state.p48 > 0) for(let i=1;i<=state.p48;i++) arr.push('48')       
        if(state.p53 > 0) for(let i=1;i<=state.p53;i++) arr.push('53')       
        if(state.p59 > 0) for(let i=1;i<=state.p59;i++) arr.push('59')       
        if(state.p59 > 0) for(let i=1;i<=state.p59;i++) arr.push('59')  
        return arr
    }

    const parsePhoneMessage = (plans:Array<any>) => {
        let text = state.name
        plans.forEach( (plan) => {
            let concat = plan.message
            concat = concat.replace('<name>',plan.name)
            concat = concat.replace('<operatorName>',plan.operator_name)
            concat = concat.replace('<city>',plan.city)
            concat = concat.replace('<state>',plan.state)
            concat = concat.replace('<minPeople>',plan.min_people)
            concat = concat.replace('<price>',plan.price)
            concat = concat.replace('<ageGroup>',plan.age_group)
            concat = concat.replace('<tag>',plan.tag)
            concat = concat.replace('<type>',plan.type)
            concat = concat.replace('<accommodation>',plan.accommodation) + '\n\n'
            text += concat
        })
        return text
    }

    const parseHasPlan = (hasPlan : string) => {
        var display: string;
        switch(hasPlan){
            case 'ALREADY':
                display = 'já tem plano de saúde'
                break;
            case 'BENEFITS':
                display = 'tem cartão de beneficios'
                break;
            case 'PARTICULAR':
                display = 'faz suas consultas e exames no particular'
                break;
            case 'DONT':
                display = 'não tem plano de saúde'
                break;
            default:
                display = ''
                break;
        }
        return display
    }

    const parseTag = (tag : string) => {
        var display: string;
        switch(tag){
            case 'PRICE':
                display = 'preco mais acessivel'
                break;
            case 'REGIONAL':
                display = 'atendimento na minha regiao'
                break;
            case 'NATIONAL':
                display = 'plano com atendimento nacional'
                break;
            default:
                display = ''
                break;
        }
        return display
    }

    const parsePriority = (priority : string) => {
        var display: string;
        switch(priority){
            case 'APPOINTMENT':
                display = 'agendamento'
                break;
            case 'EMERGENCY':
                display = 'emergencial'
                break;
            case 'SURGERY':
                display = 'sirurgia'
                break;
            case 'PREGNANCY':
                display = 'gravidez'
                break;
            default:
                display = ''
                break;
        }
        return display
    }
  
    const parseStart = (start : string) => {
        var display: string;
        switch(start){
            case 'NOW':
                display = 'imediatamente'
                break;
            case '3MONTHS':
                display = 'em 3 meses'
                break;
            case '6MONTHS':
                display = 'em 6 meses'
                break;
            default:
                display = ''
                break;
        }
        return display
    }

    const parseModality = (modality : string) => {
        var display: string;
        switch (modality) {
            case 'PF':
                display = 'Pessoa Fisica';
                break;
            case 'PJ':
                display = 'Pessoa Juridica';
                break;
            
            default:
                display =''
                break;
        }
        return display
    }

    return (
        <Theme>
            <C.Container>
                <h1>{state.name}, por favor confirme seus dados.</h1>
                <hr></hr>
                <p>Seu email é <b>{state.email}</b></p>
                <p>Seu telefone é <b>{state.phone}</b></p>
                <p>O plano que esta buscando é para <b>{parseModality(state.modality)}</b></p>

                <p>Voce atualmente <b>{parseHasPlan(state.hasPlan)}</b></p>
                {state.hasPlan === 'ALREADY' && 
                    <p>e esta utilizando o <b>{state.operatorName}</b> com o valor de R$<b>{state.operatorValue}</b></p>
                }
                <p>esta buscando no seu plano <b>{parseTag(state.tag)}</b></p>
                <p>a prioridade é <b>{parsePriority(state.priority)}</b></p>
                <p>Comecando <b>{parseStart(state.start)}</b></p>
                <p>o sua cidade é <b>{state.city}</b></p>
                <hr/>
                { quotation.map( (element,i) =>{
                    return (
                        <div key={i}>
                            <p>{element.operator} </p>
                            <p>{element.city} </p>
                            <p>{element.accommodation} </p>
                            <p>{element.age_group} </p>
                            <p>{element.min_people} </p>
                            <p>{element.name} </p>
                            <p>{element.price} </p>
                            <p>{element.state} </p>
                            <p>{element.tag} </p>
                            <p>{element.type} </p>
                        </div>
                    )
                })}

                <Link to="/step9" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Realizar cotação</button>

            </C.Container>
        </Theme>
    );
}