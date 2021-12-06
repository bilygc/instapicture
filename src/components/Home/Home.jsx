import React, { useState, useEffect, useRef } from 'react'
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {getPosts } from '../../actions/posts'
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import useStyles from './styles';
import { useSearchParams } from 'react-router-dom';
import CustomizedSnackbars from '../Snackbar/Snackbar';


const Home = () => {
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()
    const classes = useStyles();
    let [searchParams, setSearchParams] = useSearchParams();
    const goingClean = useRef(null)
    
    
    var logInOut = searchParams.get('sign') !== null ? searchParams.get('sign') : searchParams.get('logout')
    var message = searchParams.get('message')        
    console.log("message:",message," loginout: ",logInOut)
    
    
    useEffect(() => {
        dispatch( getPosts() )
    }, [dispatch, currentId])

    const cleanUrl = () =>{
        if(goingClean) setTimeout(() =>{
            setSearchParams({})
        },7500);
    }
    
    useEffect(() => {
        goingClean.current = true;
        cleanUrl();

        return () => {
            goingClean.current = false;
        };
        
    },[]);
    

    return (
        <Grow in>
            <Container className={classes.noPadding}  >
                <CustomizedSnackbars severity="success" openS={logInOut} message={message} />
                <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3} >
                    <Grid item xs={12} sm={7} >
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home
