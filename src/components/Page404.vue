<template>
	<v-container grid-list-xl>
	<h3>Ошибка 404</h3>
	<p>Запрашиваемая страница <span>{{ pagePath }}</span> не существует на нашем сайте, вернитесь на <router-link :to="'/'">главную страницу</router-link></p>
	</v-container>
</template>

<script>
	export default {
		name: 'Page404',
		date(){
			return {

			}
		},
		computed: {
			pagePath(){
				console.log(this.$route);
				return this.$route.fullPath;
			}
		}
	}
</script>

<style scoped>
	
</style>