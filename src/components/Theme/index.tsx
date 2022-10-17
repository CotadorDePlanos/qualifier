import { ReactNode } from 'react';
import * as C from './styles';
import { Header } from '../Header';
import { SidebarItem } from '../SidebarItem';
import { useForm } from '../../contexts/FormContext';

type Props = {
    children: ReactNode;
}

export const Theme = ({ children }: Props) => {
    const { state } = useForm();

    return (
        <C.Container>
            <C.Area>
                <Header />

                <C.Steps>
                    <C.Sidebar>
                        
                        <SidebarItem
                            title="Cadastro Basico"
                            description=""
                            icon=""
                            path="/"
                            active={state.currentStep === 1}
                        />

                        <SidebarItem
                            title="Estado atual"
                            description=""
                            icon=""
                            path="/step2"
                            active={state.currentStep === 2 || state.currentStep === 3}
                        />

                        <SidebarItem
                            title="Tag"
                            description=""
                            icon=""
                            path="/step4"
                            active={state.currentStep === 4}
                        />

                        <SidebarItem
                            title="Prioridade"
                            description=""
                            icon=""
                            path="/step5"
                            active={state.currentStep === 5}
                        />

                        <SidebarItem
                            title="Modalidade"
                            description=""
                            icon=""
                            path="/step6"
                            active={state.currentStep === 6}
                        />

                        <SidebarItem
                            title="Pessoas"
                            description=""
                            icon=""
                            path="/step7"
                            active={state.currentStep === 7}
                        />

                        <SidebarItem
                            title="Previsao"
                            description=""
                            icon=""
                            path="/step8"
                            active={state.currentStep === 8}
                        />

                        <SidebarItem
                            title="Cep"
                            description=""
                            icon=""
                            path="/step9"
                            active={state.currentStep === 9}
                        />
                        
                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    );
}