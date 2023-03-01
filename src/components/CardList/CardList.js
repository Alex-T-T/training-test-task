import { Card } from "../Card/Card"

export const CardList = ({list}) => {

    return (
        list.map(({ id, user, tweets, followers, avatar }) => {
            return <Card key={id} user={ user} tweets={tweets} followers={followers} avatar={avatar} />
            })
        
    )
}