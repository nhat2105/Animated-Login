import React, { useState} from "react";
import { Box, Grid, colors } from "@mui/material";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";
import assets from "../assets";

export const ScreenMode = {
    SIGN_IN: 'SIGN_IN',
    SIGN_UP: 'SIGN_UP',
}

const SignInPage = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState("unset")
    const [width, setWidth] = useState(0)

    const [backgroundImage, setBackground] = useState(assets.images.signinBg)
    const [curMode, setCurMode] = useState(ScreenMode.SIGN_IN)
    
    const onSwitchMode = (mode) => {
        setWidth(100)

        const timeout1 = setTimeout(() => {
            setCurMode(mode)
            setBackground(mode === ScreenMode.SIGN_IN ? assets.images.signinBg : assets.images.signupBg)
        }, 1100);

        const timeout2 = setTimeout(() => {
            setLeft("unset")
            setRight(0)
            setWidth(0)
        }, 1200);

        const timeout3 = setTimeout(() => {
            setLeft(0)
            setRight("unset")
        }, 2500);

        return () => {
            clearTimeout(timeout1)
            clearTimeout(timeout2)
            clearTimeout(timeout3)
        }
        
    }

    return (
        <Grid container sx = {{ height: "100vh "}}>
            <Grid item xs ={4}  sx = {{ position: "relative", padding: 3}}>
                {
                    curMode === ScreenMode.SIGN_IN ? (
                        <SignInForm onSwitchMode={onSwitchMode}/>
                    ) : (
                        <SignUpForm onSwitchMode={onSwitchMode}/>
                    )
                }
                <Box sx ={{
                    position: "absolute",
                    top: 0,
                    left: left,
                    right: right,
                    width: `${width}%`,
                    height: "100%",
                    bgcolor: colors.grey[800],
                    transition: "all 1s ease-in-out"
                }} />
            </Grid>

            <Grid item xs ={8} sx = {{
                position: "relative",
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-reapeat",
            }}>
            
            <Box sx ={{
                position: "absolute",
                top: 0,
                left: left,
                right: right,
                width: `${width}%`,
                height: "100%",
                bgcolor: colors.common.white,
                transition: "all 1s ease-in-out"
            }} />
        
            </Grid>
        </Grid>
    )
}

export default SignInPage;