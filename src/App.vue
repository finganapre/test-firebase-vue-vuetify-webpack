<template>
	<div id="app">
	
		<v-app>
		<!-- Start NAVBAR -->
			<v-layout
				wrap
			>
			
				<v-navigation-drawer
					v-model="mainNavbarDrawer"
					absolute
					temporary
				>
					<v-list class="pa-1">
						<v-list-tile avatar>
							<v-list-tile-avatar>
								<img src="https://randomuser.me/api/portraits/men/85.jpg" >
							</v-list-tile-avatar>
							
							<v-list-tile-content>
								<v-list-tile-title>{{ userName }}</v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
					</v-list>
					
					<v-list class="pt-0" dense>
					<v-divider></v-divider>
					
					<v-list-tile
						v-for="item in mainNavbarMenuList"
						:key="item.title"
						:to="item.link"
						@click=""
					>
						<v-list-tile-action>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-tile-action>
						
						<v-list-tile-content>
							<v-list-tile-title>{{ item.title }}</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<!-- START Services -->
					<v-list-group
						prepend-icon="extension"
						
					>
						<v-list-tile slot="activator">
							<v-list-tile-title>Веб-приложения</v-list-tile-title>
						</v-list-tile>
						<v-list-tile
							v-for="(service, i) in mainNavbarMenuListServices"
							:key="i"
							@click=""
							:to="service[2]"
						>
							<v-list-tile-title
								v-text="service[0]"
							>
							</v-list-tile-title>
							<v-list-tile-action>
								<v-icon v-text="service[1]"></v-icon>
							</v-list-tile-action>
						</v-list-tile>
					</v-list-group>
					<!-- END Services -->
					</v-list>
				</v-navigation-drawer>
			</v-layout>
			<!-- End NAVBAR -->





			<div class="wrapper">
				<!-- <img src="./assets/logo.png"> -->
				<div class="content">

					<MainHeader
						v-bind:siteName="siteName"
						v-bind:siteDescription="siteDescription"
						@changeMainNavState="openCloseMainNav"
						@openAppMenu="openAppMenu"
						v-bind:appsList="mainNavbarMenuListServices"
					>
					</MainHeader>

					<!-- Start Dynamic Content -->
					<router-view/>
					<!-- End Dynamic Content -->

				</div>

				<MainFooter/>
				
			</div>
		</v-app>
	</div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
// import MainNavbar from '@/components/MainNavbar'
import MainFooter from '@/components/MainFooter'

export default {
	name: 'App',
	data(){
		return {
			siteName: 'Тета',
			siteDescription: 'веб-приложения',

			mainNavbarDrawer: null,
			userName: 'user name',

			mainNavbarMenuList: [
				{title: 'На главную', icon: 'home', link: '/'},
				{title: 'Контакты', icon: 'contacts', link: '/contacts'},
				{title: 'О нас', icon: 'business', link: '/about'},
				{title: 'Основной сайт', icon:'public', link: '/tetadesign'},
				{title: 'Проект Superclass', icon:'public', link: '/superclass'}
			],
			mainNavbarMenuListServices: [
				['Конструктор фотокниг', 'extension', '/designer-of-photobooks'],
				['Конструктор багетов', 'extension', '/baguette-designer']
			]

		}
	},
	methods:{
		openCloseMainNav(){
			this.mainNavbarDrawer = !(this.mainNavbarDrawer);
		},
		openAppMenu(){

		}
	},
	components: {
		MainHeader: MainHeader,
		// MainNavbar: MainNavbar,
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
