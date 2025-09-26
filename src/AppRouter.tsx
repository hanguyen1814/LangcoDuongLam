import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import DiaDiem from './pages/DiaDiem';
import AmThuc from './pages/AmThuc';
import DatLich from './pages/DatLich';
import BanDo from './pages/BanDo';
import DiaDiemChiTiet from './pages/DiaDiemChiTiet';
import SearchResults from './pages/SearchResults';
export function AppRouter() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dia-diem" element={<DiaDiem />} />
        <Route path="/dia-diem/:id" element={<DiaDiemChiTiet />} />
        <Route path="/am-thuc" element={<AmThuc />} />
        <Route path="/dat-lich" element={<DatLich />} />
        <Route path="/ban-do" element={<BanDo />} />
        <Route path="/tim-kiem" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>;
}