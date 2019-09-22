<template>
  <div class="late">
    <img :src="expLate" alt="exp" />
    <p>
      Late
    </p>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'LaneExpLate',
  props: ['expLate']
}
</script>
