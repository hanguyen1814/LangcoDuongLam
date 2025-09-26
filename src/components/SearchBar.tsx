import React, { useState, Component } from 'react';
import { useNavigate } from 'react-router-dom';
export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/tim-kiem?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };
  return <form onSubmit={handleSearch} className="relative">
      <div className={`flex items-center border rounded-full overflow-hidden ${isFocused ? 'border-amber-500 shadow-sm' : 'border-gray-300'}`}>
        <input type="text" placeholder="Tìm kiếm bài viết..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} className="px-4 py-1.5 outline-none w-full text-sm" />
        <button type="submit" className="bg-amber-700 text-white p-1.5 hover:bg-amber-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </form>;
};