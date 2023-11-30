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
import { Notifikasi } from '../pages/user/akun/Notifikasi';
import { PilihPremium } from '../pages/user/kelas/PilihPremium';
import { PilihGratis } from '../pages/user/kelas/PilihGratis';
import { PilihKelas } from '../pages/user/kelas/PilihKelas';
import { AkunProfile } from '../pages/user/akun/AkunProfile';
import { AkunPembayaran } from '../pages/user/akun/AkunPembayaran';
import { AkunPassword } from '../pages/user/akun/AkunPassword';

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

        {/* Kelas User */}
        <Route path="/kelas-saya" element={<KelasSaya />} />
        <Route path='/pilih-premium' element={<PilihPremium/>} />
        <Route path='/pilih-gratis' element={<PilihGratis/>} />
        <Route path='/pilih-kelas' element={<PilihKelas/>} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Data User */}
        <Route path="notifikasi" element={<Notifikasi />} />
        <Route path="akun-profile" element={<AkunProfile />} />
        <Route path="akun-password" element={<AkunPassword />} />
        <Route path="akun-pembayaran" element={<AkunPembayaran />} />

        {/* Error */}
        <Route path="*" element={<Error404 />} />        
      </Routes>
    </BrowserRouter>
  );
};
