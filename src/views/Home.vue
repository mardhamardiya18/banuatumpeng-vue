<template>
  <div class="header">
    <Navbar />
    <!-- Section Home -->
    <section class="home" id="home">
      <div class="container">
        <div class="row">
          <div
            class="
              col-lg-6
              d-flex
              flex-column
              justify-content-center
              text-center text-md-start
            "
          >
            <p class="label-home">Present by Banua Tumpeng</p>
            <h1 class="heading-home"></h1>
            <p class="subheading-home mt-3 mx-lg-0">
              Dibuat oleh ahlinya untuk berbagai konsumsi acara spesial pian
            </p>
            <div class="btn-wrapper mt-5 d-flex d-sm-block flex-column">
              <a
                href="#about"
                class="
                  btn-lg btn btn-explore
                  py-2
                  px-4
                  py-md-3
                  px-md-5
                  rounded-pill
                  mx-auto
                  mb-3 mb-sm-0
                "
                >Explore</a
              >
              <a
                href="https://wa.link/ocl02u"
                class="
                  btn-lg btn btn-kontak
                  py-2
                  px-4
                  py-md-3
                  px-md-4
                  ms-md-4
                  rounded-pill
                  mx-auto
                "
                >Kontak Kami</a
              >
            </div>
            <div
              class="
                review
                d-flex
                justify-content-center justify-content-md-start
                align-items-center
                flex-wrap
                mt-4
                gap-3
                mx-lg-0
              "
            >
              <div class="star">
                <box-icon
                  name="star"
                  type="solid"
                  color="#ede500"
                  size="md"
                ></box-icon>
                <box-icon
                  name="star"
                  type="solid"
                  color="#ede500"
                  size="md"
                ></box-icon>
                <box-icon
                  name="star"
                  type="solid"
                  color="#ede500"
                  size="md"
                ></box-icon>
                <box-icon
                  name="star"
                  type="solid"
                  color="#ede500"
                  size="md"
                ></box-icon>
                <box-icon
                  name="star-half"
                  type="solid"
                  color="#ede500"
                  size="md"
                ></box-icon>
              </div>
              <div class="ket d-flex align-items-center gap-2">
                <p>(4,9)</p>
                <p class="reviewer-data">500++ Reviewer</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 position-relative d-none d-lg-block">
            <img
              src="./../assets/image/HeroImg.png"
              class="
                img-fluid
                position-absolute
                end-0
                translate-middle-y
                home-img
              "
              alt="catering banjarbaru catering banjarmasin"
              data-aos="fade-down"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Section About -->
    <section class="about section-margin" id="about">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-6 content-left">
            <div class="content-wrapper d-flex align-items-center">
              <img
                src="./../assets/image/about.svg"
                class="m-auto m-lg-0 d-block"
                alt="catering banjarbaru catering banjarmasin"
                data-aos="fade-down"
              />
              <div class="orn"></div>
            </div>
          </div>
          <div class="col-lg-6 content-right mt-5">
            <div class="heading-wrapper">
              <div class="heading p-3">
                <p>TENTANG KAMI</p>
                <h1>Kenal Lebih Dekat Yuk Dengan Banua Tumpeng</h1>
              </div>
              <div class="orn"></div>
            </div>
            <div class="desc mt-5">
              <p>
                Berdiri sejak 2019, Kami terus berinovasi dalam menghadirkan
                solusi terbaik untuk keperluan acara special konsumen kami.
              </p>
              <p>
                Sudah 300+ Customer dengan 15.000+ jumlah nasi kotak, nasi
                tumpeng, box bento dan lainnya yang tercatat dan selalu
                mendapatkan tanggapan positif dari customer kami.
              </p>
              <p>
                Semua ini berkat juru masak yang berpengalaman puluhan tahun dan
                tentunya selalu mengutamakan pelayanan terbaik.
              </p>
            </div>
            <div class="btn-wrapper mt-5 text-center text-lg-start">
              <a
                href="https://wa.link/ocl02u"
                class="
                  btn-lg btn btn-kontak
                  py-lg-3
                  px-lg-4
                  rounded-pill
                  me-lg-5
                  d-inline-block
                "
                >Kontak Kami</a
              >
              <a
                href="https://instagram.com/banuatumpeng"
                class="
                  btn-lg btn btn-ig
                  py-lg-3
                  px-lg-4
                  mt-3
                  ms-3 ms-lg-0
                  mt-md-0
                  rounded-pill
                "
                >Kunjungi Instagram</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICE START -->
    <section class="service section-margin" id="service">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <p class="label-service">our service</p>
            <h1 class="heading-service">
              Apa Yang Akan Anda Dapatkan Jika Order Disini ?
            </h1>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-3 col-md-6">
            <div class="card rounded-3 p-5" data-aos="fade-up">
              <div class="orn-hover"></div>
              <div class="body-card">
                <div class="heading-card d-flex mb-3">
                  <img
                    src="./../assets/image/customer.svg"
                    class="me-2"
                    alt="catering banjarbaru catering banjarmasin"
                  />
                  <h3>Best Services</h3>
                </div>
                <p>
                  Kami selalu memberikan dengan klien kami pelayanan berkualitas
                  tinggi dengan makanan terbaik dan lezat pastinya.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mt-3 mt-sm-0">
            <div
              class="card rounded-3 p-5"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="orn-hover"></div>
              <div class="body-card">
                <div class="heading-card d-flex mb-3">
                  <img
                    src="./../assets/image/calendar.svg"
                    class="me-2"
                    alt="catering banjarbaru catering banjarmasin"
                  />
                  <h3>Event Support</h3>
                </div>
                <p>
                  Kami akan membantu Menyukseskan acara anda melalui support
                  yang kami berikan yaitu kemasan cantik sesuai tema acara yang
                  berlangsung.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mt-3 mt-sm-0">
            <div
              class="card rounded-3 p-5"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div class="orn-hover"></div>
              <div class="body-card">
                <div class="heading-card d-flex mb-3">
                  <img
                    src="./../assets/image/delivery-man.svg"
                    class="me-2"
                    alt="catering banjarbaru catering banjarmasin"
                  />
                  <h3>Delivery Order</h3>
                </div>
                <p>
                  Kami juga memberikan pelayanan full online (Optional) mulai
                  dari pemesanan hingga produk ditempat sehingga anda tidak
                  perlu lagi untuk keluar rumah.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mt-3 mt-lg-0">
            <div
              class="card rounded-3 p-5"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <div class="orn-hover"></div>
              <div class="body-card">
                <div class="heading-card d-flex mb-3">
                  <img
                    src="./../assets/image/food.svg"
                    class="me-2"
                    alt="catering banjarbaru catering banjarmasin"
                  />
                  <h3>Food Quality</h3>
                </div>
                <p>
                  Kami Menjamin rasa yang pas dan porsi yang sesuai karena
                  diolah bersama juru masak berpengalaman
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- SERVICE END -->

    <!-- MENU START -->
    <section class="menu section-margin" id="menu">
      <div class="container py-5">
        <div class="row banner p-5">
          <div class="col-lg-6">
            <div class="heading-banner d-flex align-items-center">
              <h1 class="me-3">Gratis Ongkir!</h1>
              <img
                src="./../assets/image/delivery-banner.svg"
                alt="catering banjarbaru catering banjarmasin"
                data-aos="fade-right"
              />
            </div>
            <div class="body-banner my-3">
              <p class="m-0">Untuk wilayah :</p>
              <p>Banjarmasin-Banjarbaru-Martapura dan Sekitarnya</p>
            </div>
            <a
              class="requirement d-flex align-items-center"
              data-bs-toggle="collapse"
              href="#ketentuan"
              role="button"
              aria-expanded="false"
              aria-controls="ketentuan"
              ><i class="bx bxs-badge-check me-1"></i> Ketentuan Berlaku</a
            >
            <div class="collapse" id="ketentuan">
              <div class="card card-body bg-white">
                Tersedia untuk <b>min 50 pcs 😇</b>
              </div>
            </div>
          </div>
          <div
            class="
              col-lg-6
              d-flex
              align-items-center
              justify-content-center
              justify-content-lg-end
              justify-content-md-start
              mt-4
            "
          >
            <a
              href="https://wa.link/ocl02u"
              class="btn-lg btn-pesan py-3 px-4 rounded-pill"
              >Pesan Sekarang</a
            >
          </div>
        </div>
        <div class="row mt-5 row-menu">
          <div class="col text-center">
            <div class="label-menu">MENU</div>
            <div class="heading-menu">Paket Menu Yang Kami Tawarkan</div>
          </div>
        </div>
        <div class="row mt-5">
          <div
            class="col-lg-3 col-md-6 d-flex justify-content-center"
            data-aos="flip-right"
          >
            <div class="box-menu">
              <img
                src="./../assets/image/tumpeng-menu.webp"
                alt="catering banjarbaru catering banjarmasin"
              />
              <p>Paket Tumpeng Besar</p>
              <div class="btn-pesan">
                <a href="https://wa.link/mj0e8x">Pesan Sekarang</a>
              </div>
            </div>
          </div>
          <div
            class="col-lg-3 col-md-6 d-flex mt-3 mt-md-0 justify-content-center"
            data-aos="flip-right"
            data-aos-delay="300"
          >
            <div class="box-menu">
              <img
                src="./../assets/image/tumini-menu.webp"
                alt="catering banjarbaru catering banjarmasin"
              />
              <p>Paket Tumpeng Mini</p>
              <div class="btn-pesan">
                <a href="https://wa.link/grx86g">Pesan Sekarang</a>
              </div>
            </div>
          </div>
          <div
            class="
              col-lg-3 col-md-6
              d-flex
              mt-md-3 mt-3 mt-lg-0
              justify-content-center
            "
            data-aos="flip-right"
            data-aos-delay="600"
          >
            <div class="box-menu">
              <img
                src="./../assets/image/bento-menu.webp"
                alt="catering banjarbaru catering banjarmasin"
              />
              <p>Paket Box Bento</p>
              <div class="btn-pesan">
                <a href="https://wa.link/5fma02">Pesan Sekarang</a>
              </div>
            </div>
          </div>
          <div
            class="
              col-lg-3 col-md-6
              d-flex
              mt-md-3 mt-3 mt-lg-0
              justify-content-center
            "
            data-aos="flip-right"
            data-aos-delay="900"
          >
            <div class="box-menu">
              <img
                src="./../assets/image/naskot-menu.webp"
                alt="catering banjarbaru catering banjarmasin"
              />
              <p>Paket Nasi Kotak</p>
              <div class="btn-pesan">
                <a href="https://wa.link/s8wdf0">Pesan Sekarang</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- MENU END -->

    <!-- TESTI START -->
    <section class="testi section-margin" id="testi">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-5 d-flex flex-column justify-content-center"
            data-aos="zoom-in"
          >
            <p class="label-testi">testimoni</p>
            <h1 class="heading-testi">Apa Yang Mereka Katakan ?</h1>
            <p class="desc-testi">
              Semua customer kami merasa puas dengan olahan dan pelayanan yang
              kami berikan
            </p>
          </div>
          <div class="col-lg-6 mx-auto">
            <!-- Swiper -->
            <swiper class="swiper py-5" :options="swiperOption">
              <swiper-slide
                class="card px-5 py-4 card-testi"
                style="width: 8rem"
                v-for="testi in testies"
                :key="testi.id"
              >
                <div class="card-body">
                  <div class="user d-flex align-items-center mb-4">
                    <Avatar :username="testi.nama"></Avatar>
                    <div class="detail ms-3">
                      <p class="card-text my-0">
                        <b>{{ testi.nama }}</b>
                      </p>
                      <p class="card-text text-black">{{ testi.alamat }}</p>
                    </div>
                  </div>

                  <p class="card-text">
                    <box-icon
                      type="solid"
                      name="quote-left"
                      class="me-2"
                    ></box-icon>
                    {{ testi.konten }}
                  </p>
                </div>
              </swiper-slide>
              <div class="swiper-pagination mt-5" slot="pagination"></div>
            </swiper>
          </div>
        </div>
      </div>
    </section>
    <!-- TESTI END -->

    <!-- BLOG START -->
    <section class="blog section-margin" id="blog">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <p class="blog-label">BLOG & NEWS</p>
            <h1 class="blog-heading">Temukan Informasi Menarik Disini</h1>
          </div>
          <div
            class="
              col-lg-6 col-icon
              d-flex
              justify-content-end
              mt-4 mt-lg-0
              align-items-center
            "
          >
            <box-icon
              type="solid"
              name="chevron-left-circle"
              size="lg"
              color="#ECAC5D"
              class="me-3 chevron-left-circle"
              slot="button-prev"
            ></box-icon>
            <box-icon
              type="solid"
              name="chevron-right-circle"
              size="lg"
              color="#ECAC5D"
              class="chevron-right-circle"
              slot="button-next"
            ></box-icon>
          </div>
        </div>
        <div class="row mt-5 row-blog">
          <div class="col">
            <!-- Swiper -->
            <swiper class="swiper" :options="swiperOptionBlog">
              <swiper-slide class="card">
                <div class="img-card p-3">
                  <img
                    src="./../assets/image/blog1.png"
                    class="card-img-top"
                    alt="catering banjarbaru catering banjarmasin"
                  />
                </div>

                <div class="card-body">
                  <p class="card-title">24 November 2021</p>
                  <h3 class="card-text mb-4">
                    Rahasia Olahan Dapur Disukai Keluarga Ibu-Ibu Wajib Tau
                  </h3>
                  <router-link to="/blog" class="btn btn-blog"
                    >Selengkapnya</router-link
                  >
                </div>
              </swiper-slide>
              <swiper-slide class="card">
                <div class="img-card p-3">
                  <img
                    src="./../assets/image/blog1.png"
                    class="card-img-top"
                    alt="catering banjarbaru catering banjarmasin"
                  />
                </div>

                <div class="card-body">
                  <p class="card-title">24 November 2021</p>
                  <h3 class="card-text mb-4">
                    Rahasia Olahan Dapur Disukai Keluarga Ibu-Ibu Wajib Tau
                  </h3>
                  <router-link to="/blog" class="btn btn-blog"
                    >Selengkapnya</router-link
                  >
                </div>
              </swiper-slide>
              <swiper-slide class="card">
                <div class="img-card p-3">
                  <img
                    src="./../assets/image/blog1.png"
                    class="card-img-top"
                    alt="catering banjarbaru catering banjarmasin"
                  />
                </div>

                <div class="card-body">
                  <p class="card-title">24 November 2021</p>
                  <h3 class="card-text mb-4">
                    Rahasia Olahan Dapur Disukai Keluarga Ibu-Ibu Wajib Tau
                  </h3>
                  <router-link to="/blog" class="btn btn-blog"
                    >Selengkapnya</router-link
                  >
                </div>
              </swiper-slide>
              <swiper-slide class="card">
                <div class="img-card p-3">
                  <img
                    src="./../assets/image/blog1.png"
                    class="card-img-top"
                    alt="catering banjarbaru catering banjarmasin"
                  />
                </div>

                <div class="card-body">
                  <p class="card-title">24 November 2021</p>
                  <h3 class="card-text mb-4">
                    Rahasia Olahan Dapur Disukai Keluarga Ibu-Ibu Wajib Tau
                  </h3>
                  <router-link to="/blog" class="btn btn-blog"
                    >Selengkapnya</router-link
                  >
                </div>
              </swiper-slide>
              <swiper-slide class="card">
                <div class="img-card p-3">
                  <img
                    src="./../assets/image/blog1.png"
                    class="card-img-top"
                    alt="catering banjarbaru catering banjarmasin"
                  />
                </div>

                <div class="card-body">
                  <p class="card-title">24 November 2021</p>
                  <h3 class="card-text mb-4">
                    Rahasia Olahan Dapur Disukai Keluarga Ibu-Ibu Wajib Tau
                  </h3>
                  <router-link to="/blog" class="btn btn-blog"
                    >Selengkapnya</router-link
                  >
                </div>
              </swiper-slide>
              <swiper-slide class="card">
                <div class="img-card p-3">
                  <img
                    src="./../assets/image/blog1.png"
                    class="card-img-top"
                    alt="catering banjarbaru catering banjarmasin"
                  />
                </div>

                <div class="card-body">
                  <p class="card-title">24 November 2021</p>
                  <h3 class="card-text mb-4">
                    Rahasia Olahan Dapur Disukai Keluarga Ibu-Ibu Wajib Tau
                  </h3>
                  <router-link to="/blog" class="btn btn-blog"
                    >Selengkapnya</router-link
                  >
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </section>
    <!-- BLOG END -->

    <!-- SUBSCRIPTION START -->
    <section class="subscribe mb-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-subs m-auto py-5 p-lg-5 text-center">
            <p class="subs-label">SUBSCRIPTION</p>
            <h1 class="subs-heading">
              Dapatkan Informasi Ter-update Dari Banua tumpeng
            </h1>
            <form
              name="subscribe"
              @submit.prevent="sendGSpread"
              class="
                input
                mt-5
                bg-white
                w-75
                mx-auto
                py-md-3
                px-md-4
                py-3
                px-4
                rounded-pill
                d-flex
                flex-wrap
                justify-content-between
                align-items-center
              "
            >
              <input
                type="email"
                placeholder="Masukan email anda"
                class="form-controll text-center text-md-start"
                name="email"
                v-model="email"
                required
              />
              <button
                type="submit"
                class="
                  btn-lg btn
                  mx-auto
                  mt-4 mt-md-0
                  mx-md-0
                  py-2
                  px-3
                  rounded-pill
                  btn-subs
                "
                v-if="submitSend"
              >
                Subscribe
              </button>
              <div
                class="spinner-border text-danger mx-auto mx-md-0 mt-3 mt-md-0"
                role="status"
                v-if="submitLoad"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
            </form>
            <div class="clicked-subscribe text-white mt-5" v-if="submitDone">
              <h2>Yeay..Terimakasih sudah subscribe!</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- SUBSCRIPTION -->

    <!-- BANNER -->
    <b-modal
      ref="myBanner"
      size="lg"
      hide-header-close
      hide-header
      centered
      hide-footer
      class="position-relative"
      body-class="p-1 p-lg-2"
    >
      <a href="https://wa.link/52x60n">
        <img
          src="./../assets/image/banner.webp"
          class="img-fluid"
          alt="catering banjarbaru catering banjarmasin"
        />
      </a>

      <box-icon
        type="solid"
        size="lg"
        color="#fcca03"
        class="position-absolute top-0 end-0"
        name="x-circle"
        style="cursor: pointer"
        @click="hideModal"
      ></box-icon>
    </b-modal>
    <Footer />
  </div>
