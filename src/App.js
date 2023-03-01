import logo from './images/logo/logo.svg';
import userLogo from './images/logo/Hansel.png' 
import './App.css';

// const users = 

function App() {



  return (
    <div className="App">
      <div className='card'>
          <img className='logo' src={logo} alt="logo" width={76} />
        <img className='user-logo' src={userLogo} alt="user logo" width={62} height={62} />
        <div className='content'>
          <p className='user-properties'>userName</p>
          <p className='user-properties'>Tweets</p>
          <p className='user-properties'>Followers</p> 
        </div>
        <button className='btn' type='button'>Follow</button>
      </div>
    </div>
  );
}

export default App;
