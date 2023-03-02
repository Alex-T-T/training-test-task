import { CardBtn, BtnText } from "./Button.styled"

export const Button = ({text, onClick, style }) => {
    return (
        <CardBtn type='button' variant="outlined" onClick={onClick} style={style}>
            <BtnText variant="button" display="block">{text}</BtnText>
        </CardBtn>
    )
}