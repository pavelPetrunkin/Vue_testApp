<template>
  <div :class="'circle' + checkRole()">
    <div>
      <img :src="role"/>
    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'LineRoll',
  props: ['role', 'selectorIndex'],
  methods: {
    checkRole () {
      if (this.selectorIndex === undefined) {
        return ''
      } else if (parseInt(this.selectorIndex) === 0) {
        return ' my-row role-modal'
      } else {
        return ' other-row role-modal'
      }
    }
  }
}
</script>
