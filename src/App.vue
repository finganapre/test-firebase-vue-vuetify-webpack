<template>
  <div id="app" class="wrapper font-weight-regular">
    <!-- <img src="./assets/logo.png"> -->
    <v-app>

      <div class="content">
        <MainHeader/>
        <router-view/>
      </div>
      <MainFooter/>
      
    </v-app>
    

    
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import MainFooter from '@/components/MainFooter'

export default {
  name: 'App',
  components: {
    MainHeader: MainHeader,
    MainFooter: MainFooter
  }
}
</script>

<style>
  div#app{
    
  }
  .wrapper{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  .content{
    flex: 1;
  }
</style>
