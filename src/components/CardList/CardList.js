import { Card } from "../Card/Card"
import { Grid, Box} from "@mui/material"

export const CardList = ({list}) => {

    return (
        <Box sx={{ flexGrow: 1, padding: '15px' }}>    
            <Grid container rowSpacing={4} columnSpacing={2} sx={{ padding: '15px' }}>
                {list.map(({ id, user, tweets, followers, avatar }) => {
                return <Card key={id} user={ user} tweets={tweets} followers={followers} avatar={avatar} />
                })}
            </Grid>
        </Box>
    )
}