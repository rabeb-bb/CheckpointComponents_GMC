
import './App.css';
import Address from './Components/Profile/Address';
import FullName from './Components/Profile/FullName';
import ProfilePhoto from './Components/Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
     <ProfilePhoto style={{border:"solid 2em gray"}}></ProfilePhoto>
     <FullName className="fName"></FullName>
     <Address></Address>
    </div>
  );
}

export default App;
