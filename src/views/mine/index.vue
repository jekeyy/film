<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <PageHeader msg="我的神影"/>
	<Mine></Mine>
	<TabBar></TabBar>
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue'
import TabBar from '@/components/TabBar.vue'
import Mine from '@/components/Mine.vue'

export default {
  name: 'HomeView',
  components: {
    PageHeader,
	TabBar,
	Mine
  }
}
</script>
