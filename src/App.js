import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css";
import Body from "./Body";
import Compose from "./Compose";
import { login, logout, selectUser } from "./Features/userSlice";
import { auth } from "./firebase";
import Header from "./Header";
import Loginscreen from "./Loginscreen";
import MailBody from "./MailBody";
import Sidebar from "./Sidebar";
function App() {
  const dispatch = useDispatch()
  const [isModal, setIsModal] = useState(false);
  const user = useSelector(selectUser)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        dispatch(login({
          displayName:user.displayName,
                photoUrl: user.photoURL,
                userEmail: user.email
        }))
      }else{
        dispatch(logout())
      }
    })
  },[])

  return (
    <Router>
    {user ? <div className="App">
      <Header />
      <div className="body_section">
        <Sidebar toggle={setIsModal} />
          <Routes>
            <Route exact path="/" element={<Body />} />
            <Route path="/mail" element={<MailBody />} />
          </Routes>
        {isModal && <Compose toggle={setIsModal} />}
      </div>
    </div> : <Loginscreen />}
    </Router>
  );
}

export default App;
