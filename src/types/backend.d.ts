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
        error?: string | string[];
        message: string;
        statusCode: number | string;
        data?: {
            meta: {
                current: number;
                pageSize: number;
                pages: number;
                total: number;
            },
            result: T[]
        }
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
