import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { IModalAdmissionData } from '../admission.info';
import { Card, CardMedia, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface IProps {
    open: boolean;
    setOpen: any;
    modalData: IModalAdmissionData | null;
}

export default function ModalAdmission(props: IProps) {
    const { open, setOpen, modalData } = props;
    const handleClose = (event: React.MouseEvent<HTMLButtonElement>, reason: "backdropClick" | "escapeKeyDown") => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };

    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                onClose={handleClose}
                disableScrollLock
                scroll='paper'
                fullWidth
                maxWidth="md"
            >
                <DialogTitle variant='h5' textAlign="center" color="#0263B6">
                    {modalData?.title.toUpperCase()}
                </DialogTitle>
                <IconButton
                    edge="end"
                    color="inherit"
                    onClick={() => setOpen(false)}
                    aria-label="close"
                    sx={{
                        position: 'absolute',
                        right: 15,
                        top: 8,
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="image-modal-data"
                            height="auto"
                            image={modalData?.image}
                        /></Card>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} variant='outlined'>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}