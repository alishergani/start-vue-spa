<template>
	<div id="footer">
		<div class="developer">
			<p>Alisher MELDEBEK</p>
		</div>
		<div class="tel">
			<p>
				<a href="tel:+77073495572">+77073495572</a>
			</p>
		</div>
		<div class="copy">
			<p>
				@copyright {{ new Date().getFullYear() }}
			</p>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				
			}
		}
	}
</script>

<style>
	#footer {
		width: 100%;
		display: flex;
		justify-content: space-around;
		background-color: #3949AB;
	}
	#footer div p {
		line-height: 50px;
		color: #fff;
	}
</style>