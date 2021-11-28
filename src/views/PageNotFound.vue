<template>
  <div class="NotFound">
    <Navbar />
    <div class="container mt-5">
      <div class="row">
        <div
          class="
            col
            justify-content-center
            d-flex
            align-items-center
            flex-column
          "
        >
          <img src="./../assets/image/PNF.webp" class="img-fluid" alt="" />
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
  name: "PageNotFound",
  components: {
    Navbar: () => import("./../components/Navbar.vue"),
    Footer: () => import("./../components/Footer.vue"),
  },
};
</script>

<style scoped>
.col {
  height: 700px;
}
</style>