</template>

<script>
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import "boxicons";
import axios from "axios";
import Avatar from "vue-avatar";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation]);
// Import Swiper styles
import "swiper/swiper-bundle.css";

gsap.registerPlugin(TextPlugin);

export default {
  title: "Autoplay",
  components: {
    Swiper,
    SwiperSlide,
    Navbar: () => import("./../components/Navbar.vue"),
    Footer: () => import("./../components/Footer.vue"),
    Avatar,
  },
  directives: {
    swiper: directive,
  },
  mounted() {
    // GSAP
    gsap.to(".heading-home", {
      duration: 3,
      delay: 0.5,
      text: "Tumpeng and Catering Services",
    });
    setTimeout(() => {
      this.$refs.myBanner.show();
    }, 4000);
  },
  data() {
    return {
      email: "",
      testies: [],
      submitSend: true,
      submitLoad: false,
      submitDone: false,

      // SwiperJS
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,

        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      swiperOptionBlog: {
        breakpoints: {
          320: {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },

        centeredSlides: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".chevron-right-circle",
          prevEl: ".chevron-left-circle",
        },
      },
    };
  },
  methods: {
    sendGSpread() {
      const form = document.forms["subscribe"];
      this.submitSend = false;
      this.submitLoad = true;
      let scriptURL =
        "https://script.google.com/macros/s/AKfycbwcgiP-InGYrNUJfEZcLxrvt4T1WTwkEiGdiYs2dYh8odbTr4zXyc73vGZ-6NyFUNNV3g/exec";
      fetch(scriptURL, { method: "POST", body: new FormData(form) }).then(
        (response) => {
          console.log("Success!", response);
          this.submitLoad = false;
          this.email = null;
          this.submitDone = true;
        }
      );
    },
    hideModal() {
      this.$refs["myBanner"].hide();
    },
  },

  created() {
    axios.get("https://api.banuatumpeng.com/api/testimoni").then((response) => {
      this.testies = response.data.data;
    });
  },
};
</script>

<style scoped>
@import "./../assets/css/app.css";
</style>