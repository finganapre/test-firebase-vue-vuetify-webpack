<template>
  <div id="app">
     
    <v-app>
    <MainNavbar
      v-bind:drawer="mainNavbarDrawer"
      v-bind:items="mainNavbarMenuList"
    >
    </MainNavbar>
    <div class="wrapper">
      <!-- <img src="./assets/logo.png"> -->
      
        

        <div class="content">
          <MainHeader
            v-bind:siteName="siteName"
            v-bind:siteDescription="siteDescription"
            
            
            @changeMainNavState="openCloseMainNav"
          >
          </MainHeader>
          <router-view/>
        </div>

        <MainFooter/>

      
    </div>
    </v-app>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import MainNavbar from '@/components/MainNavbar'
import MainFooter from '@/components/MainFooter'

export default {
  name: 'App',
  data(){
    return {
      siteName: 'Тета',
      siteDescription: 'веб-сервисы',

      mainNavbarDrawer: null,
      mainNavbarMenuList: [
        {title: 'Home', icon: 'dashboard'},
        {title: 'About', icon: 'question_answer'}
      ]
    }
  },
  methods:{
    openCloseMainNav(){
      this.mainNavbarDrawer = !(this.mainNavbarDrawer);
    }
  },
  components: {
    MainHeader: MainHeader,
    MainNavbar: MainNavbar,
    MainFooter: MainFooter
  }
}
</script>

<style>
  div#app{
    font-size: 16px;
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
