<template>
  <!-- error filing -->
  <div>
    <span>FILING PENDING</span>
    <UDivider orientation="vertical" :ui="{ border: { base: 'border-gray-600'} }" />
    <span v-if="inProcessFiling === todoItem.filingId">PROCESSING...</span>
    <span v-else>PAYMENT UNSUCCESSFUL</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  inProcessFiling: { type: Number, required: true },
  todoItem: { type: Object as PropType<TodoItemI>, required: true }
})
</script>

<style lang="scss" scoped>
</style>
