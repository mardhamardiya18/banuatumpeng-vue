<template>
  <footer class="footer pt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col1">
          <div class="logo-footer d-flex align-items-center mb-4">
            <img
              src="./../assets/image/logo.png"
              width="90"
              class="rounded-circle"
              alt=""
            />
            <h3 class="ms-3">BANUA<br />TUMPENG</h3>
          </div>
          <a href="mailto:admin@banuatumpeng.com" class="email"
            >admin@banuatumpeng.com</a
          >
          <p>0851-5625-3408</p>
          <div class="sosmed-icon mt-5">
            <a
              href="https://api.whatsapp.com/send?phone=6285156253408&text=Hallo%20kak,%20saya%20tertarik%20dengan%20produknya,%20bagaimana%20cara%20pesannya%20kak?"
              ><i class="bx bxl-whatsapp"></i
            ></a>
            <a href="https://instagram.com/banuatumpeng"
              ><i class="bx bxl-instagram-alt mx-2"></i
            ></a>
            <a href="#"><i class="bx bxl-facebook-circle"></i></a>
          </div>
        </div>
        <div class="col-md-3 col-lg-2 col2 py-4">
          <h3 class="mb-4">Pelayanan</h3>

          <p>Tumpeng Besar</p>
          <p>Tumpeng Mini</p>
          <p>Nasi Kotak</p>
          <p>Box Bento</p>
          <p>Prasmanan</p>
        </div>
        <div class="col-md-3 col-lg-2 col3 py-4">
          <h3 class="mb-4">Informasi</h3>

          <a data-bs-toggle="collapse" href="#jamkerja" role="button"
            >Jam Kerja
            <div class="collapse" id="jamkerja">
              <div class="card card-body bg-light">
                <b>FULL DAY</b>
                Pian kawa haja chat kami kapanpun😊😊
              </div>
            </div>
          </a>
          <a data-bs-toggle="collapse" href="#ketentuan" role="button"
            >Ketentuan Umum
            <div class="collapse" id="ketentuan">
              <div class="card card-body bg-white">
                Min 25 pcs Pemesanan😊😊
              </div>
            </div>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=6285156253408&text=Hallo%20kak,%20saya%20tertarik%20dengan%20produknya,%20bagaimana%20cara%20pesannya%20kak?"
            >Kontak</a
          >
          <a href="#" data-bs-toggle="modal" data-bs-target="#modalPesan"
            >Cara Pesan</a
          >
        </div>
        <div class="col-md-4 col-lg-2 col4 py-4">
          <h3 class="mb-4">Alamat</h3>
          <p>
            Komp Putra Tunggal Mandiri Jl.H.Tanda Blok.D No.06 kel.Landasan Ulin
            Tengah Kec.Liang Anggang Kota Banjarbaru 085156253408
          </p>

          <a href="https://goo.gl/maps/65ti3np32anrY4vH9"
            ><img src="./../assets/image/maps.svg" width="30" alt="" /> Google
            Map</a
          >
        </div>
      </div>
      <div class="row">
        <div class="col col-copy text-center">
          <p>
            &copy;Copyright 2021 All Right Reserved | Built by
            <b>Developer Banuatumpeng</b>
          </p>
        </div>
      </div>
    </div>
    <!-- Modal Cara Pesan -->
    <div
      class="modal fade"
      id="modalPesan"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div
          class="modal-content text-light"
          style="background-color: rgb(158, 35, 35)"
        >
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Cara Pemesanan</h5>
          </div>
          <div class="modal-body">
            <ul>
              <li>1. Hubungi kami melalui whatsapp 0851-5625-3408</li>
              <li class="mt-2">
                2. Tentukan pilihan paket pesanan pian dan pilih juga pilihan
                menu gasan paket pemesananya
              </li>
              <li class="mt-2">
                3. Mengisi formulir pemesanan dan lakukan pembayaran Uang Muka
                (DP)
              </li>
              <li class="mt-2">
                4. Jika sudah membayar DP pesanan akan kami kerjakan dan kami
                antar😊
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn text-white"
              style="background-color: #ecac5d"
              data-bs-dismiss="modal"
            >
              Oke Paham
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
@import "./../assets/css/app.css";
</style>
