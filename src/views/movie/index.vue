<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <PageHeader msg="神影电影"/>
	<MovieTab></MovieTab>
	<TabBar></TabBar>
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue'
import TabBar from '@/components/TabBar.vue'
import MovieTab from '@/components/MovieTab.vue'

export default {
  name: 'HomeView',
  components: {
    PageHeader,
	TabBar,
	MovieTab
  }
}
</script>
