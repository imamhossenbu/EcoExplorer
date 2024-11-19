import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner4 from '../assets/banner4.jpg';
import { EffectFlip, Pagination, Navigation, Scrollbar,Autoplay} from 'swiper/modules';

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto pt-8'>
            <Swiper
                modules={[EffectFlip, Navigation, Pagination, Scrollbar,Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                effect={'flip'}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                speed={1000}
                loop={true} 
                loopedSlides={4}
            >
                <SwiperSlide><img className=' h-[300px] md:h-[480px] w-full rounded-lg' src={banner2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[300px] md:h-[480px] w-full rounded-lg' src={banner1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[300px] md:h-[480px] w-full rounded-lg' src='https://i.postimg.cc/NfP2QbxB/mountain3.jpg' alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[300px] md:h-[480px] w-full rounded-lg' src={banner4} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
