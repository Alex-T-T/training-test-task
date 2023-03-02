import { styled } from '@mui/material/styles';
import { Card, Box, Typography, CardMedia} from "@mui/material";
import '@fontsource/montserrat/600.css';
import background1 from '../../images/background/circle.svg';
import background2 from '../../images/background/line.svg'

export const UserCard = styled(Card) ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '28px 0px 36px 0px',
    width: '380px',
    background: 'linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    boxShadow: '-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)',
    borderRadius: '20px',
})

export const Logo = styled(CardMedia) ({
    position: 'absolute',
    top: '20px',
    left: '20px',
})

export const UserPropertiesList = styled(Box)({
    marginTop: '26px',
    marginBottom: '26px',
})

export const UserLogoBox = styled(Box)({
    width: '100%',
    height: '90px',
    backgroundImage: `url('${background1}'), url('${background2}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '90px, contain',
    position: 'relative',
})

export const UserLogo = styled(CardMedia) ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: "translate(-50%, -50%)",
})

export const UserProperties = styled(Typography) ({
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '24px',
    textTransform: 'uppercase',
    color: '#EBD8FF',

    ':not(:last-child)': {
        marginBottom: '16px',
    }
})