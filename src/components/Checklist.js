import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

export default function FormControlLabelPosition() {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Grocery Store List</FormLabel>
            <FormGroup aria-label="position" column>
                <FormControlLabel
                    value="start"
                    control={<Checkbox color="primary" />}
                    label="Apples"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="start"
                    control={<Checkbox color="primary" />}
                    label="Eggs"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="start"
                    control={<Checkbox color="primary" />}
                    label="Bread"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="start"
                    control={<Checkbox color="primary" />}
                    label="Butter"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="start"
                    control={<Checkbox color="primary" />}
                    label="Salad"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="start"
                    control={<Checkbox color="primary" />}
                    label="Avocodos"
                    labelPlacement="start"
                />
                <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                    label="Candy"
                />
            </FormGroup>
        </FormControl>
    );
}