import React from 'react';
import logo from '../img/logox.png';
import {Logo} from './style';
import '../Header/Header.css';
// import {makeStyles} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import useBack from '../../hooks/useBack';

export default function Header() {
    return(
        <div>
            <AppBar position='static'>
                <Toolbar className="barra" variant='dense'>
                    <Typography variant='h6'>
                        <Logo src={logo} onClick={useBack('/')} />
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}