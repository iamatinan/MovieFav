import { useState } from 'react';

// ----------------------------------------------------------------------
const user = JSON.parse(localStorage.getItem('user'));
const account = {
  displayName: user?.email,
  email: 'demo@minimals.cc',
  photoURL: '/assets/images/avatars/avatar_default.jpg',
};

export default account;
