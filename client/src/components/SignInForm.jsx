import { Button, Stack, TextField, Typography, colors } from '@mui/material';
import React, { useState } from 'react'
import { ScreenMode } from '../pages/SigninPage';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const SignInForm = ( {onSwitchMode} ) =>  {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/login', { username, password });
            if (response.data.user)navigate('/welcome')

          } catch (error) {
            console.error('Error logging user in:', error);
          }
    }

    return (
       <Stack 
        justifyContent = "center"
        alignItems = "center"
        sx = {{
            height: "100%",
            width: "100%",
            maxWidth: "700px",
            color: colors.grey[800]
        }}>
            <Stack spacing= {5}>    
                <Stack>
                    <Typography variant='h4' fontWeight={600} color={colors.grey[800]}>
                        Welcome back!
                    </Typography>

                </Stack>
            </Stack>

            <Stack spacing={4}>
                <Stack spacing = {2}>
                    <Stack spacing = {1}>
                        <Typography color={colors.grey[800]}>Username</Typography>
                        <TextField value={username} type = 'text' onChange={(e) => setUsername(e.target.value)}/>
                    </Stack>

                    <Stack spacing = {1}>
                        <Typography color={colors.grey[800]}>Password</Typography>
                        <TextField value= {password} type = 'password' onChange={(e) => setPassword(e.target.value)}/>
                    </Stack>

                    <Button 
                        variant= "contained"
                        size = "large"
                        sx = {{
                            bgcolor: colors.grey[800],
                            "&:hover" : { bgcolor: colors.grey[600]}
                        }}

                        onClick={handleLogin}
                    >
                        Sign in
                    </Button>
                </Stack>

                <Stack direction = "row" spacing={2}>
                    <Typography>Don't have an account?</Typography>
                        
                    <Typography
                    onClick={() => onSwitchMode(ScreenMode.SIGN_UP)}    
                    fontWeight = {600}
                    sx = {{
                        cursor:"pointer",
                        userSelect: "none"
                    }}
                    >
                    Sign up now
                    </Typography>
                </Stack>
            </Stack>
       </Stack>
    );
};
export default SignInForm; 