<template>
  <header>
    <nav
      class="navbar navbar-expand-lg py-lg-0 p-0 navbar-light fixed-top"
      id="navbar-example2"
    >
      <div class="container">
        <router-link class="navbar-brand" :to="{ name: 'home' }">
          <img
            src="./../assets/image/logo.png"
            width="100"
            class="p-1 rounded-circle"
            alt=""
          />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav m-auto">
            <a class="nav-link active" href="#home">Beranda</a>
            <a class="nav-link" href="#about">Tentang Kami</a>
            <a class="nav-link" href="#service">Pelayanan</a>
            <a class="nav-link" href="#menu">Produk</a>
            <a class="nav-link" href="#testi">Testimoni</a>
            <a class="nav-link" href="#blog">Artikel & News</a>
          </div>

          <router-link
            :to="{ name: 'katalog' }"
            class="
              text-decoration-none
              btn-catalog btn-lg
              d-flex
              my-5
              m-lg-0
              justify-content-center
              align-items-center
              rounded-pill
              px-4
              py-3
            "
            ><i class="bx bxs-cart me-2"></i> Katalog</router-link
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
require("../assets/js/script");
</script>

<style>
/* NAVBAR START */
.navbar {
  background-color: var(--body1-color);
  transition: 0.4s ease-in-out;
}
.navbar.show {
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.137);
  transition: 0.4s ease-in-out;
}
.navbar .navbar-nav a {
  font-size: 18px;
  font-family: var(--heading-font);
  font-weight: 500;
  margin: 0 25px;
}
.navbar .navbar-nav a.active {
  font-weight: 800;
  color: var(--orange-color) !important;
}
.navbar .btn-catalog {
  background-color: var(--orange-color);
  font-family: var(--heading-font);
  font-weight: 600;
  transition: 0.3s ease-in-out;
  color: #fff;
}
.navbar .btn-catalog i {
  font-size: 1.7rem;
}
.navbar .btn-catalog:hover {
  background-color: #fff;
  color: var(--orange-color);
  transition: 0.3s ease-in-out;
}
.btn-search {
  background-color: var(--orange-color) !important;
  border: none !important;
}

box-icon {
  color: var(--orange-color) !important;
}
form input {
  border: none !important;
}

/* NAVBAR END */
</style>