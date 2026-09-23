<!-- components/Spacer.vue -->
<script setup>
defineProps({
  // Allows you to optionally customize the size on the fly (e.g., size="20px")
  size: {
    type: String,
    default: '10px' // Default small extra space
  }
})
</script>

<template>
  <div :style="{ height: size }" aria-hidden="true"></div>
</template>