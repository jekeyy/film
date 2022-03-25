<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <PageHeader msg="神影影院"/>
	<Cinema></Cinema>
	<TabBar></TabBar>
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue'
import TabBar from '@/components/TabBar.vue'
import Cinema from '@/components/Cinema.vue' 

export default {
  name: 'HomeView',
  components: {
    PageHeader,
	TabBar,
	Cinema
  }
}
</script>
