import React from 'react';
import styles from './members.module.css'
import { Navigation, Pagination, Scrollbar,A11y } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import Card from './Card';



function Members(props) {
    return (
        <div className={styles.find}>
            <div className={styles.heading}>
                <h5>Our Members</h5>
                <div className={styles.text_bg}>
                <p>
                <span>Meet the people making it all happen!</span>
                </p>
                </div>
            </div>
            <div className={styles.slider_container}>
            <Swiper
            modules={[Navigation,Pagination,Scrollbar,A11y]}
            spaceBetween={10}
            slidesPerView={5}
            navigation
            breakpoints={{
                    340:{
                        width: 200,
                        slidesPerView: 1,
                    },

                   768:{
                    width:768,
                    slidesPreview:4,
                   },

                   1040:{
                    width:1040,
                    slidesPerView:5,
                   },
                }

            }
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >

                <SwiperSlide>
                <Card
                image='https://media.istockphoto.com/id/1464587356/photo/saleswoman-and-a-female-customer-in-a-car-dealership.jpg?s=612x612&w=is&k=20&c=gnlHjbcrSlJAU_ViUmqEkrpNYFZmCL-tSoZLTkVwqcY='
                make='meg'/>
                </SwiperSlide>

                <SwiperSlide>
                <Card
                image='https://media.istockphoto.com/id/1707927462/photo/road-trip-romance.jpg?s=612x612&w=0&k=20&c=gc5M2jL2nzHo-0FwVdduNdkoeMMSwZp1X-TwBcNYwrU='
                make='meg'/>
                </SwiperSlide>

                <SwiperSlide>
                <Card
                image='https://media.istockphoto.com/id/1473771646/photo/a-young-man-buys-a-new-car.jpg?s=612x612&w=0&k=20&c=oLbi2keSg8g8-GSlJQ0wqHz-lAht8rqxaEQyviuyDPk='
                make='meg'/>
                </SwiperSlide>

                <SwiperSlide>
                <Card
                image='https://media.istockphoto.com/id/1597373319/photo/portrait-of-happy-smiling-customer-male-hugging-stroking-car-hood-after-purchased-in.jpg?s=612x612&w=0&k=20&c=AwvhRZYvO-43BT4mDl0B1rRBzSVNXd75HfnqyCtQEuk='
                make='meg'/>
                </SwiperSlide>

                <SwiperSlide>
                <Card
                image='https://media.istockphoto.com/id/1597373319/photo/portrait-of-happy-smiling-customer-male-hugging-stroking-car-hood-after-purchased-in.jpg?s=612x612&w=0&k=20&c=AwvhRZYvO-43BT4mDl0B1rRBzSVNXd75HfnqyCtQEuk='
                make='meg'/>
                </SwiperSlide>

          </Swiper>
            </div>

        </div>
    );
}

export default Members;
