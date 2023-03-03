
import users from './DB/users.json'
import { Card } from "./components/Card/Card"
import { Grid, Box} from "@mui/material"
import { useState } from 'react'


function App() {
    const [followed, setFollowed] = useState(JSON.parse(window.localStorage.getItem('followed')) || [])

    const onClick = (id) => {

        const copyFollowed = [...followed]
        if(copyFollowed.includes(id)) {
            const index = copyFollowed.indexOf(id)
            copyFollowed.splice(index, 1)
            setFollowed(copyFollowed)
            window.localStorage.setItem('followed', JSON.stringify(copyFollowed))            
            return
        }
        
        copyFollowed.push(id)
        setFollowed(copyFollowed)
        window.localStorage.setItem('followed', JSON.stringify(copyFollowed))
    }


    return (
        <Box sx={{ flexGrow: 1, padding: '15px', background: 'linear-gradient(to right, #3c1053, #ad5389)' }}>    
        <Grid container rowSpacing={4} columnSpacing={2} sx={{ padding: '15px' }}>
            {users.map(({ id, user, tweets, followers, avatar }) => {
            return <Card key={id} id={id} user={ user} tweets={tweets} followers={followers} avatar={avatar} onClick={onClick} followed={followed}/>
            })}
        </Grid>
    </Box>
    )

}

export default App;
