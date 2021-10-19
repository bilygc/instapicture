import React, { useEffect, useState } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {getPosts } from './actions/posts'
import logo from './images/instapicture.jpg';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {

    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()
    const classes = useStyles();

    useEffect(() => {
        dispatch( getPosts() )
    }, [dispatch, currentId])

    return (
        <Container maxWidth="lg" >
            <AppBar className={classes.appBar} position="static" color="inherit" >
                <Typography  className={classes.heading} variant="h2" align="center" >InstaPicture</Typography>
                <img className={classes.image} src={logo} alt="memories" height="60" width="60" />
            </AppBar>
            <Grow in>
                <Container className={classes.noPadding}  >
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
        </Container>
    )
}

export default App
