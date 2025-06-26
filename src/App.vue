<template>
  <router-view />
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: '配管継手・フランジ重量計算｜JIS・スケジュール別の簡単見積',
  meta: [
    {
      name: 'description',
      content: 'JIS規格・スケジュール別に継手やフランジの重量を自動計算。配管見積がすぐにできるプロ向けツール。TIG・アーク溶接対応で工数も同時に算出可能。'
    },
    {
      name: 'keywords',
      content: '配管見積, 継手重量, フランジ重量, JIS管, SGP, STPG, Sch40, Sch80, TIG溶接, アーク溶接'
    },
    {
      property: 'og:title',
      content: '配管継手・フランジ重量計算｜プロ向け見積ツール'
    },
    {
      property: 'og:description',
      content: '配管設計・見積に必須。フランジ・エルボ・レジューサの重量と工数を自動算出。JIS・スケジュール対応。'
    },
    {
      property: 'og:image',
      content: '/images/pipe-estimator-ogp.png'  // SNS向けに訴求力あるビジュアルを用意
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
