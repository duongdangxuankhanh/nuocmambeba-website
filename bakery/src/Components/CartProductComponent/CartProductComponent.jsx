import React from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../utils/format';
import { resolveCakeImageSrc } from '../../utils/image';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity } from '../../redux/slices/cart';
import { addCart } from '../../services/cartService';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const isMongoObjectId = (value) => typeof value === 'string' && /^[a-f\d]{24}$/i.test(value);

const CartProductComponent = ({ id, img, nameProduct, price, setToasts = () => {} }) => {
    const canOpenDetail = isMongoObjectId(id);
    const detailPath = canOpenDetail ? `/productDetail/${id}` : '/product/cakes';
    const dispatch = useDispatch()
    const useId = useSelector(state => state.user.id)
    const addToCart = async() => {
        try {
            const cart = JSON.parse(localStorage.getItem("cartPaul")) || [];
            const existingProduct = cart.find(product => product.id === id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ id, img, nameProduct, price, quantity: 1 });
            }

            localStorage.setItem("cartPaul", JSON.stringify(cart));
            const newQuantity = cart.reduce((total,item)=> total+item.quantity,0) 
            dispatch(updateQuantity(newQuantity))
            const newToast = { id: Date.now(), content: "Add product success", typeToast: "success" };

            setToasts((prevToasts) => [...prevToasts, newToast]);

            if (useId && isMongoObjectId(id)) {
                try {
                    await addCart(useId, id, 1)
                } catch (error) {
                    const syncToast = { id: Date.now(), content: "Da them vao gio local, nhung dong bo server that bai", typeToast: "error" };
                    setToasts((prevToasts) => [...prevToasts, syncToast]);
                }
            }
        } catch (error) {
            const newToast = { id: Date.now(), content: "Add product error", typeToast: "error" };
            setToasts((prevToasts) => [...prevToasts, newToast]);
        }
    };
    return (
        <div className='pb-[40px] min-h-[380px] group'>
            <div className='relative w-full max-w-[280px] sm:max-w-none mx-auto px-[4px] sm:px-[8px]'>
                <div className='overflow-hidden rounded-2xl bg-[#f8f8f8]'>
                    <Link to={detailPath} className='block'>
                        <img loading='lazy' src={resolveCakeImageSrc(img)} alt={nameProduct} className='w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]' onError={(e) => { 
                            console.error(`Lỗi tải ảnh: ${e.target.src}`);
                        }} />
                    </Link>
                </div>

                <div className='mt-3 bg-transparent px-1 pb-3'>
                    <h2 className='min-h-[43px]'>
                        <div className='mb-4 hover:underline cursor-pointer text-sm sm:text-base line-clamp-2'>
                            <Link to="/">{nameProduct}</Link>
                        </div>
                    </h2>
                    <div className='flex items-center justify-between gap-3'>
                        <span className='font-bold text-sm sm:text-base break-words'>{formatPrice(price)}</span>
                        <button
                            className='border-2 border-black bg-black text-white w-10 h-10 sm:w-12 sm:h-12 rounded-3xl flex items-center justify-center hover:bg-gray-800 transition-opacity duration-300 text-lg opacity-0 group-hover:opacity-100 shrink-0'
                            onClick={()=>addToCart()}
                        >
                            <AiOutlineShoppingCart />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProductComponent;
