'use client'
import { Alert, AlertColor, Snackbar } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface IProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    messageSnackbar: string;
    severity: AlertColor | undefined;
}

const SnackbarProvider = (props: IProps) => {

    const { open, messageSnackbar, severity, setOpen } = props;

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert
                onClose={handleClose}
                severity={severity}
                sx={{ width: '100%' }}
            >
                {messageSnackbar}
            </Alert>
        </Snackbar>
    )
}

export default SnackbarProvider;