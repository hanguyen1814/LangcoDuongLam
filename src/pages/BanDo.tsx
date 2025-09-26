import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
const BanDo = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [destination] = useState({
    lat: 21.084149,
    lng: 105.700877
  }); // Duong Lam coordinates
  const [directions, setDirections] = useState(null);
  const [error, setError] = useState('');
  const mapContainerStyle = {
    width: '100%',
    height: '70vh'
  };
  const center = destination;
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        setCurrentPosition(pos);
      }, () => {
        setError('Không thể xác định vị trí của bạn. Vui lòng cho phép truy cập vị trí.');
      });
    } else {
      setError('Trình duyệt của bạn không hỗ trợ định vị.');
    }
  }, []);
  const directionsCallback = response => {
    if (response !== null && response.status === 'OK') {
      setDirections(response);
    }
  };
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
            <Link to="/dia-diem" className="hover:text-amber-700 transition-colors">
              Địa điểm
            </Link>
            <Link to="/am-thuc" className="hover:text-amber-700 transition-colors">
              Ăn uống
            </Link>
            <Link to="/dat-lich" className="hover:text-amber-700 transition-colors">
              Đặt lịch
            </Link>
          </div>
          <Link to="/" className="md:hidden flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Link>
        </nav>
      </header>
      {/* Banner */}
      <section className="relative h-[30vh] bg-cover bg-center" style={{
      backgroundImage: `url(https://placehold.co/1920x1080?text=Ban+Do+Duong+Lam)`
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Bản Đồ Chỉ Đường
            </h1>
            <p className="text-lg md:text-xl text-white">
              Tìm đường đến làng cổ Đường Lâm từ vị trí của bạn
            </p>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                <p>{error}</p>
              </div>}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">
                Chỉ đường đến Làng cổ Đường Lâm
              </h2>
              <p className="text-lg mb-4">
                Dưới đây là bản đồ chỉ đường từ vị trí hiện tại của bạn đến làng
                cổ Đường Lâm. Bạn có thể theo dõi đường đi và thời gian di
                chuyển ước tính.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE">
                <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={13}>
                  {/* Destination marker */}
                  <Marker position={destination} />
                  {/* Current position marker */}
                  {currentPosition && <Marker position={currentPosition} icon={{
                  url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                }} />}
                  {/* Directions */}
                  {currentPosition && !directions && <DirectionsService options={{
                  destination: destination,
                  origin: currentPosition,
                  travelMode: 'DRIVING'
                }} callback={directionsCallback} />}
                  {directions && <DirectionsRenderer options={{
                  directions: directions
                }} />}
                </GoogleMap>
              </LoadScript>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-amber-800">
                Thông tin di chuyển
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Địa chỉ:</h4>
                  <p className="mb-4">
                    Làng cổ Đường Lâm, Xã Đường Lâm, Thị xã Sơn Tây, Hà Nội
                  </p>
                  <h4 className="font-bold mb-2">Phương tiện di chuyển:</h4>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Xe máy/ô tô: Từ Hà Nội theo quốc lộ 32 đi Sơn Tây</li>
                    <li>
                      Xe buýt: Tuyến 71 (Mỹ Đình - Sơn Tây), sau đó đi taxi hoặc
                      xe ôm khoảng 5km
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Khoảng cách:</h4>
                  <p className="mb-4">
                    Cách trung tâm Hà Nội khoảng 45km về phía Tây
                  </p>
                  <h4 className="font-bold mb-2">Thời gian di chuyển:</h4>
                  <p className="mb-4">
                    Khoảng 1.5 giờ từ trung tâm Hà Nội bằng ô tô/xe máy
                  </p>
                  <h4 className="font-bold mb-2">Bãi đỗ xe:</h4>
                  <p>Có bãi đỗ xe rộng rãi tại cổng làng</p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link to="/" className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-6 rounded-lg transition-colors inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Quay lại trang chủ
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
export default BanDo;