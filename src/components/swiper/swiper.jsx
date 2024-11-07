// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import "./Index.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Aaa from '../../images/1730647023616.jpg';
import Bbb from '../../images/1730647034683.jpg';
import Ddd from '../../images/dolomites-1-64094.jpeg';
import Ccc from '../../images/forest-1-64084.jpeg';
import Fff from '../../images/landscape-1-64133.jpeg';
export default () => {
    return (

        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide ><img style={{ width: '100%', height: '99vh' }} src={Aaa} alt="" /></SwiperSlide>
            <SwiperSlide ><img style={{ width: '100%', height: '99vh' }} src={Bbb} alt="" /></SwiperSlide>
            <SwiperSlide ><img style={{ width: '100%', height: '99vh' }} src={Ddd} alt="" /></SwiperSlide>
            <SwiperSlide><img style={{ width: '100%', height: '99vh' }} src={Fff} alt="" /></SwiperSlide>
            <SwiperSlide ><img style={{ width: '100%', height: '99vh' }} src={Ccc} alt="" /></SwiperSlide>
            ...
        </Swiper>
    );
};