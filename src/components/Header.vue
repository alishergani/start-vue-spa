<template>
	<div id="header">
		<ul class="navbar">
			<li class="nav-item item-1"
					v-for="item in navbarItems">
				<router-link :to="item.to" >{{ item.name }}</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				navbarItems: [
					 { name:'Home', to: '/' },
					 { name:'About', to: '/about' },
					 { name:'Posts', to: '/posts' },
					 { name:'Contacts', to: '/contacts' }
				]
			}
		}
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}
	* a,
	* li{
		color: inherit;
		text-decoration: none;
		list-style: none;
	}
	ul.navbar {
		display: flex;
		justify-content: center;
		background-color: #3949AB;
		color: #fff;
	}
	ul.navbar a {
		font-weight: 600;
		text-transform: uppercase;
		line-height: 50px;
		padding: 0 20px;
		transition: .2s;
	}
	ul.navbar a:hover {
		opacity: .8;
	}
	ul.navbar a:active {
		opacity: .4;
	}
</style>