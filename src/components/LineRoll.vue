<template>
  <div class="circle">
    <div class="role-tank" v-show="showTank"></div>
    <div class="role-damage" v-show="showKnight">
      <div class="part1"></div>
      <div class="part2"></div>
      <div class="part3"></div>
    </div>
    <div class="role-mage" v-show="showMage"></div>
    <div class="role-mage" v-show="showBeast"></div>

  </div>

</template>

<script type="text/javascript">

  function checkTank(role) {
      return role === 'tank';
  }
  function checkKnight(role) {
      return role === 'knight';
  }
  function checkBeast(role) {
      return role === 'beast';
  }
  function checkMage(role) {
      return role === 'mage';
  }

    export default {
        name: 'LineRoll',
        props: ['role'],
        mounted () {
        },
        computed: {
            showTank() {
                return checkTank(this.role)
            },
            showKnight() {
                return checkKnight(this.role)
            },
            showMage() {
                return checkMage(this.role)
            },
            showBeast() {
                return checkBeast(this.role)
            }
        },
        methods: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .circle {
    border: 2px solid black;
    border-radius: 20px;
    width: 36px;
    height: 36px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .role-damage {
    position: absolute;
    width: 16px;
    height: 16px;
  }

  .role-damage .part1 {
    position: absolute;
    clip-path: polygon(0 0, 0 88%, 17% 71%, 17% 17%, 72% 17%, 90% 0%);
    width: 100%;
    height: 100%;
    background: #B6B7C6;
    opacity: 0.5;
  }
  .role-damage .part2 {
    clip-path: polygon(100% 100%, 100% 8%, 82% 28%, 82% 82%, 26% 82%, 8% 100%);
    background: #B6B7C6;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .role-damage .part3 {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #B6B7C6;
    clip-path: inset(39% 37% 37% 38%);
  }



</style>
