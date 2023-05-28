import React, {useEffect} from "react";
import {Box, Toolbar, AppBar, Stack, Typography,IconButton,Button} from "@mui/material"
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

function MuiAppBar(){

    return (
        <Box>
        <AppBar position={"relative"} >
            <Toolbar >

                <IconButton>
                    <LocationSearchingIcon/>
                </IconButton>
                <Typography  component={"div"}>
                    Miki and Eyuel Smart Engine Locking System
                </Typography>


                <Typography sx={{flexGrow:1}} >

                </Typography>

                <Stack direction={"row"} spacing={2}>
                    <Button color={"inherit"}>Profile</Button>
                    <Button color={"inherit"}>About</Button>
                    <Button color={"inherit"}>LogOut</Button>
                </Stack>
            </Toolbar>

        </AppBar>
        </Box>

    );

}

export default MuiAppBar;