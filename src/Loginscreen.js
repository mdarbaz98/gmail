import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from './Features/userSlice'
import { auth, provider } from './firebase'
import './Loginscreen.css'

function Loginscreen() {
    const dispatch = useDispatch()
    const isLogin = () => {
        auth.signInWithPopup(provider).then(({user}) => {
            dispatch(login({
                displayName:user.displayName,
                photoUrl: user.photoURL,
                userEmail: user.email
            }))
        }).catch((err) => {
            console.log(err)
        })
    }
  return (
    <div className='login_screen d-flex justify-content-center align-items-center'>
        <div className='inner_login_card d-flex justify-content-center align-items-center card shadow'>
            <img src='https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg' />
            <button onClick={isLogin} className='text-uppercase bg-primary text-white border-0 mt-4 py-3 px-5'>Login with gmail</button>
        </div>
    </div>
  )
}

export default Loginscreen