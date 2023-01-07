import React from 'react';

import { IToastContext } from 'components/Toast/types';

const ToastContext = React.createContext<IToastContext | undefined>(undefined);

export default ToastContext;
