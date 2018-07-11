<template>
<div class="MainHeader">
	<v-toolbar dark color="primary">
	     <v-toolbar-side-icon @click="$emit('changeMainNavState')"></v-toolbar-side-icon>
	 
	     <v-toolbar-title class="white--text">
		     <router-link to="/">
			     <h1 class="stName">{{siteName}}</h1>
			     <span class="stDscr">{{ siteDescription }}</span>
		     </router-link>
	     </v-toolbar-title>
	 
	     <v-spacer></v-spacer>
	 
	     <v-btn icon>
	       <v-icon>search</v-icon>
	     </v-btn>

	 	 <v-menu offset-y>
		     <v-btn
				slot="activator"
		        icon
		     >
		       <v-icon>apps</v-icon>
		     </v-btn>

			 <v-list>
	           <v-list-tile
	             v-for="(item, index) in appsList"
	             :key="index"
	             :to="item[2]"
	             @click="$emit('openAppMenu')"
	           >
	             <v-list-tile-title>{{ item[0] }}</v-list-tile-title>
	           </v-list-tile>
	         </v-list>
		</v-menu>
	 
	     <v-btn icon>
	       <v-icon>refresh</v-icon>
	     </v-btn>
	 
	     <v-btn icon>
	       <v-icon>more_vert</v-icon>
	     </v-btn>
	   </v-toolbar>
</div>
	
</template>

<script>
	export default {
		props: {
			siteName: String,
			siteDescription: String,
			appsList: Array
		},
		data: () => ({
			items: [
			      { title: 'Click Me' },
			      { title: 'Click Me' },
			      { title: 'Click Me' },
			      { title: 'Click Me 2' }
			]
		}),
		computed:{
			dscrLCase(){
				return this.siteDescription.toLowerCase();
			}
		}
	}
</script>

<style scoped>
	.stName{
		display: inline;
		text-transform: uppercase;
		color: white;
	}
	.stDscr{
		color: white;
		text-transform: lowercase;
	}
</style>