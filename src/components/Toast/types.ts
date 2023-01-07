export interface ITabProvider {
    children: React.ReactNode;
}

export interface IToastContext {
    handleOpen: (message: string) => void;
}

export interface IToast {
    message: string;
    handleClose: () => void;
}
