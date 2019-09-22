<template>
  <div>
    <p>
      Late
    </p>
    <img :src="expLate" class="lane-exp" alt="exp" />
  </div>
</template>

<script>
export default {
  name: 'LaneExpLate',
  props: {expLate}
}

</script>
