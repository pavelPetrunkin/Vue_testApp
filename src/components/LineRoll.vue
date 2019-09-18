<template>
  <div class="circle">
    <div class="role-tank" v-show="showTank"></div>
    <div class="role-damage" v-show="showDamage">
      <div class="part1"></div>
      <div class="part2"></div>
      <div class="part3"></div>
    </div>
    <div class="role-support" v-show="showSupport"></div>
  </div>

</template>

<script type="text/javascript">

  function checkTank(role) {
      return role === 'tank';
  }
  function checkDamage(role) {
      return role === 'damage';
  }
  function checkSupport(role) {
      return role === 'support';
  }

    export default {
        name: 'LineRoll',
        props: ['role'],
        mounted () {
            console.log(this.role);
        },
        computed: {
            showTank() {
                return checkTank(this.role)
            },
            showDamage() {
                return checkDamage(this.role)
            },
            showSupport() {
                return checkSupport(this.role)
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
  }

  .role-damage {
    position: absolute;
    width: 16px;
    height: 16px;
    top: 12px;
    left: 12px;
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
