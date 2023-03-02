import { styled } from '@mui/material/styles';
import { Button, Typography } from "@mui/material";
import '@fontsource/montserrat/600.css';


export const CardBtn = styled(Button)({
    width: '176px',
    boxShadow: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)',
    borderRadius: '10.3108px',
    color: '#373737',
    '&:hover': {
        color: '#ffffff',
        background: 'linear-gradient(to right, #3c1053, #ad5389)',
    }
})

export const BtnText = styled(Typography)({
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '22px',
    textTransform: 'uppercase',

})