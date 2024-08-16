'use client'
import { useToastContext } from "@/lib/toast.info.wrapper";
import { sendRequest } from "@/utils/api";
import { Button, Stack } from "@mui/material";
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
interface UpdateStaffProps {
    setOpen?: (open: boolean) => void;
    staffId: number | string;
}
const UpdateStaff = forwardRef<StaffHandle, UpdateStaffProps>((props: UpdateStaffProps, ref) => {
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
    const formRef = useRef<HTMLFormElement>(null);
    const { data: session } = useSession();
    const { setCurrentToast, setOpenToast } = useToastContext() as IToastContext;
    const route = useRouter();

    useImperativeHandle(ref, () => ({
        submitForm() {
            if (formRef.current) {
                formRef.current.requestSubmit(); // Thực hiện submit form
            }
        }
    }));

    useEffect(() => {
        fetchStaffData();
    }, [])

    const fetchStaffData = async () => {
        const res = await sendRequest<IBackendRes<IStaff>>({
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/staffs/${staffId}`,
            method: "GET",
        })
        if (res?.statusCode === 200) {
            reset(res.data);
        }
    }

    const onSubmit: SubmitHandler<IStaff> = async (data) => {
        const res = await sendRequest<IBackendRes<IStaff>>({
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/staffs`,
            method: "PUT",
            headers: {
                Authorization: `Bearer ${session?.access_token}`,
            },
            body: { ...data, id: staffId }
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
        reset();
    };


    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
        >
            <Stack spacing={2}>
                <TextFieldElement name={'email'} label={'Email'} control={control} required fullWidth />
                <TextFieldElement name={'name'} label={'Name'} control={control} required fullWidth />
                <SelectElement name={'gender'} label={'Gender'} control={control} options={genders} fullWidth />
                <TextFieldElement name={'birthDay'} label={'BirthDay'} control={control} required fullWidth />
                <TextFieldElement name={'born'} label={'Born'} control={control} required fullWidth />
                <TextFieldElement name={'address'} label={'Address'} control={control} required fullWidth />
                <SelectElement name={'position'} label={'Position'} control={control} options={positions} fullWidth />
                <SelectElement name={'office'} label={'Office'} control={control} options={offices} fullWidth />
                <SelectElement name={'civilServants'} label={'Civil Servants'} control={control} options={civilServants} fullWidth />
                <TextFieldElement name={'yearExp'} label={'Year Exp'} control={control} required fullWidth />
                <SelectElement name={'level'} label={'Level'} control={control} options={levels} fullWidth />
                <TextFieldElement name={'trainingProcess'} label={'Training Process'} control={control} required fullWidth />
                <TextFieldElement name={'workingProcess'} label={'Working Process'} control={control} required fullWidth />
            </Stack>
        </form>
    );
});

export default UpdateStaff;
