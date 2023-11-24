import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { Register } from '../pages/Register'
import { ResetPassword } from '../pages/ResetPassword'
import { KelasSaya } from '../pages/KelasSaya'

export const RouteList = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/Login' element={<LoginPage/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/ResetPassword' element={<ResetPassword/>}/>
            <Route path='/KelasSaya' element={<KelasSaya/>}/>
        </Routes>
    </BrowserRouter>
  )
}
