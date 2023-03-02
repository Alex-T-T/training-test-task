
import userLogo from './images/logo/Hansel.png' 
import './App.css';
import { CardList } from './components/CardList/CardList';

const users = [
        {
            "id": 1,
            "user": "Elon Reeve Musk",
            "tweets": 777,
            "followers": 100500,
            "avatar": userLogo,
        },
        {
            "id": 2,
            "user": "Tim Cook",
            "tweets": 888,
            "followers": 1000000,
            "avatar": userLogo,
        },
        {
            "id": 3,
            "user": "SomeBody",
            "tweets": 99,
            "followers": 47,
            "avatar": userLogo
        },
        {
            "id": 4,
            "user": "Boris Jonsonyk",
            "tweets": 999,
            "followers": 10100500,
            "avatar": userLogo
        },
        {
            "id": 5,
            "user": "Good Girl",
            "tweets": 100,
            "followers": 100,
            "avatar": userLogo
        }
    ]

function App() {


  return (
    <CardList list={users } />
  );
}

export default App;
