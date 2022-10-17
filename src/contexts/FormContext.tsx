// Context, Reducer, Provider, Hook
import { stat } from 'fs';
import { createContext, ReactNode, useContext, useReducer } from 'react';

type State = {
    currentStep: number;
    name: string;
    email: string;
    phone: string;
    modality: 'CPF' | 'CNPJ';
    hasPlan: 'ALREADY'| 'BENEFITS' | 'PARTICULAR' |'DONT';
    operatorName?: string;
    operatorValue?: string;
    tag: 'PRICE' | 'ATTENDANCE'| 'NATIONAL';
    priority: 'APPOINTMENT' | 'EMERGENCY' | 'SURGERY' | 'PREGNANCY';
    start: 'NOW' | '3MONTHS' | '6MONTHS';
    postal: string;
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
    modality: 'CPF',
    hasPlan: 'DONT',
    tag: 'PRICE',
    priority: 'APPOINTMENT',
    start: 'NOW', 
    postal: ''
}

// Context
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions {
    setCurrentStep,
    setName,
    setEmail,
    setPhone,
    setModality,
    setHasPlan,
    setOperatorName,
    setOperatorValue,
    setTag,
    setPriority,
    setStart,
    setPostal
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