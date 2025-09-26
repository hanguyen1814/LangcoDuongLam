import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './components/Header';
import { ImageCarousel } from './components/ImageCarousel';
export function App() {
  // Images for the image carousel
  const tourSpotImages = [{
    src: 'https://placehold.co/600x400?text=Mong+Phu',
    alt: 'Làng Mông Phụ',
    link: '/dia-diem/lang-mong-phu'
  }, {
    src: 'https://placehold.co/600x400?text=Den+Phung+Hung',
    alt: 'Đền thờ Phùng Hưng',
    link: '/dia-diem/den-phung-hung'
  }, {
    src: 'https://placehold.co/600x400?text=Den+Ngo+Quyen',
    alt: 'Đền thờ Ngô Quyền',
    link: '/dia-diem/den-ngo-quyen'
  }, {
    src: 'https://placehold.co/600x400?text=Duong+Lam+4',
    alt: 'Cổng làng cổ',
    link: '/dia-diem/cong-lang'
  }, {
    src: 'https://placehold.co/600x400?text=Duong+Lam+5',
    alt: 'Nhà cổ Đường Lâm',
    link: '/dia-diem/nha-co'
  }];
  const galleryImages = [{
    src: 'https://placehold.co/300x200?text=Duong+Lam+1',
    alt: 'Cổng làng Mông Phụ'
  }, {
    src: 'https://placehold.co/300x200?text=Duong+Lam+2',
    alt: 'Nhà cổ Đường Lâm'
  }, {
    src: 'https://placehold.co/300x200?text=Duong+Lam+3',
    alt: 'Đền thờ Phùng Hưng'
  }, {
    src: 'https://placehold.co/300x200?text=Duong+Lam+4',
    alt: 'Đền thờ Ngô Quyền'
  }, {
    src: 'https://placehold.co/300x200?text=Duong+Lam+5',
    alt: 'Giếng làng cổ'
  }, {
    src: 'https://placehold.co/300x200?text=Duong+Lam+6',
    alt: 'Đường làng cổ'
  }, {
    src: 'https://placehold.co/300x200?text=Duong+Lam+7',
    alt: 'Món ăn truyền thống'
  }, {
    src: 'https://placehold.co/300x200?text=Duong+Lam+8',
    alt: 'Nghề truyền thống'
  }];
  return <div className="w-full min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <Header />
      {/* Hero Banner */}
      <section id="home" className="relative h-[80vh] bg-cover bg-center" style={{
      backgroundImage: `url(https://placehold.co/1920x1080?text=Duong+Lam+Ancient+Village)`
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Làng cổ Đường Lâm
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Hành trình khám phá nét đẹp làng quê Việt Nam
            </p>
            <Link to="/dia-diem" className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-6 rounded-full transition-colors transform hover:scale-105 duration-200">
              Khám phá ngay
            </Link>
          </div>
        </div>
      </section>
      {/* Introduction */}
      <section id="about" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-800">
            Giới Thiệu
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4 text-lg">
                Làng cổ Đường Lâm là một trong những làng cổ nguyên vẹn nhất của
                Việt Nam, nằm cách trung tâm Hà Nội khoảng 45km về phía Tây.
                Được công nhận là Di tích Quốc gia đặc biệt vào năm 2006, Đường
                Lâm mang đậm dấu ấn của một ngôi làng truyền thống Bắc Bộ với
                kiến trúc nhà cổ bằng đá ong đặc trưng.
              </p>
              <p className="mb-4 text-lg">
                Đường Lâm là quê hương của hai vị vua nổi tiếng trong lịch sử
                Việt Nam: Phùng Hưng và Ngô Quyền. Ngôi làng có lịch sử hơn
                1.200 năm tuổi với những ngôi nhà cổ, cổng làng, giếng nước, sân
                đình và nhiều di tích lịch sử văn hóa quan trọng khác.
              </p>
              <p className="mb-4 text-lg">
                Đến với Đường Lâm, du khách sẽ được trải nghiệm không gian sống
                của làng quê Bắc Bộ xưa, thưởng thức ẩm thực truyền thống và tìm
                hiểu về lối sống, phong tục tập quán của người dân nơi đây.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://placehold.co/600x400?text=Duong+Lam+1" alt="Cổng làng Đường Lâm" className="rounded-lg shadow-lg w-full h-auto object-cover" loading="lazy" />
              <img src="https://placehold.co/600x400?text=Duong+Lam+2" alt="Nhà cổ Đường Lâm" className="rounded-lg shadow-lg w-full h-auto object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
      {/* Tourist Spots */}
      <section id="tour" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-800">
            Điểm Tham Quan
          </h2>
          <ImageCarousel images={tourSpotImages} title="Các địa điểm nổi bật" />
          <div className="mt-10 text-center">
            <Link to="/dia-diem" className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-6 rounded-lg transition-colors inline-flex items-center">
              Xem tất cả địa điểm
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      {/* Media Section */}
      <section id="media" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-800">
            Hình Ảnh & Video
          </h2>
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Video Giới Thiệu
            </h3>
            <div className="max-w-3xl mx-auto">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <video controls poster="https://placehold.co/1280x720?text=Video+Duong+Lam" className="w-full h-full object-cover">
                  <source src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" type="video/mp4" />
                  Trình duyệt của bạn không hỗ trợ thẻ video.
                </video>
              </div>
              <p className="text-center mt-4 text-gray-600">
                Khám phá vẻ đẹp làng cổ Đường Lâm qua góc nhìn du lịch
              </p>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Bộ Sưu Tập Ảnh
            </h3>
            <ImageCarousel images={galleryImages} />
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section id="map" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-800">
            Bản Đồ
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14892.36234419997!2d105.70087657746147!3d21.084149494251082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134f8ce2d2f4991%3A0x9d0d70d340f0e8c4!2zTMOgbmcgY-G7lSDEkMaw4budbmcgTMOibQ!5e0!3m2!1svi!2s!4v1720000000000!5m2!1svi!2s" width="100%" height="450" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Bản đồ làng cổ Đường Lâm"></iframe>
            </div>
            <p className="text-center mt-4 text-gray-600">
              Làng cổ Đường Lâm nằm cách trung tâm Hà Nội khoảng 45km về phía
              Tây
            </p>
            <div className="mt-6 text-center">
              <Link to="/ban-do" className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-6 rounded-lg transition-colors inline-flex items-center">
                Chỉ đường từ vị trí của bạn
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-800">
            Liên Hệ
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Thông Tin Liên Hệ</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-700 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium">Địa chỉ:</p>
                    <p>Xã Đường Lâm, Thị xã Sơn Tây, Hà Nội</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-700 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium">Email:</p>
                    <p>info@langcoduonglam.vn</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-700 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-medium">Điện thoại:</p>
                    <p>0243.3838.xxx</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-700 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium">Giờ mở cửa:</p>
                    <p>08:00 - 17:00 (Thứ 2 - Chủ Nhật)</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Gửi Thông Tin</h3>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">
                    Họ và tên
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" placeholder="Nhập họ và tên" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" placeholder="Nhập email" required />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">
                    Nội dung
                  </label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" placeholder="Nhập nội dung liên hệ" required></textarea>
                </div>
                <button type="submit" className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-6 rounded-lg transition-colors transform hover:scale-105 duration-200">
                  Gửi thông tin
                </button>
              </form>
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
                  <Link to="/dat-lich" className="hover:text-amber-300 transition-colors">
                    Đặt lịch
                  </Link>
                </li>
                <li>
                  <a href="#media" className="hover:text-amber-300 transition-colors">
                    Hình ảnh & Video
                  </a>
                </li>
                <li>
                  <a href="#map" className="hover:text-amber-300 transition-colors">
                    Bản đồ
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-amber-300 transition-colors">
                    Liên hệ
                  </a>
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
                <a href="#" className="hover:text-amber-300 transition-colors transform hover:scale-110 duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-amber-300 transition-colors transform hover:scale-110 duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
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
      {/* Back to top button */}
      <a href="#home" className="fixed bottom-5 right-5 bg-amber-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-amber-800 transition-colors z-40" aria-label="Back to top">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </a>
      {/* Smooth Scroll Script */}
      <script dangerouslySetInnerHTML={{
      __html: `
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
              e.preventDefault();
              document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
              });
            });
          });
        `
    }} />
    </div>;
}