import { Button, Stack, TextField, Typography, colors } from '@mui/material';
import React from 'react'
import { ScreenMode } from '../pages/SigninPage';

const SignUpForm = ( {onSwitchMode} ) =>  {
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
                        <Typography color={colors.grey[800]}>Name</Typography>
                        <TextField />
                    </Stack>

                    <Stack spacing = {1}>
                        <Typography color={colors.grey[800]}>Email</Typography>
                        <TextField />
                    </Stack>

                    <Stack spacing = {1}>
                        <Typography color={colors.grey[800]}>Password</Typography>
                        <TextField type = 'password' />
                    </Stack>

                    <Button 
                        variant= "contained"
                        size = "large"
                        sx = {{
                            bgcolor: colors.grey[800],
                            "&:hover" : { bgcolor: colors.grey[600]}
                        }}
                    >
                        Sign in
                    </Button>
                </Stack>

                <Stack direction = "row" spacing={2}>
                    <Typography>Already hve an account?</Typography>
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