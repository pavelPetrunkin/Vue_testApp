<template>
  <div class="avatars">
    <img v-for="(avatar,index) in avatarReverser()" :key="index" :src="avatar" alt="">
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'ModalAvatars',
  props: ['characters', 'selectorIndex'],
  methods: {
    avatarReverser () {
      let avatars = [];
      this.characters.forEach((item, i) => {
        if (i !== this.selectorIndex) {
          avatars.push(item.avatar)
        }
      })
      return avatars.reverse()
    }
  }
}
</script>

<style scoped lang="scss">
  .avatars {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    img {
      position: absolute;
      &:nth-child(1) {
        top: 150px;
      }
      &:nth-child(2) {
        top: 100px;
      }
      &:nth-child(3) {
        top: 50px;
      }
      &:nth-child(4) {
        top: 0;
      }
    }
  }
</style>
