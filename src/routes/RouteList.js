import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/user/auth/LoginPage';
import { Register } from '../pages/user/auth/Register';
import { ResetPassword } from '../pages/user/ResetPassword';
import { AdminLogin } from '../pages/admin/auth/AdminLogin';
import { KelasSaya } from '../pages/user/kelas/KelasSaya';
import { Otp } from '../pages/user/auth/Otp';
import { Error404 } from '../pages/errors/Error404';

export const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />

        {/* User */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/kelas-saya" element={<KelasSaya />} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Error */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};
