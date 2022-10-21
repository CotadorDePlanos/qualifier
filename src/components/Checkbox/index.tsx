import * as C from './styles';
import { ReactComponent as CheckIcon } from '../../svgs/check.svg'

type Props = {
    title: string;
    checked: boolean;
    callback(value:boolean): void;
}

export const CheckBox = ({title, checked, callback}: Props) => {
    return (
        <C.CheckboxContainer 
            checked={checked}
            onClick={() =>{ callback(checked) }}
        >
            <C.HiddenCheckbox 
                onChange={() =>{ callback(checked) }}
                checked={checked}
            />
            <C.StyledCheckbox checked={checked}>
                <CheckIcon/>
            </C.StyledCheckbox>
            <C.Text checked={checked}>{title}</C.Text>
        </C.CheckboxContainer>
    );
}

