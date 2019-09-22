<template>
  <div class="mid">
    <img :src="expMid" alt="exp" />
    <p>
      Mid
    </p>
  </div>
</template>

<script>
export default {
  name: 'LaneExpMid',
  props: ['expMid']
}

</script>
