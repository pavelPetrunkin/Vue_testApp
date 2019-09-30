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
