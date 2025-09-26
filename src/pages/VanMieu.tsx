import React from 'react';
import { Link } from 'react-router-dom';
const VanMieu = () => {
  return <div className="w-full min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img src="https://placehold.co/100x50?text=Di+San" alt="Logo Di Sản Việt Nam" className="h-10" />
            </Link>
            <Link to="/" className="ml-3 text-xl font-bold text-amber-800">
              Di Sản Việt Nam
            </Link>
          </div>
          <Link to="/" className="flex items-center text-amber-700 hover:text-amber-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Quay lại trang chủ
          </Link>
        </nav>
      </header>
      {/* Hero Banner */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{
      backgroundImage: `url(https://placehold.co/1920x1080?text=Van+Mieu+Hero)`
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Văn Miếu - Quốc Tử Giám
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Di tích lịch sử văn hóa đặc biệt quốc gia
            </p>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-amber-800">
                Giới thiệu
              </h2>
              <p className="mb-4 text-lg">
                Văn Miếu - Quốc Tử Giám là quần thể di tích đa dạng, bao gồm Văn
                Miếu thờ Khổng Tử và các bậc hiền triết, và Quốc Tử Giám -
                trường đại học đầu tiên của Việt Nam, nơi đào tạo nhân tài cho
                đất nước. Công trình được xây dựng từ năm 1070 dưới triều vua Lý
                Thánh Tông.
              </p>
              <p className="mb-4 text-lg">
                Quốc Tử Giám là trường học dành cho con em hoàng tộc và các quan
                lại. Đến năm 1076, vua Lý Nhân Tông cho mở rộng trường và tuyển
                thêm cả những học trò xuất sắc trong dân gian. Đây là nơi đào
                tạo nhân tài cho đất nước trong suốt nhiều thế kỷ.
              </p>
              <p className="mb-4 text-lg">
                Năm 1484, vua Lê Thánh Tông cho dựng bia Tiến sĩ để ghi danh
                những người đỗ đạt cao trong các kỳ thi. Hiện nay, Văn Miếu -
                Quốc Tử Giám còn lưu giữ 82 bia đá khắc tên 1307 tiến sĩ của 82
                khoa thi từ năm 1442 đến 1779.
              </p>
            </div>
            {/* Image Gallery */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-amber-800">
                Hình ảnh
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src="https://placehold.co/600x400?text=Van+Mieu+1" alt="Cổng Văn Miếu" className="w-full h-auto transition-transform duration-300 hover:scale-105" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src="https://placehold.co/600x400?text=Van+Mieu+2" alt="Bia Tiến sĩ" className="w-full h-auto transition-transform duration-300 hover:scale-105" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src="https://placehold.co/600x400?text=Van+Mieu+3" alt="Hồ Văn" className="w-full h-auto transition-transform duration-300 hover:scale-105" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src="https://placehold.co/600x400?text=Van+Mieu+4" alt="Khuê Văn Các" className="w-full h-auto transition-transform duration-300 hover:scale-105" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src="https://placehold.co/600x400?text=Van+Mieu+5" alt="Sân Khải Thánh" className="w-full h-auto transition-transform duration-300 hover:scale-105" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src="https://placehold.co/600x400?text=Van+Mieu+6" alt="Điện Đại Thành" className="w-full h-auto transition-transform duration-300 hover:scale-105" />
                </div>
              </div>
            </div>
            {/* Architecture */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-amber-800">
                Kiến trúc
              </h2>
              <p className="mb-4 text-lg">
                Văn Miếu - Quốc Tử Giám được xây dựng theo kiến trúc truyền
                thống của Việt Nam, với nhiều công trình tiêu biểu như:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg">
                <li>
                  <strong>Cổng Văn Miếu</strong>: Cổng tam quan đầu tiên dẫn vào
                  khu di tích.
                </li>
                <li>
                  <strong>Khuê Văn Các</strong>: Biểu tượng của Hà Nội, được xây
                  dựng năm 1805.
                </li>
                <li>
                  <strong>Hồ Văn</strong>: Hồ nước nằm ngay sau cổng Văn Miếu.
                </li>
                <li>
                  <strong>Bia Tiến sĩ</strong>: 82 bia đá khắc tên các tiến sĩ
                  đỗ đạt qua các kỳ thi.
                </li>
                <li>
                  <strong>Điện Đại Thành</strong>: Nơi thờ Khổng Tử và 72 hiền
                  nhân.
                </li>
                <li>
                  <strong>Thái Học</strong>: Khu vực Quốc Tử Giám - trường đại
                  học đầu tiên của Việt Nam.
                </li>
              </ul>
              <p className="text-lg">
                Toàn bộ khu di tích được bố trí theo trục Nam-Bắc, với 5 khu vực
                chính được ngăn cách bởi các bức tường và cổng tam quan. Kiến
                trúc của Văn Miếu thể hiện sự hài hòa giữa con người với thiên
                nhiên, giữa không gian tâm linh với không gian học thuật.
              </p>
            </div>
            {/* Visitor Information */}
            <div className="mb-12 bg-amber-50 p-6 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-amber-800">
                Thông tin tham quan
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-amber-700">
                    Giờ mở cửa
                  </h3>
                  <p className="mb-4">
                    <span className="font-medium">Mùa hè (15/4 - 15/10)</span>:
                    7h30 - 18h00
                    <br />
                    <span className="font-medium">Mùa đông (16/10 - 14/4)</span>
                    : 8h00 - 17h30
                    <br />
                    <span className="font-medium">
                      Mở cửa tất cả các ngày trong tuần
                    </span>
                  </p>
                  <h3 className="text-xl font-bold mb-3 text-amber-700">
                    Giá vé
                  </h3>
                  <p>
                    <span className="font-medium">Người lớn</span>: 30.000 VNĐ
                    <br />
                    <span className="font-medium">Sinh viên</span>: 15.000 VNĐ
                    (có thẻ sinh viên)
                    <br />
                    <span className="font-medium">Trẻ em dưới 15 tuổi</span>:
                    Miễn phí
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-amber-700">
                    Địa chỉ
                  </h3>
                  <p className="mb-4">58 Quốc Tử Giám, Đống Đa, Hà Nội</p>
                  <h3 className="text-xl font-bold mb-3 text-amber-700">
                    Liên hệ
                  </h3>
                  <p>
                    <span className="font-medium">Điện thoại</span>:
                    024.3747.2566
                    <br />
                    <span className="font-medium">Email</span>:
                    vanmieu@gmail.com
                    <br />
                    <span className="font-medium">Website</span>: vanmieu.gov.vn
                  </p>
                </div>
              </div>
            </div>
            {/* Related Attractions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-amber-800">
                Các điểm tham quan lân cận
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://placehold.co/600x400?text=Ho+Guom" alt="Hồ Gươm" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-amber-800">
                      Hồ Hoàn Kiếm
                    </h3>
                    <p className="text-gray-700 mb-2">
                      Cách 1.5km - 5 phút đi xe
                    </p>
                    <p className="text-sm">
                      Hồ Hoàn Kiếm là biểu tượng của Hà Nội với Tháp Rùa nổi
                      tiếng và đền Ngọc Sơn.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://placehold.co/600x400?text=Lang+Bac" alt="Lăng Bác" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-amber-800">
                      Lăng Chủ tịch Hồ Chí Minh
                    </h3>
                    <p className="text-gray-700 mb-2">
                      Cách 3km - 10 phút đi xe
                    </p>
                    <p className="text-sm">
                      Công trình lưu niệm vĩ đại nơi an nghỉ của Chủ tịch Hồ Chí
                      Minh.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://placehold.co/600x400?text=Cho+Dong+Xuan" alt="Chợ Đồng Xuân" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-amber-800">
                      Chợ Đồng Xuân
                    </h3>
                    <p className="text-gray-700 mb-2">
                      Cách 2km - 8 phút đi xe
                    </p>
                    <p className="text-sm">
                      Khu chợ lớn nhất Hà Nội, nơi bán đủ loại hàng hóa từ quần
                      áo đến đồ lưu niệm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Back to top and Home buttons */}
            <div className="flex justify-between">
              <Link to="/" className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                Quay lại trang chủ
              </Link>
              <a href="#" className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-6 rounded-lg transition-colors" onClick={e => {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }}>
                Lên đầu trang
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>© 2025 Du lịch Văn Hóa. Tất cả các quyền được bảo lưu.</p>
            <Link to="/" className="text-amber-300 hover:text-white transition-colors mt-2 inline-block">
              Di Sản Việt Nam
            </Link>
          </div>
        </div>
      </footer>
    </div>;
};
export default VanMieu;