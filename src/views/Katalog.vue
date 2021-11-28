<template>
  <div class="katalog mt-5">
    <Navbar />
    <div class="container">
      <div class="row row-image">
        <div
          class="
            col
            d-flex
            justify-content-center
            align-items-center
            flex-column
          "
        >
          <div class="img-wrapper">
            <img
              src="./../assets/image/maintenance.webp"
              class="img-fluid"
              width="700"
              alt=""
            />
          </div>
          <router-link to="/" class="btn btn-danger mt-5"
            >Back to homepage</router-link
          >
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import("./../components/Navbar.vue"),
    Footer: () => import("./../components/Footer.vue"),
  },
};
</script>

<style scoped>
.row-image {
  height: 750px;
}

@media screen and (max-width: 500px) {
  .row-image {
    height: 650px;
  }
}
</style>