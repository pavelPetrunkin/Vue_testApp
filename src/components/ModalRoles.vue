<template>
  <div>
    <div v-for="(role,index) in rolesReverser()" :key="index" class="circle-roles">
      <img :src="role" alt="">
    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'ModalRoles',
  props: ['characters', 'selectorIndex'],
  mounted () {
  },
  computed: {
  },
  methods: {
    rolesReverser () {
      let roles = []
      this.characters.forEach((item, i) => {
        if (i !== this.selectorIndex) {
          roles.push(item.role)
        }
      })
      return roles
    }
  }
}
</script>

<style scoped>
  .circle-roles {
    border: 2px solid black;
    border-radius: 20px;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background: black;
  }

  .circle-roles div {
    display: flex;
  }
</style>
