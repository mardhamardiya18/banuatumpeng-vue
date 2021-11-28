<template>
  <div id="app">
    <div
      class="
        sosmed
        position-fixed
        top-50
        d-lg-flex
        flex-column
        translate-middle-y
        d-none
      "
    >
      <a
        href="https://wa.link/ocl02u"
        class="whatsapp d-flex align-items-center ps-2 rounded-end"
      >
        <box-icon
          type="logo"
          size="md"
          class="position-absolute"
          color="#fff"
          name="whatsapp"
        ></box-icon>
        <p class="mt-3 text-white ms-5">Whatsapp</p>
      </a>
      <a
        href="https://instagram.com/banuatumpeng"
        class="instagram d-flex align-items-center ps-2 rounded-end"
      >
        <box-icon
          name="instagram-alt"
          class="position-absolute"
          color="#fff"
          size="md"
          type="logo"
        ></box-icon>
        <p class="mt-3 text-white ms-5">Instagram</p>
      </a>
      <a
        href="https://www.facebook.com/banuatumpeng/"
        class="
          facebook
          position-relative
          ps-2
          d-flex
          align-items-center
          rounded-end
        "
      >
        <box-icon
          name="facebook"
          class="position-absolute"
          size="md"
          color="#fff"
          type="logo"
        ></box-icon>
        <p class="mt-3 text-white ms-5">Facebook</p>
      </a>
    </div>
    <div class="icon-wa p-3 position-fixed bottom-0 end-0 d-lg-none">
      <a
        href="https://wa.link/ocl02u"
        class="
          d-flex
          justify-content-center
          align-items-center
          rounded-pill
          p-2
        "
      >
        <box-icon
          name="whatsapp"
          type="logo"
          size="md"
          color="#ffffff"
        ></box-icon>
      </a>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import "boxicons";
export default {
  name: "App",
};
</script>

<style>
@import "./assets/css/app.css";
</style>
