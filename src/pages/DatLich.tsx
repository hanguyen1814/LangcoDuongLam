import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
const DatLich = () => {
  const [tourType, setTourType] = useState('standard');
  const [date, setDate] = useState('');
  const [people, setPeople] = useState(1);
  const handleSubmit = e => {
    e.preventDefault();
    // Here would be the logic to submit the booking
    alert('Đặt lịch thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.');
  };
  return <div className="w-full min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <Header />
      {/* Banner */}
      <section className="relative h-[40vh] bg-cover bg-center" style={{
      backgroundImage: `url(https://placehold.co/1920x1080?text=Dat+Lich+Tham+Quan)`
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Đặt Lịch Tham Quan
            </h1>
            <p className="text-lg md:text-xl text-white">
              Trải nghiệm trọn vẹn làng cổ Đường Lâm cùng hướng dẫn viên chuyên
              nghiệp
            </p>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-amber-800 mb-6">
                  Các Tour Tham Quan
                </h2>
                <div className="space-y-6">
                  <div className="bg-amber-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-amber-700">
                      Tour Tiêu Chuẩn
                    </h3>
                    <p className="mb-4">
                      Tham quan các điểm chính trong làng cổ Đường Lâm: Làng
                      Mông Phụ, đền thờ Phùng Hưng, đền thờ Ngô Quyền.
                    </p>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                      <li>Thời gian: 3-4 giờ</li>
                      <li>Bao gồm: Hướng dẫn viên, vé vào cổng</li>
                      <li>Giá: 200.000 VNĐ/người</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-amber-700">
                      Tour Trọn Gói
                    </h3>
                    <p className="mb-4">
                      Tham quan đầy đủ các điểm trong làng cổ Đường Lâm và trải
                      nghiệm văn hóa địa phương.
                    </p>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                      <li>Thời gian: 6-7 giờ</li>
                      <li>
                        Bao gồm: Hướng dẫn viên, vé vào cổng, bữa trưa truyền
                        thống, trải nghiệm làm chè lam
                      </li>
                      <li>Giá: 450.000 VNĐ/người</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-amber-700">
                      Tour Gia Đình
                    </h3>
                    <p className="mb-4">
                      Tour dành cho gia đình có trẻ em với các hoạt động phù hợp
                      với mọi lứa tuổi.
                    </p>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                      <li>Thời gian: 4-5 giờ</li>
                      <li>
                        Bao gồm: Hướng dẫn viên, vé vào cổng, hoạt động trải
                        nghiệm cho trẻ em
                      </li>
                      <li>Giá: 350.000 VNĐ/người lớn, 150.000 VNĐ/trẻ em</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-amber-800 mb-6">
                  Đặt Lịch Ngay
                </h2>
                <form className="bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                      Họ và tên
                    </label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" required />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                      Email
                    </label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" required />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                      Số điện thoại
                    </label>
                    <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" required />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="tour-type">
                      Loại tour
                    </label>
                    <select id="tour-type" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" value={tourType} onChange={e => setTourType(e.target.value)} required>
                      <option value="standard">Tour Tiêu Chuẩn</option>
                      <option value="full">Tour Trọn Gói</option>
                      <option value="family">Tour Gia Đình</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="date">
                      Ngày tham quan
                    </label>
                    <input type="date" id="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" value={date} onChange={e => setDate(e.target.value)} required />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="people">
                      Số người
                    </label>
                    <input type="number" id="people" min="1" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" value={people} onChange={e => setPeople(parseInt(e.target.value))} required />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="note">
                      Ghi chú (nếu có)
                    </label>
                    <textarea id="note" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                    Đặt lịch
                  </button>
                </form>
              </div>
            </div>
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-amber-800 mb-6">
                Chính sách đặt tour
              </h2>
              <div className="bg-amber-50 p-6 rounded-lg">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Vui lòng đặt lịch trước ít nhất 24 giờ để chúng tôi có thể
                    sắp xếp hướng dẫn viên.
                  </li>
                  <li>
                    Thanh toán: 50% khi đặt lịch, 50% còn lại khi bắt đầu tour.
                  </li>
                  <li>
                    Hủy lịch: Miễn phí nếu hủy trước 24 giờ, phí 50% nếu hủy
                    trong vòng 24 giờ.
                  </li>
                  <li>
                    Trẻ em dưới 5 tuổi: Miễn phí (không bao gồm các dịch vụ ăn
                    uống).
                  </li>
                  <li>Nhóm từ 10 người trở lên: Giảm 10% tổng hóa đơn.</li>
                  <li>
                    Thời gian bắt đầu tour: 8:00, 9:30, 13:00, 14:30 hàng ngày.
                  </li>
                </ul>
              </div>
            </div>
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
                  <Link to="/dia-diem" className="hover:text-amber-300 transition-colors">
                    Địa điểm
                  </Link>
                </li>
                <li>
                  <Link to="/am-thuc" className="hover:text-amber-300 transition-colors">
                    Ăn uống
                  </Link>
                </li>
                <li>
                  <Link to="/dat-lich" className="text-amber-300 transition-colors">
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
export default DatLich;