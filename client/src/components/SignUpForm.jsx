import { Button, Stack, TextField, Typography, colors } from '@mui/material';
import React, {useState} from 'react'
import { ScreenMode } from '../pages/SigninPage';
import axios from 'axios'

const SignUpForm = ( {onSwitchMode} ) =>  {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:3001/register', { username, password });
          } catch (error) {
            console.error('Error registering user:', error);
          }

        onSwitchMode(ScreenMode.SIGN_IN)
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
                        Create an account
                    </Typography>

                </Stack>
            </Stack>

            <Stack spacing={4}>
                <Stack spacing = {2}>
                    <Stack spacing = {1}>
                        <Typography color={colors.grey[800]}>Username</Typography>
                        <TextField value = {username} type = 'text' onChange={(e) => setUsername(e.target.value)}/>
                    </Stack>

                    <Stack spacing = {1}>
                        <Typography color={colors.grey[800]}>Password</Typography>
                        <TextField value = {password} type = 'password' onChange={(e) => setPassword(e.target.value)} />
                    </Stack>

                    <Button 
                        variant= "contained"
                        size = "large"
                        sx = {{
                            bgcolor: colors.grey[800],
                            "&:hover" : { bgcolor: colors.grey[600]}
                        }}

                        onClick={handleRegister}
                    >
                        Sign up
                    </Button>
                </Stack>

                <Stack direction = "row" spacing={2}>
                    <Typography>Already have an account?</Typography>
                    <Typography
                    onClick={() => onSwitchMode(ScreenMode.SIGN_IN)}    
                    fontWeight = {600}
                    sx = {{
                        cursor:"pointer",
                        userSelect: "none"
                    }}
                    >
                    Sign in
                    </Typography>
                </Stack>
            </Stack>
       </Stack>
    );
};
export default SignUpForm; 