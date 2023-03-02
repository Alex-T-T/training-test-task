import { CardBtn, BtnText } from "./Button.styled"

export const Button = ({text}) => {
    return <CardBtn type='button' variant="outlined">
    <BtnText variant="button" display="block">{text}</BtnText>
    </CardBtn>
}