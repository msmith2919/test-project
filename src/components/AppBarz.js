import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        How-To
                    </Typography>
                    <Button color="inherit"><Link style={{color: "white"}} to={"/"}>Home</Link></Button>
                </Toolbar>
            </AppBar>
            <h1>{"HOW TO CREATE AN EFFECTIVE INFOGRAPHIC"}</h1>
            <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mattis vulputate enim nulla aliquet porttitor. Lectus quam id leo in vitae turpis massa sed elementum. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Felis eget nunc lobortis mattis aliquam faucibus purus. Leo urna molestie at elementum eu facilisis. Nibh venenatis cras sed felis eget velit aliquet sagittis. Auctor augue mauris augue neque gravida. Feugiat in ante metus dictum at tempor commodo. Diam volutpat commodo sed egestas. Ac felis donec et odio pellentesque diam volutpat commodo sed.\n" +
            "\n" +
            "Elementum curabitur vitae nunc sed velit dignissim sodales ut. Dignissim enim sit amet venenatis urna cursus. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Habitant morbi tristique senectus et netus et malesuada fames ac. Laoreet sit amet cursus sit amet. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Volutpat odio facilisis mauris sit amet massa vitae. Non quam lacus suspendisse faucibus interdum posuere. Arcu dui vivamus arcu felis bibendum ut. Convallis aenean et tortor at. Diam in arcu cursus euismod. Dolor sit amet consectetur adipiscing elit duis tristique.\n" +
            "\n" +
            "Nulla aliquet enim tortor at. Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Nisl nunc mi ipsum faucibus vitae. Erat nam at lectus urna duis. Aenean pharetra magna ac placerat vestibulum. At in tellus integer feugiat scelerisque varius morbi enim nunc. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. In fermentum et sollicitudin ac. Mauris ultrices eros in cursus turpis. Massa ultricies mi quis hendrerit dolor magna eget est. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Dis parturient montes nascetur ridiculus mus mauris vitae. Lorem ipsum dolor sit amet consectetur.\n" +
            "\n" +
            "Risus feugiat in ante metus dictum at tempor commodo. Suspendisse in est ante in nibh mauris cursus mattis molestie. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Magna fringilla urna porttitor rhoncus dolor purus non. Massa vitae tortor condimentum lacinia quis. Nunc sed augue lacus viverra. Sed velit dignissim sodales ut eu sem integer vitae. Phasellus vestibulum lorem sed risus. Semper viverra nam libero justo. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Elit ullamcorper dignissim cras tincidunt lobortis. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Fames ac turpis egestas sed tempus urna et pharetra pharetra. Massa sed elementum tempus egestas sed sed.\n" +
            "\n" +
            "Sit amet consectetur adipiscing elit pellentesque habitant. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Sagittis vitae et leo duis ut diam. Ornare quam viverra orci sagittis eu volutpat. Cursus eget nunc scelerisque viverra mauris in. Nisi lacus sed viverra tellus. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Vulputate enim nulla aliquet porttitor lacus luctus. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Lorem ipsum dolor sit amet consectetur adipiscing elit. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Massa tincidunt nunc pulvinar sapien et. Condimentum lacinia quis vel eros donec ac odio tempor orci. Fames ac turpis egestas integer."}</p>
        </div>
    );
}