'use client'
import React, { ReactNode, useRef } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, DialogProps } from '@mui/material';
import { StaffHandle } from '../admin/admin-staff/create.staff';

interface ModalProps {
    buttonTitle: string;
    modalTitle: string;
    buttonIcon?: ReactNode;
    color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    variant: 'text' | 'outlined' | 'contained';
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ buttonTitle, modalTitle, buttonIcon, color, variant, children }) => {
    const [open, setOpen] = React.useState(false);
    const childRef = useRef<StaffHandle>(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };

    const handleSubmit = () => {
        if (childRef.current) {
            childRef.current.submitForm();
        }
    };

    return (
        <>
            <Button variant={variant} color={color} onClick={handleClickOpen} startIcon={buttonIcon} aria-hidden>
                {buttonTitle}
            </Button>
            <Dialog fullWidth open={open} onClose={handleClose} scroll={'paper'}>
                <DialogTitle>{modalTitle}</DialogTitle>
                <DialogContent dividers={true}>
                    {buttonTitle !== "Show" ?
                        React.cloneElement(children as React.ReactElement<any>, { ref: childRef, setOpen })
                        :
                        React.cloneElement(children as React.ReactElement<any>)
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    {buttonTitle !== "Show" ?
                        <Button onClick={handleSubmit}>Submit</Button>
                        :
                        ""
                    }
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Modal;
