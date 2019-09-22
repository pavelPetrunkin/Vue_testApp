<template>
  <div>
    <p>
      Early
    </p>
    <img :src="expEarly" class="lane-exp" alt="exp" />
  </div>
</template>

<script>
export default {
  name: 'LaneExpEarly',
  props: {expEarly}
}

</script>
