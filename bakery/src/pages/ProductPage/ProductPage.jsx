import React, { useState } from 'react'
import { Link } from 'react-router'
import ToastComponent from '../../Components/ToastComponent';

const ProductPage = () => {
  const [toasts, setToasts] = useState([]);
  const symbol = ">"
  return (
    <div>
      <ToastComponent toasts={toasts} setToasts={setToasts}/>
      <div className='flex justify-center items-center'>
        <Link className='text-[11px] text-[#c4c4c4] mr-2' to ="/home">
          Trang chủ 
        </Link>
        {symbol}
        <Link className='text-[11px] ml-2'>
          Giới thiệu
        </Link>
      </div>
      <section className="relative w-screen left-1/2 -translate-x-1/2 min-h-[400px] md:min-h-[500px] overflow-hidden text-white z-0">
        <img loading="lazy" decoding="async" src="/assest/banner/aboutt.png" alt="nước mắm truyền thống" className='absolute inset-0 w-full h-full object-cover' />
        <div className='absolute inset-0 bg-black/45' />
        <div className='relative z-50 flex flex-col items-center justify-center h-full py-12 sm:py-20'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-semibold text-center mb-6 px-4 max-w-4xl text-white'>
            Về Nước Mắm Truyền Thống
          </h1>
          <p className='text-base sm:text-lg text-center text-white/90 max-w-2xl px-6'>
            Nước mắm cá cơm - hương vị đặc trưng của ẩm thực Việt Nam được ủ chượp tự nhiên theo công thức truyền thống.<br></br>
            {/* <span className='font-semibold cursor-pointer hover:text-white'>Khám phá thêm</span> */}
          </p>
        </div>
      </section>
      <div className='mx-auto max-w-7xl px-6 py-16 sm:py-20'>
        <div className='grid lg:grid-cols-2 gap-10 items-center mb-20'>
          <div>
            <h3 className='text-3xl font-semibold mb-6'>CÂU CHUYỆN VỀ NƯỚC MẮM</h3>
            <p className='text-gray-600 leading-7 mb-4'>
              Từ những mẻ cá cơm tươi được đánh bắt từ biển, kết hợp cùng muối biển và ủ chượp theo phương pháp truyền thống, nước mắm được hình thành qua một quá trình tự nhiên đòi hỏi sự kiên nhẫn và chăm chút.
            </p>
            <p className='text-gray-600 leading-7 mb-4'>
              Mỗi mẻ mắm là sự kết hợp giữa nguyên liệu tự nhiên, thời gian và kinh nghiệm được truyền lại qua nhiều thế hệ.
            </p>
            <p className='text-gray-600 leading-7 mb-4'>
              Với chúng tôi, làm nước mắm không đơn thuần là tạo ra một loại gia vị. Đó còn là cách gìn giữ một nghề truyền thống, gìn giữ hương vị quê hương và những giá trị đã gắn bó với bao thế hệ người Việt.
            </p>
          </div>
          <video
            src="/assest/banner/video6.mp4"
            autoPlay
            muted
            loop
            className="rounded-2xl shadow-lg w-full h-auto max-h-[420px] object-cover order-2 lg:order-1"
          />
        </div>

        <div className='mb-20'>
          <h3 className='text-3xl font-semibold mb-6 text-center'>ĐẶC ĐIỂM NƯỚC MẮM CÁ CƠM</h3>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='p-6 text-center'>
              <h4 className='font-semibold text-lg mb-3'>Độ Đạm Rõ Vị</h4>
              <p className='text-sm text-gray-600'>
                Độ đạm phù hợp cho nấu, chấm và ướp theo nhu cầu từng món ăn.
              </p>
            </div>
            <div className='p-6 text-center'>
              <h4 className='font-semibold text-lg mb-3'>Nguyên Liệu Sạch</h4>
              <p className='text-sm text-gray-600'>
                Sử dụng cá cơm tươi và muối biển tinh khiết, không có màu nhân tạo hay bảo quản hóa học.
              </p>
            </div>
            <div className='p-6 text-center'>
              <h4 className='font-semibold text-lg mb-3'>Hậu Vị Tự Nhiên</h4>
              <p className='text-sm text-gray-600'>
                Thơm dịu, hậu ngọt thanh thoáng giúp các món ăn trở nên đậm đà và hấp dẫn hơn.
              </p>
            </div>
          </div>
        </div>

        <div className='mb-20'>
          <h3 className='text-3xl font-semibold mb-6 text-center'>QUY TRÌNH SẢN XUẤT</h3>
          <p className='text-gray-600 leading-7 mb-4 text-center'>
            Mỗi chai nước mắm đều trải qua quy trình chế biến kỳ công từ đầu vào cho đến khi đóng chai:
          </p>
          <div className='grid md:grid-cols-3 gap-6'>
            <div className='p-6 text-center'>
              <div className='text-3xl font-bold text-yellow-500 mb-3'>1</div>
              <h4 className='font-semibold mb-3'>Ủ Chượp Truyền Thống</h4>
              <p className='text-sm text-gray-600'>
                Cá cơm tươi được phối trộn với muối biển và ủ lên men tự nhiên trong thời gian dài.
              </p>
            </div>
            <div className='p-6 text-center'>
              <div className='text-3xl font-bold text-yellow-500 mb-3'>2</div>
              <h4 className='font-semibold mb-3'>Rút Cốt và Kiểm Định</h4>
              <p className='text-sm text-gray-600'>
                Mỗi mẻ nước mắm được kiểm tra kỹ lưỡng trước khi đóng chai để đảm bảo chất lượng.
              </p>
            </div>
            <div className='p-6 text-center'>
              <div className='text-3xl font-bold text-yellow-500 mb-3'>3</div>
              <h4 className='font-semibold mb-3'>Giữ Trọn Hương Vị Việt</h4>
              <p className='text-sm text-gray-600'>
                Không pha tạp, không hương liệu nhân tạo, giữ đúng chất mắm truyền thống Việt.
              </p>
            </div>
          </div>
        </div>

        <div className='text-center mb-20'>
          <h3 className='text-3xl font-semibold mb-6'>TẠI SAO CHỌN NƯỚC MẮM CỦA CHÚNG TÔI</h3>
          <div className='text-gray-600 leading-7 space-y-4 max-w-3xl mx-auto'>
            <p>
              Hơn một thế kỷ qua, nghề làm nước mắm tại Đề Gi vẫn được gìn giữ qua từng thế hệ.
            </p>
            <p>
              Chúng tôi tin rằng giá trị của nước mắm truyền thống không chỉ nằm trong một chai mắm, mà còn nằm ở câu chuyện, thời gian và tâm huyết của những người làm nghề.
            </p>
            <p>
              Từ một vùng biển quê hương, Nước mắm Đề Gi – Bé Ba mong muốn mang đến những giọt mắm đậm đà, chân thật và giữ được nét đặc trưng của hương vị truyền thống Việt Nam.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductPage