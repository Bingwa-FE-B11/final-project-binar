import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/user/auth/LoginPage';
import { Register } from '../pages/user/auth/Register';
import { UpdatePass } from '../pages/user/auth/UpdatePass';
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
import { DetailKelas } from '../pages/user/kelas/DetailKelas';
import { AdminDashboard } from '../pages/admin/AdminDashboard';
import { AdminKelolaKelas } from '../pages/admin/auth/AdminKelolaKelas';
import { Pembayaran } from '../pages/user/kelas/Pembayaran';
import { PembayaranSukses } from '../pages/user/kelas/PembayaranSukses';
import { ForgetPass } from '../pages/user/auth/ForgetPass';

export const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />

        {/* User */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/update-password" element={<UpdatePass />} />
        <Route path="/forget-password" element={<ForgetPass />} />
        <Route path="/otp" element={<Otp />} />

        {/* Kelas User */}
        <Route path="/kelas-saya" element={<KelasSaya />} />
        <Route path="/pilih-premium" element={<PilihPremium />} />
        <Route path="/pilih-gratis" element={<PilihGratis />} />
        <Route path="/pilih-kelas" element={<PilihKelas />} />
        <Route path="/detail-kelas" element={<DetailKelas />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
        <Route path="/pembayaran-sukses" element={<PembayaranSukses />} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/kelola-kelas" element={<AdminKelolaKelas />} />

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
