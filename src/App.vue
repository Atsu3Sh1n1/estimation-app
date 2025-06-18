<template>
  <router-view />
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'プラント配管見積システム｜JIS B 2311 対応・継手重量計算',
  meta: [
    {
      name: 'description',
      content: 'JIS B 2311、JIS G 3452 に準拠した配管見積支援ツール。呼び径やスケジュール別に継手・パイプ重量を自動算出。'
    },
    {
      name: 'keywords',
      content: 'JIS B 2311, 継手重量, プラント配管, 配管見積, SGP, Sch40, Sch80'
    },
    {
      property: 'og:title',
      content: 'プラント配管見積システム｜JIS対応'
    },
    {
      property: 'og:description',
      content: 'プラント配管見積を効率化。JIS規格の重量計算に対応。'
    },
    {
      property: 'og:image',
      content: '/og-image.png'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script>

<style>
@import './style.css';
</style>
