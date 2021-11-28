<template>
  <main class="py-5 rounded-3">
    <div class="container">
      <div class="row text-center mb-5">
        <div class="col">
          <h3 class="heading-testi">
            Berikan Kami Penilaian Mengenai Kepuasan Anda😃
          </h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 mx-auto">
          <form @submit.prevent="store" id="contactForm" v-if="!message">
            <!-- Name input -->
            <div class="mb-3">
              <input
                class="form-control"
                id="name"
                type="text"
                placeholder="Nama"
                required
                v-model="testi.nama"
              />
            </div>

            <!-- Email address input -->
            <div class="mb-3">
              <input
                class="form-control"
                id="emailAddress"
                type="text"
                required
                placeholder="Alamat contoh: Banjarbaru,Cindai alus,Landasan ulin.."
                v-model="testi.alamat"
              />
            </div>

            <!-- Message input -->
            <div class="mb-3">
              <textarea
                class="form-control"
                id="message"
                type="text"
                placeholder="Berikan komentar anda disini😇"
                style="height: 10rem"
                v-model="testi.konten"
              ></textarea>
            </div>

            <!-- Form submit button -->
            <div class="d-grid">
              <button
                v-if="testiSend"
                class="btn btn-testi btn-lg"
                type="submit"
              >
                Kirim
              </button>
            </div>
            <div class="d-flex justify-content-center">
              <div
                v-if="testiLoad"
                class="spinner-border text-danger"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </form>
          <div class="message text-center" v-if="message">
            <h1>Terimakasih Atas Testimoninya</h1>
            <p>Ditunggu orderan berikutnya😇</p>

            <router-link to="/" class="btn btn-danger"
              >Kembali ke beranda</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
// Import Sweetalert
import Swal from "sweetalert2";
window.Swal = Swal;

export default {
  data() {
    return {
      testi: {},
      message: false,
      testiSend: true,
      testiLoad: false,
    };
  },
  methods: {
    store() {
      this.testiSend = false;
      this.testiLoad = true;
      axios
        .post("https://api.banuatumpeng.com/api/testimoni", this.testi)
        .then((response) => {
          Swal.fire(
            "Yeay Terimakasih!",
            "Testi anda berhasil tersimpan",
            "success"
          );
          console.log("Oke testi tersimpan!!", response);
          this.testi = [];
          this.testiLoad = false;
          this.message = true;
        });
    },
  },
};
</script>

<style scoped>
:root {
  /* color */
  --maroon-color: #911f27;
  --orange-color: #ecac5d;
  --body1-color: #fcf0c8;
  --body2-color: #fffae1;

  /* font */
  --main-font: "Roboto", sans-serif;
  --heading-font: "Raleway", sans-serif;
}
main {
  margin-top: 200px;
  background-color: var(--body2-color);
}
.heading-testi {
  font-family: var(--heading-font);
  font-weight: 700;
}
.btn-testi {
  background-color: var(--orange-color) !important;
  color: white !important;
}
.footer {
  background-color: var(--body1-color);
}
@media screen and (max-width: 576px) {
  main {
    margin-top: 150px;
  }
}
</style>