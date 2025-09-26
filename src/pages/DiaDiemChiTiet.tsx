import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const DiaDiemChiTiet = () => {
  const {
    id
  } = useParams();
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPosition, setCurrentPosition] = useState(null);
  // Mock locations data
  const locationsData = {
    'lang-mong-phu': {
      name: 'Làng Mông Phụ',
      description: 'Làng Mông Phụ là làng cổ trung tâm của Đường Lâm, nơi bảo tồn nhiều ngôi nhà cổ nhất với kiến trúc đặc trưng bằng đá ong.',
      fullDescription: `
        Làng Mông Phụ là một trong năm làng cổ của xã Đường Lâm, nằm cách trung tâm Hà Nội khoảng 45km về phía Tây. 
        Đây là làng cổ trung tâm của Đường Lâm và cũng là nơi bảo tồn nhiều ngôi nhà cổ nhất với kiến trúc đặc trưng bằng đá ong.
        Làng Mông Phụ có lịch sử hình thành từ thời Hùng Vương và phát triển mạnh trong các triều đại phong kiến. 
        Cổng làng Mông Phụ là một trong những công trình tiêu biểu của làng cổ Đường Lâm, được xây dựng từ đá ong với kiến trúc độc đáo.
        Khi bước vào làng Mông Phụ, du khách sẽ được chiêm ngưỡng những ngôi nhà cổ hàng trăm năm tuổi, với kiến trúc đặc trưng của làng quê Bắc Bộ. 
        Các ngôi nhà đều được xây dựng theo kiểu ba gian hai chái, với vật liệu chủ yếu là đá ong, gỗ lim và ngói mũi hài.
      `,
      images: ['https://placehold.co/600x400?text=Mong+Phu+1', 'https://placehold.co/600x400?text=Mong+Phu+2', 'https://placehold.co/600x400?text=Mong+Phu+3', 'https://placehold.co/600x400?text=Mong+Phu+4'],
      openTime: '6:00 - 18:00 hàng ngày',
      ticketPrice: '20.000 VNĐ/người',
      position: {
        lat: 21.084149,
        lng: 105.700877
      }
    },
    'den-phung-hung': {
      name: 'Đền thờ Phùng Hưng',
      description: 'Đền thờ Phùng Hưng là nơi tưởng nhớ vị anh hùng dân tộc đã lãnh đạo cuộc khởi nghĩa chống lại quân đô hộ nhà Đường.',
      fullDescription: `
        Đền thờ Phùng Hưng là một di tích lịch sử quan trọng tại làng cổ Đường Lâm, nơi tưởng nhớ vị anh hùng dân tộc Phùng Hưng - 
        người đã lãnh đạo cuộc khởi nghĩa chống lại quân đô hộ nhà Đường vào thế kỷ thứ 8.
        Phùng Hưng (761-802), còn được người dân gọi với tên thân mật là Bố Cái Đại Vương, là một nhân vật lịch sử quan trọng. 
        Ông đã lãnh đạo cuộc khởi nghĩa chống lại ách đô hộ của nhà Đường và giành được độc lập trong một thời gian ngắn.
        Đền thờ Phùng Hưng được xây dựng với kiến trúc truyền thống của đình chùa Việt Nam, gồm ba gian chính và hai gian phụ. 
        Bên trong đền có nhiều hiện vật lịch sử quý giá như: bia đá, câu đối, đồ thờ cúng và các tượng thờ.
      `,
      images: ['https://placehold.co/600x400?text=Den+Phung+Hung+1', 'https://placehold.co/600x400?text=Den+Phung+Hung+2', 'https://placehold.co/600x400?text=Den+Phung+Hung+3', 'https://placehold.co/600x400?text=Den+Phung+Hung+4'],
      openTime: '7:30 - 17:30 hàng ngày',
      ticketPrice: '10.000 VNĐ/người',
      position: {
        lat: 21.0835,
        lng: 105.6998
      }
    },
    'den-ngo-quyen': {
      name: 'Đền thờ Ngô Quyền',
      description: 'Đền thờ Ngô Quyền là nơi tưởng nhớ vị vua đầu tiên của nhà nước phong kiến độc lập Việt Nam sau chiến thắng Bạch Đằng.',
      fullDescription: `
        Đền thờ Ngô Quyền là một di tích lịch sử quan trọng tại làng cổ Đường Lâm, nơi tưởng nhớ vị vua đầu tiên của nhà nước phong kiến 
        độc lập Việt Nam sau chiến thắng Bạch Đằng năm 938.
        Ngô Quyền (897-944) là vị anh hùng dân tộc đã đánh bại quân Nam Hán trong trận Bạch Đằng lịch sử, chấm dứt 1000 năm Bắc thuộc 
        và mở ra kỷ nguyên độc lập tự chủ cho dân tộc Việt Nam. Ông là người có công lớn trong việc xây dựng nền móng cho nhà nước 
        phong kiến Việt Nam.
        Đền thờ Ngô Quyền được xây dựng trên một khu đồi rộng với không gian trang nghiêm, thanh tịnh. Kiến trúc đền mang đậm phong cách 
        truyền thống Việt Nam với hệ thống cột gỗ, mái ngói, các họa tiết chạm khắc tinh xảo.
      `,
      images: ['https://placehold.co/600x400?text=Den+Ngo+Quyen+1', 'https://placehold.co/600x400?text=Den+Ngo+Quyen+2', 'https://placehold.co/600x400?text=Den+Ngo+Quyen+3', 'https://placehold.co/600x400?text=Den+Ngo+Quyen+4'],
      openTime: '7:00 - 17:00 hàng ngày',
      ticketPrice: '10.000 VNĐ/người',
      position: {
        lat: 21.0852,
        lng: 105.7025
      }
    }
  };
  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setLocation(locationsData[id] || null);
      setLoading(false);
    }, 500);
    // Get user's current position
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setCurrentPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      }, () => {
        console.log('Unable to retrieve your location');
      });
    }
  }, [id]);
  if (loading) {
    return <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-700 mx-auto mb-4"></div>
          <p className="text-amber-800">Đang tải thông tin...</p>
        </div>
      </div>;
  }
  if (!location) {
    return <div className="w-full min-h-screen bg-white text-gray-800 font-sans">
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
            <div className="flex items-center">
              <Link to="/">
                <img src="https://placehold.co/100x50?text=Duong+Lam" alt="Logo Làng cổ Đường Lâm" className="h-10" />
              </Link>
              <Link to="/" className="ml-3 text-xl font-bold text-amber-800">
                Làng cổ Đường Lâm
              </Link>
            </div>
          </nav>
        </header>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-amber-800 mb-4">
            Không tìm thấy địa điểm
          </h1>
          <p className="text-lg mb-8">
            Địa điểm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
          </p>
          <Link to="/dia-diem" className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-6 rounded-lg transition-colors">
            Quay lại danh sách địa điểm
          </Link>
        </div>
      </div>;
  }
  return <div className="w-full min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img src="https://placehold.co/100x50?text=Duong+Lam" alt="Logo Làng cổ Đường Lâm" className="h-10" />
            </Link>
            <Link to="/" className="ml-3 text-xl font-bold text-amber-800">
              Làng cổ Đường Lâm
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-amber-700 transition-colors">
              Trang chủ
            </Link>
            <Link to="/dia-diem" className="text-amber-700 font-semibold">
              Địa điểm
            </Link>
            <Link to="/am-thuc" className="hover:text-amber-700 transition-colors">
              Ăn uống
            </Link>
            <Link to="/dat-lich" className="hover:text-amber-700 transition-colors">
              Đặt lịch
            </Link>
          </div>
          <Link to="/dia-diem" className="md:hidden flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
        </nav>
      </header>
      {/* Hero Banner */}
      <section className="relative h-[50vh] bg-cover bg-center" style={{
      backgroundImage: `url(${location.images[0]})`
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {location.name}
            </h1>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">
                  Giới thiệu
                </h2>
                {location.fullDescription.split('\n\n').map((paragraph, index) => <p key={index} className="mb-4 text-lg">
                      {paragraph.trim()}
                    </p>)}
              </div>
            </div>
            {/* Gallery */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-amber-800 mb-6">
                Hình ảnh
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {location.images.map((image, index) => <div key={index} className="overflow-hidden rounded-lg shadow-md">
                    <img src={image} alt={`${location.name} - Ảnh ${index + 1}`} className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105" />
                  </div>)}
              </div>
            </div>
            {/* Information */}
            <div className="mb-12 grid md:grid-cols-2 gap-8">
              <div className="bg-amber-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">
                  Thông tin tham quan
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-700 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-medium">Giờ mở cửa:</span>{' '}
                      {location.openTime}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-700 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div>
                      <span className="font-medium">Giá vé:</span>{' '}
                      {location.ticketPrice}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-700 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <span className="font-medium">Địa chỉ:</span> Làng cổ
                      Đường Lâm, Xã Đường Lâm, Thị xã Sơn Tây, Hà Nội
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">
                  Lưu ý khi tham quan
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Trang phục lịch sự khi vào các khu di tích tâm linh</li>
                  <li>Không hút thuốc, xả rác trong khu vực di tích</li>
                  <li>Tôn trọng đời sống của người dân địa phương</li>
                  <li>Không tự ý vào nhà dân khi chưa được phép</li>
                  <li>Giữ gìn vệ sinh chung, bảo vệ cảnh quan môi trường</li>
                </ul>
              </div>
            </div>
            {/* Map */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-amber-800 mb-6">Bản đồ</h2>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE">
                  <GoogleMap mapContainerStyle={mapContainerStyle} center={location.position} zoom={15}>
                    <Marker position={location.position} />
                    {currentPosition && <Marker position={currentPosition} icon={{
                    url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                  }} />}
                  </GoogleMap>
                </LoadScript>
              </div>
              <div className="mt-4 text-center">
                <Link to="/ban-do" className="inline-flex items-center text-amber-700 font-medium hover:underline">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Chỉ đường từ vị trí của bạn
                </Link>
              </div>
            </div>
            {/* Navigation */}
            <div className="flex justify-between">
              <Link to="/dia-diem" className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-6 rounded-lg transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Quay lại danh sách
              </Link>
              <Link to="/dat-lich" className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-6 rounded-lg transition-colors flex items-center">
                Đặt tour tham quan
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
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
export default DiaDiemChiTiet;