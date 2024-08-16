export { };
// https://bobbyhadz.com/blog/typescript-make-types-global#declare-global-types-in-typescript

declare global {

    interface IRequest {
        url: string;
        method: string;
        body?: { [key: string]: any };
        queryParams?: any;
        useCredentials?: boolean;
        headers?: any;
        nextOption?: any;
    }

    interface IBackendRes<T> {
        error?: string | string[];
        message: string;
        statusCode: number | string;
        data?: T;
    }

    interface IModelPaginate<T> {
        statusCode: number | string;
        error?: string | string[];
        message: string;
        data?: {
            page: number | string;
            size: number | string;
            totalPage: number | string;
            totalElement: number | string;
            result: T[];
        }
    }

    interface IPermission {
        id: number,
        name: string;
        apiPath: string;
        method: string;
        module: string;
        createdAt: string;
        updatedAt: string;
        createdBy: string;
        updatedBy: string;
    }

    interface IRole {
        id: number,
        name: string;
        description: string;
        active: false,
        permissions: IPermission[],
        createdAt: string;
        updatedAt: string;
        createdBy: string;
        updatedBy: string;
    }

    interface IStaff {
        id: number,
        email: string;
        password: string;
        name: string;
        gender: string;
        birthDay: string;
        born: string;
        address: string;
        position: string;
        office: string;
        civilServants: string;
        yearExp: number | string,
        level: string;
        trainingProcess: string;
        workingProcess: string;
        refreshToken: string;
        createdAt: string;
        updatedAt: string;
        createdBy: string;
        updatedBy: string;
    }

    interface IShareToast {
        messageSnackbar: string;
        severity: AlertColor | undefined;
    }

    interface IToastContext {
        currentToast: IShareToast;
        setCurrentToast: (v: IShareToast) => void;
        openToast: boolean;
        setOpenToast: Dispatch<SetStateAction<boolean>>;
    }

}
