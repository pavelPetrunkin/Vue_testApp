<template>
  <div class="early">
    <img  :src="expEarly" alt="exp" />
    <p>
      Early
    </p>
  </div>
</template>

<script>
export default {
  name: 'LaneExpEarly',
  props: ['expEarly']
}
</script>
