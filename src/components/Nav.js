import {Link} from 'react-router-dom';
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Main Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><Link to={"/checklist"}>Grocery Checklist</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to={"/comp"}>How to Make an Infographic</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to={"/appBarz"}>Infographic Details</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to={"/snack"}>Snack Bar</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to={"/subscribe"}>Newsletter Signup</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to={"/form"}>User Info Form</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to={"/CoolPerson"}>Cool Person</Link></MenuItem>
            </Menu>
        </div>
    );
}