import React from 'react';
import { Link } from 'react-router-dom';
const CoDoHue = () => {
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
      backgroundImage: `url(https://placehold.co/1920x1080?text=Co+Do+Hue+Hero)`
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Cố Đô Huế
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Di sản văn hóa thế giới được UNESCO công nhận
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
                Quần thể di tích Cố đô Huế là hệ thống các di tích lịch sử - văn
                hóa và kiến trúc nghệ thuật gắn liền với triều đại nhà Nguyễn
                (1802-1945). Quần thể này được UNESCO công nhận là Di sản Văn
                hóa Thế giới vào năm 1993.
              </p>
              <p className="mb-4 text-lg">
                Cố đô Huế nằm dọc hai bờ sông Hương thơ mộng, bao gồm Kinh thành
                Huế, các lăng tẩm vua chúa, đền chùa và các công trình kiến trúc
                khác. Đây là minh chứng cho sự kết hợp hài hòa giữa kiến trúc
                phương Đông và phương Tây, giữa các giá trị truyền thống và hiện
                đại.
              </p>
              <p className="mb-4 text-lg">
                Cố đô Huế không chỉ là di sản kiến trúc mà còn là nơi lưu giữ
                nhiều giá trị văn hóa phi vật thể như Nhã nhạc cung đình Huế
                (được UNESCO công nhận là Di sản Văn hóa Phi vật thể năm 2003),
                ẩm thực cung đình, nghề thủ công truyền thống...
              </p>
            </div>
            {/* Image Gallery */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-amber-800">
                Hình ảnh
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src="https://placehold.co/600x400?text=Hue+1" alt="Đại Nội Huế" className="w-full h-auto transition-transform duration-300 hover:scale-105" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src="https://placehold.co/600x400?text=Hue+2" alt="Lăng Tự Đức" className="w-full h-auto transition-transform duration-300 hover:scale-105" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src="https://placehold.co/600x400?text=Hue+3" alt="Chùa Thiên Mụ" className="w-full h-auto transition-transform duration-300 hover:scale-105" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src="https://placehold.co/600x400?text=Hue+4" alt="Cầu Trường Tiền" className="w-full h-auto transition-transform duration-300 hover:scale-105" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src="https://placehold.co/600x400?text=Hue+5" alt="Điện Thái Hòa" className="w-full h-auto transition-transform duration-300 hover:scale-105" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src="https://placehold.co/600x400?text=Hue+6" alt="Ngọ Môn" className="w-full h-auto transition-transform duration-300 hover:scale-105" />
                </div>
              </div>
            </div>
            {/* Main Attractions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-amber-800">
                Các công trình tiêu biểu
              </h2>
              <div className="space-y-6">
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-amber-700">
                    Kinh thành Huế
                  </h3>
                  <p className="mb-4 text-lg">
                    Kinh thành Huế là nơi đặt trung tâm chính trị của triều
                    Nguyễn. Công trình được xây dựng từ năm 1805 đến 1832, bao
                    gồm Hoàng thành và Tử cấm thành với hệ thống cung điện, đền
                    đài nguy nga.
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Ngọ Môn</strong>: Cổng chính vào Hoàng thành
                    </li>
                    <li>
                      <strong>Điện Thái Hòa</strong>: Nơi vua làm việc và tổ
                      chức các nghi lễ quan trọng
                    </li>
                    <li>
                      <strong>Tử Cấm Thành</strong>: Khu vực sinh hoạt riêng của
                      vua và hoàng gia
                    </li>
                    <li>
                      <strong>Thế Miếu</strong>: Nơi thờ các vua triều Nguyễn
                    </li>
                    <li>
                      <strong>Hiển Lâm Các</strong>: Thư viện hoàng gia
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-amber-700">
                    Các lăng tẩm
                  </h3>
                  <p className="mb-4 text-lg">
                    Các lăng tẩm của các vua triều Nguyễn là những công trình
                    kiến trúc độc đáo, kết hợp hài hòa giữa cảnh quan thiên
                    nhiên và nhân tạo.
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Lăng Gia Long</strong>: Lăng của vị vua đầu tiên
                      triều Nguyễn
                    </li>
                    <li>
                      <strong>Lăng Minh Mạng</strong>: Công trình đối xứng hoàn
                      hảo theo trục Bắc-Nam
                    </li>
                    <li>
                      <strong>Lăng Tự Đức</strong>: Quần thể kiến trúc kết hợp
                      với cảnh quan thơ mộng
                    </li>
                    <li>
                      <strong>Lăng Khải Định</strong>: Lăng mộ kết hợp kiến trúc
                      Đông-Tây
                    </li>
                    <li>
                      <strong>Lăng Thiệu Trị</strong>: Công trình thanh thoát,
                      đơn giản
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-amber-700">
                    Các công trình tôn giáo
                  </h3>
                  <p className="mb-4 text-lg">
                    Ngoài các công trình hoàng gia, Huế còn có nhiều đền chùa
                    nổi tiếng.
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Chùa Thiên Mụ</strong>: Biểu tượng của Huế với
                      tháp Phước Duyên 7 tầng
                    </li>
                    <li>
                      <strong>Điện Hòn Chén</strong>: Nơi thờ Thánh Mẫu Thiên Y
                      A Na
                    </li>
                    <li>
                      <strong>Văn Miếu Huế</strong>: Nơi thờ Khổng Tử và các bậc
                      hiền triết
                    </li>
                  </ul>
                </div>
              </div>
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
                    <span className="font-medium">Đại Nội</span>: 6h30 - 17h30
                    hàng ngày
                    <br />
                    <span className="font-medium">Các lăng tẩm</span>: 7h00 -
                    17h00 hàng ngày
                  </p>
                  <h3 className="text-xl font-bold mb-3 text-amber-700">
                    Giá vé
                  </h3>
                  <p>
                    <span className="font-medium">Vé tham quan Đại Nội</span>:
                    200.000 VNĐ
                    <br />
                    <span className="font-medium">
                      Vé tham quan mỗi lăng tẩm
                    </span>
                    : 100.000 VNĐ
                    <br />
                    <span className="font-medium">Vé tham quan trọn gói</span>:
                    420.000 VNĐ
                    <br />
                    <span className="font-medium">Sinh viên và trẻ em</span>:
                    Giảm 50%
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-amber-700">
                    Địa chỉ
                  </h3>
                  <p className="mb-4">
                    Trung tâm Bảo tồn Di tích Cố đô Huế
                    <br />
                    23 Tống Duy Tân, Thành phố Huế, Thừa Thiên Huế
                  </p>
                  <h3 className="text-xl font-bold mb-3 text-amber-700">
                    Liên hệ
                  </h3>
                  <p>
                    <span className="font-medium">Điện thoại</span>:
                    0234.3523237
                    <br />
                    <span className="font-medium">Email</span>:
                    huedisan@gmail.com
                    <br />
                    <span className="font-medium">Website</span>:
                    hueworldheritage.org.vn
                  </p>
                </div>
              </div>
            </div>
            {/* Cultural Events */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-amber-800">
                Sự kiện văn hóa
              </h2>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-amber-700">
                      Festival Huế
                    </h3>
                    <p className="mb-4">
                      Festival Huế là lễ hội văn hóa quốc tế được tổ chức 2 năm
                      một lần tại Huế. Đây là sự kiện văn hóa lớn nhất của Việt
                      Nam, với sự tham gia của nhiều quốc gia trên thế giới.
                    </p>
                    <p className="mb-4">
                      Festival Huế bao gồm nhiều hoạt động như biểu diễn nghệ
                      thuật, trình diễn áo dài, lễ hội đường phố, trưng bày nghệ
                      thuật, ẩm thực...
                    </p>
                    <p>
                      <strong>Thời gian tổ chức</strong>: Thường diễn ra vào
                      tháng 4 hoặc tháng 6 các năm chẵn.
                    </p>
                  </div>
                  <div>
                    <img src="https://placehold.co/600x400?text=Festival+Hue" alt="Festival Huế" className="w-full h-full object-cover" />
                  </div>
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
                  <img src="https://placehold.co/600x400?text=Phong+Nha" alt="Phong Nha - Kẻ Bàng" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-amber-800">
                      Phong Nha - Kẻ Bàng
                    </h3>
                    <p className="text-gray-700 mb-2">
                      Cách 200km - 4 giờ đi xe
                    </p>
                    <p className="text-sm">
                      Vườn quốc gia với hệ thống hang động kỳ vĩ, được UNESCO
                      công nhận là Di sản Thiên nhiên Thế giới.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://placehold.co/600x400?text=Da+Nang" alt="Đà Nẵng" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-amber-800">
                      Đà Nẵng
                    </h3>
                    <p className="text-gray-700 mb-2">
                      Cách 100km - 2 giờ đi xe
                    </p>
                    <p className="text-sm">
                      Thành phố hiện đại với bãi biển Mỹ Khê tuyệt đẹp, Bà Nà
                      Hills và cầu Vàng nổi tiếng.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://placehold.co/600x400?text=Hoi+An" alt="Hội An" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-amber-800">
                      Hội An
                    </h3>
                    <p className="text-gray-700 mb-2">
                      Cách 130km - 3 giờ đi xe
                    </p>
                    <p className="text-sm">
                      Phố cổ Hội An với kiến trúc độc đáo, là Di sản Văn hóa Thế
                      giới được UNESCO công nhận.
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
export default CoDoHue;