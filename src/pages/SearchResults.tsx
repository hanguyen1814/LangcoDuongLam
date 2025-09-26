import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
// Mock search data - in a real app, this would come from an API
const mockArticles = [{
  id: 'lang-mong-phu',
  title: 'Làng Mông Phụ',
  type: 'dia-diem',
  excerpt: 'Làng Mông Phụ là làng cổ trung tâm của Đường Lâm, nơi bảo tồn nhiều ngôi nhà cổ nhất với kiến trúc đặc trưng bằng đá ong.',
  image: 'https://placehold.co/600x400?text=Mong+Phu'
}, {
  id: 'den-phung-hung',
  title: 'Đền thờ Phùng Hưng',
  type: 'dia-diem',
  excerpt: 'Đền thờ Phùng Hưng là nơi tưởng nhớ vị anh hùng dân tộc đã lãnh đạo cuộc khởi nghĩa chống lại quân đô hộ nhà Đường.',
  image: 'https://placehold.co/600x400?text=Den+Phung+Hung'
}, {
  id: 'den-ngo-quyen',
  title: 'Đền thờ Ngô Quyền',
  type: 'dia-diem',
  excerpt: 'Đền thờ Ngô Quyền là nơi tưởng nhớ vị vua đầu tiên của nhà nước phong kiến độc lập Việt Nam sau chiến thắng Bạch Đằng.',
  image: 'https://placehold.co/600x400?text=Den+Ngo+Quyen'
}, {
  id: 'che-lam',
  title: 'Chè lam Đường Lâm',
  type: 'am-thuc',
  excerpt: 'Chè lam là đặc sản nổi tiếng của Đường Lâm, được làm từ bột nếp, gừng, mật mía và đậu phộng.',
  image: 'https://placehold.co/600x400?text=Che+Lam'
}, {
  id: 'tuong-ban',
  title: 'Tương bần',
  type: 'am-thuc',
  excerpt: 'Tương bần là loại tương đặc biệt được làm từ đậu tương lên men theo công thức truyền thống.',
  image: 'https://placehold.co/600x400?text=Tuong+Ban'
}];
const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [filters, setFilters] = useState({
    type: 'all'
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      const results = mockArticles.filter(article => {
        const matchesQuery = article.title.toLowerCase().includes(query.toLowerCase()) || article.excerpt.toLowerCase().includes(query.toLowerCase());
        const matchesType = filters.type === 'all' || article.type === filters.type;
        return matchesQuery && matchesType;
      });
      setSearchResults(results);
      setIsLoading(false);
    }, 500);
  }, [query, filters]);
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({
      ...filters,
      type: e.target.value
    });
  };
  return <div className="w-full min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-amber-800 mb-2">
              Kết quả tìm kiếm
            </h1>
            <p className="text-lg text-gray-600">
              {searchResults.length} kết quả cho từ khóa "{query}"
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="font-medium">Lọc kết quả:</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <label htmlFor="type-filter" className="mr-2">
                  Loại:
                </label>
                <select id="type-filter" value={filters.type} onChange={handleFilterChange} className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option value="all">Tất cả</option>
                  <option value="dia-diem">Địa điểm</option>
                  <option value="am-thuc">Ẩm thực</option>
                </select>
              </div>
            </div>
          </div>
          {isLoading ? <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-700"></div>
            </div> : searchResults.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {searchResults.map(result => <Link key={result.id} to={`/${result.type}/${result.id}`} className="flex bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="w-1/3">
                    <img src={result.image} alt={result.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-2/3 p-4">
                    <span className="inline-block px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full mb-2">
                      {result.type === 'dia-diem' ? 'Địa điểm' : 'Ẩm thực'}
                    </span>
                    <h2 className="text-xl font-bold mb-2 text-amber-800">
                      {result.title}
                    </h2>
                    <p className="text-gray-600 text-sm">{result.excerpt}</p>
                  </div>
                </Link>)}
            </div> : <div className="text-center py-20">
              <div className="text-5xl mb-4">😕</div>
              <h2 className="text-2xl font-bold mb-2">
                Không tìm thấy kết quả nào
              </h2>
              <p className="text-gray-600 mb-6">
                Không có kết quả nào phù hợp với từ khóa "{query}". Vui lòng thử
                lại với từ khóa khác.
              </p>
              <Link to="/" className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium">
                ← Quay lại trang chủ
              </Link>
            </div>}
        </div>
      </div>
      <footer className="bg-amber-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="border-t border-amber-800 pt-6 text-center">
            <p>© 2025 Làng cổ Đường Lâm. Tất cả các quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default SearchResults;