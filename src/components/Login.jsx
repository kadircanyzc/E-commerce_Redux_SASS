import React from 'react'
import { useDispatch } from 'react-redux';
import { loginActions } from '../store/login-slice';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import '../Styles/Login.css';
export default function () {
    const dispatch = useDispatch();
const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(loginActions.login())
}

  return (
    <div className="Login-css">
          <form onSubmit={handleSubmit} className="Login-form">
       <Card className='Login-card'>
      <CardContent className='Login-card_content'>
        <Typography variant="h3" component="div" >
          Login
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" className='Login-textfield'>
        <TextField id="id" label="Name" variant="standard"  type="text" name="id"  />
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" className='Login-textfield'>
        <TextField id="password" label="Password" variant="standard" type="password" name="password" />
        </Typography>
      </CardContent>
        <button className="login-btn" type="submit" size="small">Login</button>
    </Card>      
    </form>
  </div>
  )
}
