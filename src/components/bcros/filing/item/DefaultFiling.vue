<template>
  <BcrosFilingCommonTemplate :filing="filing" data-cy="default-filing">
    <!-- just use all fallback slots (see FilingTemplate.vue) -->
  </BcrosFilingCommonTemplate>
</template>

<script setup lang="ts">
import type { ApiResponseFilingI } from '#imports'

defineProps({
  filing: { type: Object as PropType<ApiResponseFilingI>, required: true }
})
</script>
