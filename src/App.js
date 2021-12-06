import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { Container } from '@material-ui/core';
import  {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dialog from './components/Dialog/Dialog'

const App = () => {
    
    const dialogTitle = "¡Hi!"
    const dialogContent = "im glad you got here, Please login and leave a post so i can know you were here, Thank You"
    const dialogButton = "¡Sure!"
    return (
        <Router>
            <Container maxWidth="lg" >
                <Navbar/>
                <Dialog dialogTitle={dialogTitle} dialogContent={dialogContent} dialogButton={dialogButton} />
                <Routes>
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/auth" exact element={<Auth/>} />
                </Routes>
            </Container>
        </Router>
    )
}

export default App
