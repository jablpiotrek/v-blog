<template>
  <div
    id="particles-backround"
    class="particles-backround"
  />
</template>

<script>
import 'particles.js'
import particlesConfig from '../assets/config/particles.js'

export default {
  name: 'ParticlesBackground',
  mounted() {
    window.particlesJS('particles-backround', particlesConfig)
  }
}
</script>

<style>
.particles-backround {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
