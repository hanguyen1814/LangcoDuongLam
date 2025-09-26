import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
const DiaDiem = () => {
  const locations = [{
    id: 'lang-mong-phu',
    name: 'Làng Mông Phụ',
    image: 'https://placehold.co/600x400?text=Mong+Phu',
    description: 'Làng cổ trung tâm của Đường Lâm với nhiều ngôi nhà cổ và cổng làng đặc trưng.'
  }, {
    id: 'den-phung-hung',
    name: 'Đền thờ Phùng Hưng',
    image: 'https://placehold.co/600x400?text=Den+Phung+Hung',
    description: 'Nơi thờ vị anh hùng dân tộc Phùng Hưng, người đã lãnh đạo cuộc khởi nghĩa chống quân đô hộ nhà Đường.'
  }, {
    id: 'den-ngo-quyen',
    name: 'Đền thờ Ngô Quyền',
    image: 'https://placehold.co/600x400?text=Den+Ngo+Quyen',
    description: 'Nơi thờ vị vua đầu tiên của nhà nước phong kiến độc lập Việt Nam sau chiến thắng Bạch Đằng.'
  }, {
    id: 'chua-mia',
    name: 'Chùa Mía',
    image: 'https://placehold.co/600x400?text=Chua+Mia',
    description: 'Ngôi chùa cổ với kiến trúc độc đáo và nhiều tượng phật cổ có giá trị nghệ thuật cao.'
  }, {
    id: 'nha-co',
    name: 'Nhà cổ Đường Lâm',
    image: 'https://placehold.co/600x400?text=Nha+Co',
    description: 'Những ngôi nhà cổ hàng trăm năm tuổi được xây dựng bằng đá ong đặc trưng của vùng đất Đường Lâm.'
  }, {
    id: 'gieng-co',
    name: 'Giếng làng cổ',
    image: 'https://placehold.co/600x400?text=Gieng+Co',
    description: 'Những giếng nước cổ là nơi sinh hoạt của người dân từ hàng trăm năm qua.'
  }, {
    id: 'cay-da',
    name: 'Cây đa làng',
    image: 'https://placehold.co/600x400?text=Cay+Da',
    description: 'Cây đa cổ thụ hàng trăm năm tuổi, là biểu tượng của làng quê Việt Nam.'
  }, {
    id: 'dinh-lang',
    name: 'Đình làng',
    image: 'https://placehold.co/600x400?text=Dinh+Lang',
    description: 'Đình làng là nơi diễn ra các hoạt động văn hóa, tín ngưỡng của người dân trong làng.'
  }];
  return <div className="w-full min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <Header/>
      {/* Banner */}
      <section className="relative h-[40vh] bg-cover bg-center" style={{
      backgroundImage: `url(https://placehold.co/1920x1080?text=Dia+Diem+Duong+Lam)`
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Địa Điểm Tham Quan
            </h1>
            <p className="text-lg md:text-xl text-white">
              Khám phá những điểm đến hấp dẫn tại làng cổ Đường Lâm
            </p>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map(location => <div key={location.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
                <img src={location.image} alt={location.name} className="w-full h-56 object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-amber-800">
                    {location.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{location.description}</p>
                  <Link to={`/dia-diem/${location.id}`} className="text-amber-700 font-medium hover:underline inline-flex items-center">
                    Xem chi tiết
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Làng cổ Đường Lâm</h3>
              <p className="mb-4">
                Khám phá, bảo tồn và phát huy giá trị văn hóa làng cổ Đường Lâm,
                góp phần giáo dục thế hệ trẻ về lịch sử và bản sắc dân tộc.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Liên Kết Nhanh</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-amber-300 transition-colors">
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link to="/dia-diem" className="text-amber-300 transition-colors">
                    Địa điểm
                  </Link>
                </li>
                <li>
                  <Link to="/am-thuc" className="hover:text-amber-300 transition-colors">
                    Ăn uống
                  </Link>
                </li>
                <li>
                  <Link to="/dat-lich" className="hover:text-amber-300 transition-colors">
                    Đặt lịch
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Kết Nối</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-amber-300 transition-colors transform hover:scale-110 duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-amber-300 transition-colors transform hover:scale-110 duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-800 pt-6 text-center">
            <p>© 2025 Làng cổ Đường Lâm. Tất cả các quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default DiaDiem;