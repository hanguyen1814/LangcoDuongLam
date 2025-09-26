import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SearchBar } from './SearchBar';
export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  return <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img src="https://placehold.co/100x50?text=Duong+Lam" alt="Logo Làng cổ Đường Lâm" className="h-10" />
          </Link>
          <h1 className="ml-3 text-xl font-bold text-amber-800">
            Làng cổ Đường Lâm
          </h1>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <div className="mr-4">
            <SearchBar />
          </div>
          <Link to="/" className={`hover:text-amber-700 transition-colors ${location.pathname === '/' ? 'text-amber-700 font-semibold' : ''}`}>
            Trang chủ
          </Link>
          <Link to="/dia-diem" className={`hover:text-amber-700 transition-colors ${location.pathname.includes('/dia-diem') ? 'text-amber-700 font-semibold' : ''}`}>
            Địa điểm
          </Link>
          <Link to="/am-thuc" className={`hover:text-amber-700 transition-colors ${location.pathname.includes('/am-thuc') ? 'text-amber-700 font-semibold' : ''}`}>
            Ăn uống
          </Link>
        </div>
        <button className="md:hidden flex items-center" onClick={toggleMobileMenu} aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Mobile Menu */}
        {mobileMenuOpen && <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-end">
            <div className="w-64 bg-white h-full shadow-lg p-5">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-amber-800">Menu</h2>
                <button onClick={closeMobileMenu} aria-label="Close menu">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mb-6">
                <SearchBar />
              </div>
              <div className="flex flex-col space-y-4">
                <Link to="/" className={`hover:text-amber-700 transition-colors py-2 border-b border-gray-100 ${location.pathname === '/' ? 'text-amber-700 font-semibold' : ''}`} onClick={closeMobileMenu}>
                  Trang chủ
                </Link>
                <Link to="/dia-diem" className={`hover:text-amber-700 transition-colors py-2 border-b border-gray-100 ${location.pathname.includes('/dia-diem') ? 'text-amber-700 font-semibold' : ''}`} onClick={closeMobileMenu}>
                  Địa điểm
                </Link>
                <Link to="/am-thuc" className={`hover:text-amber-700 transition-colors py-2 border-b border-gray-100 ${location.pathname.includes('/am-thuc') ? 'text-amber-700 font-semibold' : ''}`} onClick={closeMobileMenu}>
                  Ăn uống
                </Link>
              </div>
            </div>
          </div>}
      </nav>
    </header>;
};