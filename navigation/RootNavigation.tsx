import React from 'react';
import {Authenticated, NonAuthenticated} from './MainNavigation';
import { useAppSelector } from '../redux/typehooks';

const RootNavigation = () => {
  const user = useAppSelector(state => state.user);
  return user.isLoggedIn ? <Authenticated /> : <NonAuthenticated />;
};

export default RootNavigation;