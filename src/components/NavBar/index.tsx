import * as C from './styles';

type Props = {
    title: string;
    description: string;
    selected: boolean;
    onClick: () => void;
}

export const NavBar = ({title, description, selected, onClick}: Props) => {
    return (
        <C.Container onClick={onClick} selected={selected}>
          
        </C.Container>
    );
}