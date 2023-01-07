import { useMemo, useState } from 'react';

import { createPortal } from 'react-dom';

import { Toast, ToastContext } from 'components/Toast';
import { ITabProvider } from 'components/Toast/types';

export default function ToastProvider({ children }: ITabProvider) {
    const [message, setMessage] = useState('');

    const handleOpen = (message: string) => setMessage(message);

    const handleClose = () => setMessage('');

    const context = useMemo(() => ({ handleOpen }), []);

    return (
        <ToastContext.Provider value={context}>
            {children}
            {createPortal(<Toast message={message} handleClose={handleClose} />, document.body)}
        </ToastContext.Provider>
    );
}
