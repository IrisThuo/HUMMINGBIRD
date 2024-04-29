import React from 'react';
import styles from './members.module.css'
import { Navigation, Pagination, Scrollbar,A11y } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import Card from './Card';
import Terry from '../../assets/Terry.png'
import Eric from '../../assets/Eric.png'


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
            slidesPerView={1}
            navigation
            breakpoints={{
                    340:{
                        width: 200,
                        slidesPerView: 1,
                    },

                   768:{
                    width:768,
                    slidesPreview:1,
                   },

                   1040:{
                    width:1040,
                    slidesPerView:1,
                   },
                }

            }
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >

                <SwiperSlide>
                <Card
                image={Terry}
                name='Teresia Muragwa'
                desc='I am a passionate conservationist with a degree in Film and Theatre Studies . I love the art of African story telling as it has been our nature since the beginning of time. I am currently an entrepreneur and Nursery Director at The Millennial Environmentalists , where I am incharge of two nurseries that grow different varieties of tree seedlings ,from indigenous,exotic and fruit trees. We sow seeds that are natured well and taken care of even after transplanting to ensure sustainability of the seedlings.
                This passion grew during my university years from observing environmental degradation of a place I had grown to love as serene due to poor development planning.I believe in the power of indigenous seed planted can multiply to generations of trees for the future,thus preserving their cultural and medicinal purposes .'/>
                </SwiperSlide>

                <SwiperSlide>
                <Card
                image={Eric}
                name='Eric Mwangi'
                desc= 'He is an ambitious and passionate environmental activist engaged in environmental preservation and reclamation in various sectors. He is a graduate with a bachelors degree in Physical Science from Meru University of Science and Technology and is currently an Alumni providing mentorship to the current students in the environmental field. He is a practicing hydrologist and projects coordinator at inner core geoconsultancy firm with years of experience in the field and has worked with major industry stake holders in shaping policies in the water sector. He is also a philanthropist and is currently a junior director in Jamii Outreach, a community based organization in Kibra working with less privileged children and youth'/>
                </SwiperSlide>



                

          </Swiper>
            </div>

        </div>
    );
}

export default Members;
