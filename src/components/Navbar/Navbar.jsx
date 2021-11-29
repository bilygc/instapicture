import React, { useState, useEffect } from 'react'
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core'
import logo from '../../images/instapicture.jpg';
import useStyles from './styles'
import  { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

const Navbar = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        const token = user?.token;
        if(token){
            const decoded = decode(token)

            if (decoded.exp * 1000 < new Date().getTime()) logOut()
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])

    const logOut = () =>{
        dispatch({type:'LOGOUT'})
        navigate('/')
        setUser(null)
    }
    
    return (
        <>
        <AppBar className={classes.appBar} position="static" color="inherit" >
            <div className={classes.brandContainer} >
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center" >InstaPicture</Typography>
                <img className={classes.image} src={logo} alt="memories" height="60" width="60" />
            </div>
            <Toolbar>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl} >{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6" >{user.result.name}</Typography>
                        <Button onClick={logOut} variant="contained" className={classes.logout} color="secondary">Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary" >Sign In</Button>
                )}
            </Toolbar>
        </AppBar>            
        </>
    )
}

export default Navbar
