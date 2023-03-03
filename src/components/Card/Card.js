import { Button } from "../Button/Button"
import logo from '../../images/logo/logo.svg';
import { UserProperties, UserPropertiesList, UserCard, UserLogoBox, UserLogo, Logo } from "./Card.styled";
import { CardActions, CardContent, CardMedia, Grid } from "@mui/material";
import backgroundPicture from '../../images/background/picture2 1.png'
import { useState, useEffect } from "react";

export const Card = ({ id, avatar, user, tweets, followers, onClick, followed}) => {
    const [isFollowing, setIsFollowing] = useState(false)
    const [count, setCount] = useState(followers)

useEffect(() => {
    followed.includes(id) && setIsFollowing(true) 
}, [ followed, id])

useEffect(() => {
    followed.includes(id) && setCount(followers + 1 )
}, [followed, followers, id])

useEffect(() => {
    !followed.includes(id) && setCount(followers)
}, [followed, followers, id])

useEffect(() => {
    !followed.includes(id) && setIsFollowing(false)
}, [followed, id])


    const handleClick = () => {
        console.log('click')
        // if (!followed.includes(id)) {
        //     // setCount(count + 1)
        //     // setIsFollowing(true)
        //     onClick(id)
        //     return
        // }
        // setCount(count - 1)
        // setIsFollowing(false)
        onClick(id)
    }

    const localFollowers = count.toLocaleString('en-EN')


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
                            sx={{ width: 75 }}
                            component="img"
                            alt="user logo"
                            image={avatar}
                        />
                    </UserLogoBox>

                    <CardContent sx={{padding: 0}}>
                        <UserPropertiesList>
                            <UserProperties>{user}</UserProperties>
                            <UserProperties>{tweets} Tweets</UserProperties>
                            <UserProperties>{localFollowers} Followers</UserProperties> 
                        </UserPropertiesList>
                    </CardContent>

                    <CardActions>
                        <Button onClick={handleClick} text={ !isFollowing ? 'Follow' : 'Following'}  style={{ backgroundColor: !isFollowing ? '#EBD8FF' : '#5CD3A8' }} />
                    </CardActions>

                </UserCard>
        </Grid>
    )
}