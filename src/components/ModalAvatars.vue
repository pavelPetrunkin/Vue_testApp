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
      let avatars = []
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .avatars {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .avatars img {
    position: absolute;
  }

  .avatars img:nth-child(1) {
    top: 150px;
  }
  .avatars img:nth-child(2) {
    top: 100px;
  }
  .avatars img:nth-child(3) {
    top: 50px;
  }
  .avatars img:nth-child(4) {
    top: 0;
  }

</style>
