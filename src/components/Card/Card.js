import { Button } from "../Button/Button"
import logo from '../../images/logo/logo.svg';
import { UserProperties, UserPropertiesList, UserCard, UserLogoBox, UserLogo, Logo } from "./Card.styled";
import { CardActions, CardContent, CardMedia, Grid } from "@mui/material";
import backgroundPicture from '../../images/background/picture2 1.png'


export const Card = ({ avatar, user, tweets, followers}) => {
    return (
        <Grid item xs={4} sx={{display: 'flex', justifyContent: 'center'}}>
            <UserCard>
                    <Logo
                        sx={{ width: 76 }}
                        component="img"
                        alt="chat conversation"
                        image={logo}
                    />

                    <CardMedia
                        sx={{ width: 308 }}
                        component="img"
                        alt="chat conversation"
                        image={backgroundPicture}
                    />

                    <UserLogoBox>
                        <UserLogo
                            sx={{ width: 55 }}
                            component="img"
                            alt="user logo"
                            image={avatar}
                        />
                    </UserLogoBox>

                    <CardContent sx={{padding: 0}}>
                        <UserPropertiesList>
                            <UserProperties>{user}</UserProperties>
                            <UserProperties>{tweets} Tweets</UserProperties>
                            <UserProperties>{followers} Followers</UserProperties> 
                        </UserPropertiesList>
                    </CardContent>

                    <CardActions>
                        <Button text='Follow' />
                    </CardActions>

                </UserCard>
        </Grid>
    )
}