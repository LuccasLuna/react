import React from 'react';

import { Switch } from 'react-router-dom';
/*
import { toast } from 'react-toastify';

import { FaExclamationCircle, FaExclamationTriangle } from 'react-icons/fa';
*/
import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  /*
  toast.success('Olar', {
    toastId: 'customId',
  });
  toast.error('oi', {
    toastId: 'outroId',
    icon: FaExclamationCircle,
  });
  toast.warn('Lorem ipsum dolor', {
    icon: FaExclamationTriangle,
  });
*/
  return (
    <Switch>
      <MyRoute exact path='/' component={Login} />
      <MyRoute path='*' component={Page404} />
    </Switch>
  );
}
