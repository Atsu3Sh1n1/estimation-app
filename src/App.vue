<template>
  <router-view />
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: '一般社団法人 全国プラント配管工事見積協会',
  meta: [
    {
      name: 'description',
      content: '全国プラント配管工事見積協会が提供する見積支援ツール。呼び径・スケジュール別に継手および配管の重量を正確に自動算出します。'
    },
    {
      name: 'keywords',
      content: '配管見積, プラント配管, JIS規格, 継手重量, SGP, STPG, Sch40, Sch80'
    },
    {
      property: 'og:title',
      content: '一般社団法人 全国プラント配管工事見積協会｜JIS対応見積支援'
    },
    {
      property: 'og:description',
      content: 'JIS規格に準拠した継手・配管重量計算機能を備えた見積支援システム。全国の配管工事業者の業務効率化を支援します。'
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
