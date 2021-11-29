import React, {useState } from 'react'
import { Container, Paper, Typography, Grid, Avatar, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Icon from './icon'
import { GoogleLogin } from 'react-google-login'
import useStyles from './styles'
import Input from './Input'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signin, signup } from '../../actions/auth';

const initialState = {firstName:'', lastName:'', email:'', password:'', confirmPassword:''}

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (isSignup) {
            dispatch(signup(formData, navigate))
        }else{
            dispatch(signin(formData, navigate))
        }
    }
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    const handleShowPassword = () => {
        setShowPassword( (prevShowPassword) => !prevShowPassword )
    }
    
    const switchMode = () => {
        setIsSignup( (previsSignUp) => !previsSignUp)
        setShowPassword(false)
    }

    const googleSuccess = async (res) =>{
        const result = res?.profileObj;
        const token =  res?.tokenId;
        
        try {
            dispatch({type:'AUTH', data:{result, token}})
            navigate('/')
        } catch (error) {
            console.log(error)            
        }
    }

    const googleFailure = (error) => {
        console.log(error)        
    }

    return (
        <Container component="main" maxWidth="xs" >
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h5" >{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit} >
                    <Grid container spacing={2} >
                        {
                            isSignup && (
                                <>
                                <Input name="firstName" label="firstName" handleChange={handleChange} autoFocus half/> 
                                <Input name="lastName" label="lastName" handleChange={handleChange}  half/> 
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name="confirmPassword" label="Repeat password" handleChange={handleChange} type="password" /> }
                    </Grid>
                    <Button type="submit" variant="contained" fullWidth color="primary" className={classes.submit} >
                        { isSignup ? "Sign Up" : "Sign In" }
                    </Button>
                    <GoogleLogin 
                        clientId="650799496817-9ks34ovpkntnjffalgadbpk4i353qvsa.apps.googleusercontent.com"
                        render={(renderProps) =>(
                            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon ={ <Icon/> } variant="contained"                            >
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justifyContent="flex-end" >
                        <Grid item  xs={12}>
                            <Button variant="contained" fullWidth color="secondary" onClick={switchMode} >Switch Mode</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
