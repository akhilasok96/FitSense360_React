import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";

import testimonialImg1 from "../assets/testimonial_image1.jpg";
import testimonialIconImg1 from "../assets/testimonial_icon_img1.jpg";
import plusIconImg from "../assets/plus_icon.png";
import testimonialPartnerImg from "../assets/testimonial_partner_image.png";

const Testimonial = () => {
  return (
    <>
      <div className='container-fluid testimonial'>
        <div className='container'>
          <div className='row gx-0'>
            <div className='col-md-7'>
              <div className='testimonial-col1 pe-md-5 me-md-5'>
                <h1 className='main-heading'>
                  What Our Happy Clients Say About Us
                </h1>
                <p className='py-4'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                  quo nam cum animi aperiam reprehenderit perferendis, corporis
                  ratione tempora fugiat a atque, distinctio commodi facere,
                  deleniti ipsa voluptate doloremque dolore.
                </p>
                <div className='row pt-2 align-items-center'>
                  <div className='col-md-5'>
                    <div className='testimonial-icon-images'>
                      <img
                        src={testimonialIconImg1}
                        alt=''
                        className='img-fluid'
                      />
                      <img
                        src={testimonialIconImg1}
                        alt=''
                        className='img-fluid test-icon-img1'
                      />
                      <img
                        src={testimonialIconImg1}
                        alt=''
                        className='img-fluid test-icon-img2'
                      />
                      <img
                        src={testimonialIconImg1}
                        alt=''
                        className='img-fluid test-icon-img3'
                      />
                      <img
                        src={plusIconImg}
                        alt=''
                        className='img-fluid test-icon-img3'
                      />
                    </div>
                  </div>
                  <div className='col-md-7  gx-0'>
                    <p className='testimonial-p3'>
                      <i className='fa-solid fa-star' /> 4.9 (450 Reviews)
                    </p>
                  </div>
                </div>
                <img
                  src={testimonialPartnerImg}
                  alt=''
                  className='img-fluid py-3'
                />
              </div>
            </div>
            <div className='col-md-5'>
              <div className='testimonial-col2'>
                <Swiper
                  grabCursor={true}
                  effect={"creative"}
                  creativeEffect={{
                    prev: {
                      shadow: true,
                      translate: [0, 0, -400],
                    },
                    next: {
                      translate: ["100%", 0, 0],
                    },
                  }}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, EffectCreative]}
                  className='mySwiper'
                >
                  <SwiperSlide>
                    <div className='row testimonial-wrapper'>
                      <div className='col-12'>
                        <div className='row gx-0 align-items-center'>
                          <div className='col-md-4 text-center'>
                            <img
                              src={testimonialImg1}
                              alt=''
                              className='img-fluid'
                            />
                          </div>
                          <div className='col-md-8'>
                            <h5>Arjun Kartha</h5>
                            <p className='testimonial-p1 pt-1'>
                              Happy Customer
                            </p>
                          </div>
                        </div>
                        <div className='stars py-3'>
                          <i className='fa-solid fa-star' />
                          <i className='fa-solid fa-star' />
                          <i className='fa-solid fa-star' />
                          <i className='fa-solid fa-star' />
                          <i className='fa-regular fa-star' />
                        </div>
                        <p className='testimonial-p2'>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quas magnam fugiat quidem nesciunt aperiam
                          minus. Similique iste distinctio suscipit debitis
                          provident.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='row testimonial-wrapper'>
                      <div className='col-12'>
                        <div className='row gx-0 align-items-center'>
                          <div className='col-md-4 text-center'>
                            <img
                              src={testimonialImg1}
                              alt=''
                              className='img-fluid'
                            />
                          </div>
                          <div className='col-md-8'>
                            <h5>Arjun Kartha</h5>
                            <p className='testimonial-p1 pt-1'>
                              Happy Customer
                            </p>
                          </div>
                        </div>
                        <div className='stars py-3'>
                          <i className='fa-solid fa-star' />
                          <i className='fa-solid fa-star' />
                          <i className='fa-solid fa-star' />
                          <i className='fa-solid fa-star' />
                          <i className='fa-regular fa-star' />
                        </div>
                        <p className='testimonial-p2'>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quas magnam fugiat quidem nesciunt aperiam
                          minus. Similique iste distinctio suscipit debitis
                          provident.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='row testimonial-wrapper'>
                      <div className='col-12'>
                        <div className='row gx-0 align-items-center'>
                          <div className='col-md-4 text-center'>
                            <img
                              src={testimonialImg1}
                              alt=''
                              className='img-fluid'
                            />
                          </div>
                          <div className='col-md-8'>
                            <h5>Arjun Kartha</h5>
                            <p className='testimonial-p1 pt-1'>
                              Happy Customer
                            </p>
                          </div>
                        </div>
                        <div className='stars py-3'>
                          <i className='fa-solid fa-star' />
                          <i className='fa-solid fa-star' />
                          <i className='fa-solid fa-star' />
                          <i className='fa-solid fa-star' />
                          <i className='fa-regular fa-star' />
                        </div>
                        <p className='testimonial-p2'>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quas magnam fugiat quidem nesciunt aperiam
                          minus. Similique iste distinctio suscipit debitis
                          provident.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='row testimonial-wrapper'>
                      <div className='col-12'>
                        <div className='row gx-0 align-items-center'>
                          <div className='col-md-4 text-center'>
                            <img
                              src={testimonialImg1}
                              alt=''
                              className='img-fluid'
                            />
                          </div>
                          <div className='col-md-8'>
                            <h5>Arjun Kartha</h5>
                            <p className='testimonial-p1 pt-1'>
                              Happy Customer
                            </p>
                          </div>
                        </div>
                        <div className='stars py-3'>
                          <i className='fa-solid fa-star' />
                          <i className='fa-solid fa-star' />
                          <i className='fa-solid fa-star' />
                          <i className='fa-solid fa-star' />
                          <i className='fa-regular fa-star' />
                        </div>
                        <p className='testimonial-p2'>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quas magnam fugiat quidem nesciunt aperiam
                          minus. Similique iste distinctio suscipit debitis
                          provident.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;