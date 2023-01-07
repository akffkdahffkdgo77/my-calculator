import { useEffect } from 'react';

import { IToast } from 'components/Toast/types';

export default function Toast({ message, handleClose }: IToast) {
    useEffect(() => {
        const timerId = setTimeout(handleClose, 3000);
        return () => clearTimeout(timerId);
    }, [handleClose]);

    return message ? (
        <div className="fixed top-20 left-0 right-0 flex justify-center items-center">
            <div className="w-[320px] h-10 text-center leading-10 bg-red-500 font-bold text-white rounded-md">{message}</div>
        </div>
    ) : null;
}
