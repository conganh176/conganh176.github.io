<template>
  <div class="container">
    <appHeader></appHeader>
    <hr>
    <serverStatus></serverStatus>
    <hr>
    <appFooter></appFooter>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import Footer from './Footer.vue'
  import ServerStatus from './ServerStatus.vue'
  export default {
    components: {
      'appHeader': Header,
      'appFooter': Footer,
      'serverStatus': ServerStatus
    }
  }
</script>
