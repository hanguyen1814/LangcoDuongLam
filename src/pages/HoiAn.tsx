import React from 'react';
import { Link } from 'react-router-dom';
const HoiAn = () => {
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
      backgroundImage: `url(https://placehold.co/1920x1080?text=Hoi+An+Hero)`
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Phố Cổ Hội An
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Di sản văn hóa thế giới - Thành phố của đèn lồng
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
                Phố cổ Hội An là một thương cảng quốc tế sầm uất từ thế kỷ
                16-17, nằm ở tỉnh Quảng Nam, miền Trung Việt Nam. Với kiến trúc
                độc đáo kết hợp giữa Việt Nam, Trung Hoa, Nhật Bản và phương
                Tây, Hội An được UNESCO công nhận là Di sản Văn hóa Thế giới vào
                năm 1999.
              </p>
              <p className="mb-4 text-lg">
                Hội An từng là một thương cảng quốc tế sầm uất, nơi giao thương
                của các thương nhân từ Nhật Bản, Trung Quốc và phương Tây. Dù
                thương cảng đã không còn hoạt động, nhưng Hội An vẫn giữ được vẻ
                đẹp nguyên vẹn với những ngôi nhà cổ, đền chùa, hội quán và cây
                cầu Nhật Bản nổi tiếng.
              </p>
              <p className="mb-4 text-lg">
                Phố cổ Hội An không chỉ thu hút du khách bởi kiến trúc độc đáo
                mà còn bởi không khí yên bình, ẩm thực đặc sắc và nét văn hóa đa
                dạng. Đặc biệt, vào mỗi tối ngày 14 âm lịch hàng tháng, Hội An
                tổ chức "Đêm phố cổ" với hàng nghìn chiếc đèn lồng thắp sáng,
                tạo nên khung cảnh huyền ảo, lãng mạn.
              </p>
            </div>
            {/* Image Gallery */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-amber-800">
                Hình ảnh
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src="https://placehold.co/600x400?text=Hoi+An+1" alt="Phố cổ Hội An về đêm" className="w-full h-auto transition-transform duration-300 hover:scale-105" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src="https://placehold.co/600x400?text=Hoi+An+2" alt="Cầu Nhật Bản" className="w-full h-auto transition-transform duration-300 hover:scale-105" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src="https://placehold.co/600x400?text=Hoi+An+3" alt="Đèn lồng Hội An" className="w-full h-auto transition-transform duration-300 hover:scale-105" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src="https://placehold.co/600x400?text=Hoi+An+4" alt="Nhà cổ Hội An" className="w-full h-auto transition-transform duration-300 hover:scale-105" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src="https://placehold.co/600x400?text=Hoi+An+5" alt="Sông Thu Bồn" className="w-full h-auto transition-transform duration-300 hover:scale-105" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src="https://placehold.co/600x400?text=Hoi+An+6" alt="Làng gốm Thanh Hà" className="w-full h-auto transition-transform duration-300 hover:scale-105" />
                </div>
              </div>
            </div>
            {/* Main Attractions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-amber-800">
                Các địa điểm nổi bật
              </h2>
              <div className="space-y-6">
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-amber-700">
                    Chùa Cầu (Cầu Nhật Bản)
                  </h3>
                  <p className="text-lg">
                    Được xây dựng vào thế kỷ 17 bởi cộng đồng người Nhật, Chùa
                    Cầu là biểu tượng của Hội An. Cây cầu này vừa là cầu giao
                    thông, vừa là đền thờ thần linh với mái che độc đáo. Theo
                    truyền thuyết, cầu được xây để tiêu diệt con quái vật Mamazu
                    gây ra động đất và lũ lụt.
                  </p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-amber-700">
                    Các nhà cổ
                  </h3>
                  <p className="mb-4 text-lg">
                    Phố cổ Hội An có nhiều ngôi nhà cổ được bảo tồn nguyên vẹn,
                    mang đậm kiến trúc truyền thống Việt Nam kết hợp với các yếu
                    tố từ Trung Hoa và Nhật Bản.
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Nhà cổ Tấn Ký</strong>: Nhà của thương nhân Hoa
                      kiều với kiến trúc tinh xảo
                    </li>
                    <li>
                      <strong>Nhà cổ Phùng Hưng</strong>: Ngôi nhà 200 năm tuổi
                      kết hợp kiến trúc Việt - Hoa - Nhật
                    </li>
                    <li>
                      <strong>Nhà cổ Đức An</strong>: Nổi tiếng với bộ sưu tập
                      đồ cổ phong phú
                    </li>
                    <li>
                      <strong>Nhà cổ Quân Thắng</strong>: Với những họa tiết
                      chạm khắc tinh xảo
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-amber-700">
                    Các hội quán
                  </h3>
                  <p className="mb-4 text-lg">
                    Hội quán là nơi gặp gỡ của các cộng đồng người Hoa ở Hội An,
                    vừa là nơi thờ tự vừa là nơi sinh hoạt cộng đồng.
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Hội quán Phúc Kiến</strong>: Hội quán lớn nhất và
                      đẹp nhất Hội An
                    </li>
                    <li>
                      <strong>Hội quán Quảng Đông</strong>: Nổi tiếng với tượng
                      Quan Công
                    </li>
                    <li>
                      <strong>Hội quán Trung Hoa</strong>: Kiến trúc tinh xảo
                      với nhiều chi tiết độc đáo
                    </li>
                    <li>
                      <strong>Hội quán Hải Nam</strong>: Nơi thờ 108 vị thương
                      nhân Hải Nam
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-amber-700">
                    Làng nghề truyền thống
                  </h3>
                  <p className="mb-4 text-lg">
                    Xung quanh Hội An còn có nhiều làng nghề truyền thống vẫn
                    duy trì hoạt động đến ngày nay.
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Làng gốm Thanh Hà</strong>: Làng nghề gốm với lịch
                      sử hơn 400 năm
                    </li>
                    <li>
                      <strong>Làng mộc Kim Bồng</strong>: Nổi tiếng với nghề
                      chạm khắc gỗ tinh xảo
                    </li>
                    <li>
                      <strong>Làng rau Trà Quế</strong>: Nổi tiếng với phương
                      pháp canh tác độc đáo
                    </li>
                    <li>
                      <strong>Làng lụa Hội An</strong>: Sản xuất lụa truyền
                      thống chất lượng cao
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Special Events */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-amber-800">
                Sự kiện đặc biệt
              </h2>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div>
                    <img src="https://placehold.co/600x400?text=Hoi+An+Night" alt="Đêm Hội An" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-amber-700">
                      Đêm Rằm Phố Cổ
                    </h3>
                    <p className="mb-4">
                      Vào mỗi tối 14 âm lịch hàng tháng, Hội An tổ chức "Đêm phố
                      cổ" với hàng nghìn chiếc đèn lồng thắp sáng. Trong đêm
                      này, toàn bộ phố cổ sẽ tắt điện, chỉ thắp sáng bằng đèn
                      lồng và nến, tạo nên khung cảnh huyền ảo, lãng mạn.
                    </p>
                    <p className="mb-4">
                      Du khách có thể thả đèn hoa đăng trên sông Thu Bồn, tham
                      gia các trò chơi dân gian, thưởng thức âm nhạc truyền
                      thống và các món ăn đặc sản Hội An.
                    </p>
                    <p>
                      <strong>Thời gian</strong>: Tối 14 âm lịch hàng tháng, từ
                      18h00 đến 22h00
                    </p>
                  </div>
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
                    <span className="font-medium">Phố cổ Hội An</span>: Mở cửa
                    cả ngày
                    <br />
                    <span className="font-medium">Các điểm tham quan</span>:
                    8h00 - 17h30 hàng ngày
                  </p>
                  <h3 className="text-xl font-bold mb-3 text-amber-700">
                    Giá vé
                  </h3>
                  <p>
                    <span className="font-medium">Vé tham quan phố cổ</span>:
                    120.000 VNĐ/người
                    <br />
                    <span className="font-medium">Vé tham quan 5 điểm</span>:
                    Bao gồm trong vé phố cổ
                    <br />
                    <span className="font-medium">Trẻ em dưới 16 tuổi</span>:
                    Miễn phí
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-amber-700">
                    Địa chỉ
                  </h3>
                  <p className="mb-4">
                    Trung tâm Quản lý Bảo tồn Di sản Văn hóa Hội An
                    <br />
                    10B Trần Hưng Đạo, Hội An, Quảng Nam
                  </p>
                  <h3 className="text-xl font-bold mb-3 text-amber-700">
                    Liên hệ
                  </h3>
                  <p>
                    <span className="font-medium">Điện thoại</span>:
                    0235.3861327
                    <br />
                    <span className="font-medium">Email</span>:
                    hoiandisan@gmail.com
                    <br />
                    <span className="font-medium">Website</span>:
                    hoianworldheritage.org.vn
                  </p>
                </div>
              </div>
            </div>
            {/* Local Cuisine */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-amber-800">
                Ẩm thực đặc sắc
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://placehold.co/600x400?text=Cao+Lau" alt="Cao lầu" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-amber-800">
                      Cao lầu
                    </h3>
                    <p className="text-sm">
                      Món mì đặc trưng của Hội An với sợi mì vàng dai, thịt xá
                      xíu, rau sống và bánh đa giòn. Nước dùng đặc biệt được làm
                      từ nước giếng Bá Lễ.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://placehold.co/600x400?text=Banh+Mi" alt="Bánh mì Phượng" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-amber-800">
                      Bánh mì Phượng
                    </h3>
                    <p className="text-sm">
                      Bánh mì nổi tiếng được làm từ nhiều loại nhân như thịt,
                      pate, rau sống và sốt đặc biệt. Đã được Anthony Bourdain
                      giới thiệu trên chương trình của ông.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://placehold.co/600x400?text=Banh+Vac" alt="Bánh vạc (White Rose)" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-amber-800">
                      Bánh vạc (White Rose)
                    </h3>
                    <p className="text-sm">
                      Bánh bột gạo mỏng nhân tôm, hình dáng như bông hoa hồng
                      trắng, ăn kèm với nước mắm chua ngọt và hành phi.
                    </p>
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
                  <img src="https://placehold.co/600x400?text=My+Son" alt="Thánh địa Mỹ Sơn" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-amber-800">
                      Thánh địa Mỹ Sơn
                    </h3>
                    <p className="text-gray-700 mb-2">
                      Cách 40km - 1 giờ đi xe
                    </p>
                    <p className="text-sm">
                      Quần thể đền tháp Chăm Pa, được UNESCO công nhận là Di sản
                      Văn hóa Thế giới.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://placehold.co/600x400?text=Cu+Lao+Cham" alt="Cù Lao Chàm" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-amber-800">
                      Cù Lao Chàm
                    </h3>
                    <p className="text-gray-700 mb-2">
                      Cách 15km - 30 phút đi tàu
                    </p>
                    <p className="text-sm">
                      Quần đảo với biển trong xanh, là Khu dự trữ sinh quyển thế
                      giới được UNESCO công nhận.
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
                      Cách 30km - 45 phút đi xe
                    </p>
                    <p className="text-sm">
                      Thành phố hiện đại với bãi biển Mỹ Khê tuyệt đẹp, Bà Nà
                      Hills và cầu Vàng nổi tiếng.
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
export default HoiAn;