import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import CartProductComponent from '../../Components/CartProductComponent/CartProductComponent'
import { getAllProduct } from '../../services/productService';
import ToastComponent from '../../Components/ToastComponent';

const fallbackProducts = Array.from({ length: 12 }, (_, index) => ({
  _id: `fallback-${index + 1}`,
  image: `sp${index + 1}.webp`,
  name: `Nước mắm cá cơm ${index + 1}`,
  price: 50000 + index * 5000,
  isFallback: true,
}));

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [toasts, setToasts] = useState([]);
  const symbol = ">"
  const fectProduct = async () => {
    try {
      const response = await getAllProduct()
      const productList = Array.isArray(response?.data)
        ? response.data
        : Array.isArray(response)
          ? response
          : []

      if (productList.length === 0) {
        setProducts(fallbackProducts)
        return
      }

      setProducts(productList)
    } catch (error) {
      setProducts(fallbackProducts)
    }
  }
    useEffect(() => {
      fectProduct()
    }, []);
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
      <div className='text-center mb-28'>
        <h1 className='text-[40px]'>
          Về Nước Mắm Truyền Thống
        </h1>
        <div className='my-6'>
          <img src="/assest/banner/bottle.png" alt="nước mắm" className='mx-auto w-48' />
        </div>
        <p className='text-sm'>Nước mắm cá cơm - hương vị đặc trưng của ẩm thực Việt Nam được ủ chượp tự nhiên theo công thức truyền thống. <b className='underline'>Khám phá thêm</b></p>
      </div>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='grid lg:grid-cols-2 gap-10 items-center mb-20'>
          <div>
            <h3 className='text-3xl font-semibold mb-6'>Câu Chuyện Về Nước Mắm</h3>
            <p className='text-gray-600 leading-7 mb-4'>
              Nước mắm là hồn của ẩm thực Việt Nam. Với hơn trăm năm lịch sử, nước mắm cá cơm được yêu thích bởi hương vị đậm đà, 
              hậu ngọt thanh thoáng và mùi thơm lịch sự. Mỗi giọt nước mắm là kết quả của quá trình ủ chượp lâu dài, 
              kỹ lưỡng từ cá cơm tươi và muối biển tinh khiết.
            </p>
            <p className='text-gray-600 leading-7'>
              Chúng tôi tin rằng nước mắm chất lượng cao là nền tảng của những món ăn ngon. 
              Vì vậy, chúng tôi cam kết mang đến cho bạn những sản phẩm nước mắm truyền thống, 
              được chế biến từ những nguyên liệu tốt nhất và qua quy trình kiểm định kỹ lưỡng.
            </p>
          </div>
          <div className='flex justify-center'>
            <img src="/assest/banner/bottle.png" alt="nước mắm truyền thống" className='w-64' />
          </div>
        </div>

        <div className='mb-20'>
          <h3 className='text-3xl font-semibold mb-6 text-center'>Đặc Điểm Nước Mắm Cá Cơm</h3>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='p-6 text-center'>
              <h4 className='font-semibold text-lg mb-3'>Độ Đạm Rõ Vị</h4>
              <p className='text-sm text-gray-600'>
                Có nhiều lựa chọn từ 25N, 35N, 40N phù hợp cho nấu, chấm và ướp theo nhu cầu từng món ăn.
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
          <h3 className='text-3xl font-semibold mb-6 text-center'>Quy Trình Sản Xuất</h3>
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
          <h3 className='text-3xl font-semibold mb-6'>Tại Sao Chọn Nước Mắm Của Chúng Tôi?</h3>
          <div className='text-gray-600 leading-7 space-y-4 max-w-3xl mx-auto'>
            <p>
              Chúng tôi là những người yêu thích nước mắm truyền thống và cam kết mang đến cho bạn 
              những sản phẩm tốt nhất. Mỗi chai nước mắm được sản xuất với tình yêu và kỹ lưỡng.
            </p>
            <p>
              Nước mắm của chúng tôi không chỉ là một gia vị, mà còn là linh hồn của ẩm thực Việt Nam. 
              Từ những bữa cơm gia đình thường ngày đến những bữa tiệc lớn, nước mắm của chúng tôi 
              luôn là người bạn đáng tin cậy giúp tăng thêm hương vị cho các món ăn.
            </p>
            <p>
              Dù bạn là đầu bếp chuyên nghiệp hay chỉ là một người thích nấu ăn, 
              nước mắm truyền thống của chúng tôi sẽ không làm bạn thất vọng. 
              Hãy để chúng tôi đem đến cho bạn những giọt nước mắm chất lượng cao 
              và khiến mỗi bữa ăn của bạn trở nên đặc biệt hơn.
            </p>
          </div>
        </div>
      </div>
      {/* Products listing */}
      <section className='mx-auto max-w-7xl px-6 my-16'>
        <h3 className='text-3xl font-semibold mb-6 text-center'>Sản phẩm</h3>
        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {(products || []).map((p) => {
            const props = {
              img: p.img || p.image || p.mainImage || p.thumbnail || '',
              nameProduct: p.nameProduct || p.name || p.title || '',
              price: p.price || p.cost || 0,
              id: p._id || p.id || p.sku || undefined,
            }
            return (
              <div key={props.id || Math.random()} className='rounded-3xl bg-white p-4 shadow hover:shadow-xl transition'>
                <CartProductComponent {...props} setToasts={setToasts} />
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default ProductPage