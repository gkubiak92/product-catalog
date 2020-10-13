import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    langSelector: {
        '& .MuiSelect-select': {
            paddingTop: 10,
            paddingBottom: 10,
        }
    }
}));