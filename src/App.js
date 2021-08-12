
import './App.css';
import Address from './Components/Profile/Address';
import FullName from './Components/Profile/FullName';
import ProfilePhoto from './Components/Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
     <ProfilePhoto></ProfilePhoto>
     <FullName></FullName>
     <Address></Address>
    </div>
  );
}

export default App;
