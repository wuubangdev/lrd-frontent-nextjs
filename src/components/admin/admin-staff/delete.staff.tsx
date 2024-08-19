'use client'
import { useToastContext } from "@/lib/toast.info.wrapper";
import { sendRequest } from "@/utils/api";
import { Button, Stack, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SelectElement, TextFieldElement } from "react-hook-form-mui";


const genders = [
    { id: 'MALE', label: 'Male' },
    { id: 'FEMALE', label: 'Female' },
    { id: 'OTHER', label: 'Other' }
];
const positions = [
    { id: 'GIS-LAB', label: 'Gis Lab' },
    { id: 'PLAN', label: 'Planing' },
    { id: 'SOLD', label: 'Sold Science' }
];
const offices = [
    { id: 'GIS-RS', label: 'Gis & Remote Sensing' },
    { id: 'PLAN', label: 'Land Use Planing' },
    { id: 'SOLD', label: 'Sold Science' }
];
const civilServants = [
    { id: 'HEAD', label: 'Head of department' },
    { id: 'D-HEAD', label: 'Deputy Head' },
    { id: 'LECTURER', label: 'Lecturer' },
    { id: 'RESEARCHER', label: 'Researcher' }
];
const levels = [
    { id: 'PROFESSOR', label: 'Professor' },
    { id: 'ASSOC-PRO', label: 'Associate professor' },
    { id: 'DR', label: 'Dr' },
    { id: 'MASTER', label: 'Master' },
    { id: 'ENGINEER', label: 'Engineer' }
];

export interface StaffHandle {
    submitForm: () => void;
}
interface DeleteStaffProps {
    setOpen?: (open: boolean) => void;
    staffId: number | string;
}
const DeleteStaff = forwardRef<StaffHandle, DeleteStaffProps>((props: DeleteStaffProps, ref) => {
    const { setOpen, staffId } = props;
    const { control, handleSubmit, reset } = useForm<IStaff>({
        defaultValues: {
            email: '',
            name: '',
            gender: '',
            birthDay: '',
            born: '',
            address: '',
            position: '',
            office: '',
            civilServants: '',
            yearExp: '',
            level: '',
            trainingProcess: '',
            workingProcess: ''
        }
    });
    const { data: session } = useSession();
    const { setCurrentToast, setOpenToast } = useToastContext() as IToastContext;
    const route = useRouter();

    useImperativeHandle(ref, () => ({
        async submitForm() {
            const res = await sendRequest<IBackendRes<IStaff>>({
                url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/staffs/${staffId}`,
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${session?.access_token}`,
                },
            })
            if (res?.statusCode === 200) {
                setCurrentToast({
                    messageSnackbar: res.message,
                    severity: 'success'
                })
                setOpenToast(true);
                if (typeof setOpen === "function") {
                    setOpen(false);
                }
                route.refresh();
            } else {
                setCurrentToast({
                    messageSnackbar: res.message,
                    severity: 'error'
                })
                setOpenToast(true);
            }
        }
    }));


    return (
        <div style={{ display: "flex" }}>
            <Typography sx={{ color: "red" }}>Do you want to delete staff with id: </Typography> &nbsp;
            <b>{staffId}</b>
        </div>
    );
});

export default DeleteStaff;
