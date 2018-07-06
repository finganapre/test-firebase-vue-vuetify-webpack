<template>
<div class="MainFooter">
	<v-footer
	      dark
	      height="auto"
	      width="100%"
	    >
	      <v-card
	        flat
	        tile
	        class="indigo lighten-1 white--text text-xs-center flex"
	      >
	        <v-card-text>
	          <v-btn
	            v-for="icon in icons"
	            :key="icon"
	            class="mx-3 white--text"
	            icon
	          >
	            <v-icon size="24px">{{ icon }}</v-icon>
	          </v-btn>
	        </v-card-text>
	  
	        <!--<v-card-text class="white--text pt-0">
	          
	        </v-card-text>-->
	  
	        <v-divider></v-divider>
	  
	        <v-card-text class="white--text">
	          &copy;2018 — <strong>ТЕТА</strong>
	        </v-card-text>
	      </v-card>
	    </v-footer>
</div>
	
</template>

<script>
	export default {
		data: () => ({
		    icons: [
		      'fab fa-facebook',
		      'fab fa-twitter',
		      'fab fa-google-plus',
		      'fab fa-linkedin',
		      'fab fa-instagram'
		    ]
		  })
	}
</script>

<style scoped>
	.MainFooter{
		background-color: #D8D8D8;
	}
</style>