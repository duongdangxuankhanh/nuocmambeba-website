import React, { useEffect, useState } from 'react'
import ButtonComponent from '../../Components/ButtonComponent'
import CartProductComponent from '../../Components/CartProductComponent/CartProductComponent'
import { useDispatch } from 'react-redux'
import { updateQuantity } from '../../redux/slices/cart'
import ToastComponent from '../../Components/ToastComponent'
import { deleteCartById } from '../../services/cartService'

const featuredProducts = [
  {
    id: 'home-fish-sauce-1',
    img: 'sp1.png',
    nameProduct: 'Nước mắm cá cơm 500ml',
    price: 60000,
  },
  {
    id: 'home-fish-sauce-2',
    img: 'sp2.png',
    nameProduct: 'Nước mắm cá cơm 500ml',
    price: 70000,
  },
  {
    id: 'home-fish-sauce-3',
    img: 'sp2.png',
    nameProduct: 'Nước mắm cá cơm 1000ml',
    price: 120000,
  },
]

const trustHighlights = [
  {
    title: 'Độ đạm rõ vị',
    description:
      'Độ đạm phù hợp cho nấu, chấm và ướp.',
  },
  {
    title: 'Nguyên liệu sạch',
    description:
      'Cá cơm tươi và muối biển tinh khiết, không màu nhân tạo.',
  },
  {
    title: 'Hậu vị tự nhiên',
    description: 'Thơm dịu, hậu ngọt giúp món ăn đậm đà hơn.',
  },
  {
    title: 'Giao hàng tiện lợi',
    description: 'Đóng gói an toàn, giao nhanh toàn quốc.',
  },
]

// processBlocks removed — not used in UI

const HomePage = () => {
  const [toasts, setToasts] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const resultCode =
      params.get('resultCode') || params.get('vnp_ResponseCode')
    const userId =
      params.get('vnp_OrderInfo') || params.get('orderInfo')

    if (resultCode === '0' || resultCode === '00') {
      localStorage.removeItem('cartPaul')
      dispatch(updateQuantity(0))

      setToasts((prev) => [
        ...prev,
        {
          id: Date.now(),
          content: 'Thanh toán thành công',
          typeToast: 'success',
        },
      ])

      deleteCartById(userId).catch(() => {
        setToasts((prev) => [
          ...prev,
          {
            id: Date.now(),
            content: 'Lỗi xóa giỏ hàng',
            typeToast: 'error',
          },
        ])
      })
    }
  }, [dispatch])

  return (
    <div className="text-[#2f2418]">

      <ToastComponent toasts={toasts} setToasts={setToasts} />

      {/* HERO */}
      <section className="relative w-screen h-screen left-1/2 -translate-x-1/2 overflow-hidden text-white">
        <img
          src="/assest/banner/banner_1.png"
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex items-center h-full">
          <div className="mx-auto max-w-7xl px-6 w-full">
            <div className="max-w-2xl space-y-6">
              <span className="inline-block px-4 py-2 text-xs tracking-widest uppercase text-white rounded-full bg-yellow-400">
                Nước mắm truyền thống BÉ BA
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                Tinh túy biển khơi trong từng giọt mắm!
              </h1>

              <p className="text-white/80 text-lg">
                Hương vị đậm đà từ cá cơm tươi và muối biển tinh khiết,
                ủ chượp tự nhiên tạo nên hậu vị ngọt thanh chuẩn vị Việt.
              </p>

              <div className="flex gap-4">
                <ButtonComponent contentButton="XEM SẢN PHẨM" />
                <button className="px-6 py-3 border border-white rounded-full text-white text-xs hover:bg-white hover:text-black transition">
                  TÌM HIỂU THÊM
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-7xl px-6 py-20 space-y-24">

        {/* PRODUCTS */}
        <section id="products" className="scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto">
          
            <p className="uppercase tracking-widest text-4xl font-semibold mt-3 text-[#9b6130]">
              Sản phẩm 
            </p>

            {/* <h2 className="text-4xl font-semibold mt-3">
              Lựa chọn phù hợp cho từng bữa ăn
            </h2>

            <p className="mt-4 text-gray-600">
              Từ nước mắm nấu ăn hằng ngày đến nước mắm nhĩ cao đạm
              cho chấm và ướp.
            </p> */}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((p) => (
              <div
                key={p.id}
                className="rounded-3xl bg-white p-4 shadow hover:shadow-xl transition"
              >
                <CartProductComponent {...p} setToasts={setToasts} />
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <video
              src="/assest/banner/video5.mp4"
              autoPlay
              muted
              loop
              className="rounded-2xl shadow-lg"
            />

            <div>
              <p className="uppercase tracking-widest text-4xl font-semibold mt-3 text-[#9b6130]">
                Câu chuyện sản xuất
              </p>

              <p className="mt-4 text-gray-600 leading-7">
                Cá cơm tươi và muối biển được phối trộn theo tỷ lệ chuẩn,
                ủ lên men tự nhiên trong thời gian dài để tạo nên độ đạm,
                hương thơm và hậu vị đặc trưng.
              </p>

              <div className="mt-6">
                <ButtonComponent contentButton="TÌM HIỂU QUY TRÌNH" />
              </div>
            </div>
          </div>
        </section>

        {/* TRUST: bottle centered with features around */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-3 items-center gap-8">

              <div className="space-y-6">
                {trustHighlights.slice(0, 2).map((t, i) => (
                  <div key={t.title} className="p-6 text-center">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#f3dfc3] rounded-full font-semibold mx-auto">
                      {i + 1}
                    </div>
                    <h3 className="mt-4 font-semibold">{t.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{t.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-200/20 via-yellow-200/30 to-orange-200/20 rounded-full blur-3xl -z-10 scale-150" />
                <img
                  src="logo.png"
                  alt="bottle"
                  className="w-80 lg:w-full max-w-2xl object-contain rounded-2xl shadow-2xl scale-110 hover:scale-125 transition-transform duration-500 border-4 border-white drop-shadow-2xl"
                />
              </div>

              <div className="space-y-6">
                {trustHighlights.slice(2).map((t, i) => (
                  <div key={t.title} className="p-6 text-center">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#f3dfc3] rounded-full font-semibold mx-auto">
                      {i + 3}
                    </div>
                    <h3 className="mt-4 font-semibold">{t.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{t.description}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* FINAL SECTION */}
        <section className="grid lg:grid-cols-2 gap-10 items-center rounded-3xl p-8 lg:p-12">
          <div className="space-y-5">
            <p className="uppercase tracking-widest text-4xl font-semibold mt-3 text-[#9b6130]">
              Nghệ nhân làm mắm
            </p>

            {/* <h2 className="text-4xl font-semibold">
              Giữ trọn bí quyết truyền đời
            </h2> */}

            <p className="text-gray-600 leading-7">
              Đội ngũ nghệ nhân theo sát từng công đoạn từ chọn cá,
              ủ chượp, rút nước cốt đến đóng chai để duy trì chất lượng
              và hương vị đặc trưng.
            </p>

            <ButtonComponent contentButton="ĐẶT MUA HÔM NAY" />
          </div>

          <video
            src="/assest/banner/video3.mp4"
            autoPlay
            muted
            loop
            className="rounded-2xl shadow-lg"
          />
        </section>

      </div>
    </div>
  )
}

export default HomePage