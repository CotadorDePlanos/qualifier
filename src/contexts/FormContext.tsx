// Context, Reducer, Provider, Hook
import { createContext, ReactNode, useContext, useReducer } from 'react';

type State = {
    currentStep: number;
    name: string;
    email: string;
    phone: string;
    message: boolean;
    modality: 'CPF' | 'CNPJ';
    hasPlan: 'ALREADY'| 'BENEFITS' | 'PARTICULAR' |'DONT';
    operatorName?: string;
    operatorValue?: string;
    tag: 'PRICE' | 'ATTENDANCE'| 'NATIONAL';
    priority: 'APPOINTMENT' | 'EMERGENCY' | 'SURGERY' | 'PREGNANCY';
    start: 'NOW' | '3MONTHS' | '6MONTHS';
    postal: string;
    p18:number;
    p23:number;
    p28:number;
    p33:number;
    p38:number;
    p43:number;
    p48:number;
    p53:number;
    p58:number;
    p59:number;

}
type Action = {
    type: FormActions;
    payload: any;
};
type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}
type FormProviderProps = {
    children: ReactNode
};

const initialData: State = {
    currentStep: 0,
    name: '',
    email: '',
    phone: '',
    message: false,
    modality: 'CPF',
    hasPlan: 'DONT',
    tag: 'PRICE',
    priority: 'APPOINTMENT',
    start: 'NOW', 
    postal: '',
    p18:0,
    p23:0,
    p28:0,
    p33:0,
    p38:0,
    p43:0,
    p48:0,
    p53:0,
    p58:0,
    p59:0,
}

// Context
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions {
    setCurrentStep,
    setName,
    setEmail,
    setPhone,
    setMessage,
    setModality,
    setHasPlan,
    setOperatorName,
    setOperatorValue,
    setTag,
    setPriority,
    setStart,
    setPostal,
    set18,
    set23,
    set28,
    set33,
    set38,
    set43,
    set48,
    set53,
    set58,
    set59,

}
const formReducer = (state: State, action: Action) => {
    switch(action.type) {
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload};
        case FormActions.setName:
            return {...state, name: action.payload};
        case FormActions.setEmail:
            return {...state, email: action.payload};
        case FormActions.setPhone:
            return {...state, phone: action.payload};
        case FormActions.setMessage:
            return {...state, message: action.payload};
        case FormActions.setModality:
            return {...state, modality: action.payload};
        case FormActions.setHasPlan:
            return {...state, hasPlan: action.payload};
        case FormActions.setOperatorName:
            return {...state, operatorName: action.payload};
        case FormActions.setOperatorValue:
            return {...state, operatorValue: action.payload};
        case FormActions.setTag:
            return {...state, tag:  action.payload};
        case FormActions.setPriority:
            return {...state, priority: action.payload};
        case FormActions.setStart:
            return {...state, start: action.payload};
        case FormActions.setPostal:
            return {...state, postal: action.payload};
        case FormActions.set18:
            return {...state, p18: action.payload};
        case FormActions.set23:
            return {...state, p23: action.payload};
        case FormActions.set28:
            return {...state, p28: action.payload};
        case FormActions.set33:
            return {...state, p33: action.payload};
        case FormActions.set38:
            return {...state, p38: action.payload};
        case FormActions.set43:
            return {...state, p43: action.payload};
        case FormActions.set48:
            return {...state, p48: action.payload};
        case FormActions.set53:
            return {...state, p53: action.payload};
        case FormActions.set58:
            return {...state, p58: action.payload};
        case FormActions.set59:
            return {...state, p59: action.payload};
        default:
            return state;
    }
}

// Provider
export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch };
    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}

// Context Hook
export const useForm = () => {
    const context = useContext(FormContext);
    if(context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider');
    }
    return context;
}