<style scoped>
	.home {
		width: 100%;
	}
</style>

<template>
	<div class="home">
		<Breadcrumb>
			<span slot="one">{{$t('home_slot.slotOne')}}</span>
			<span slot="two">{{$t('home_slot.slotTwo')}}</span>
		</Breadcrumb>
		<NextClass></NextClass>
	</div>
</template>

<script>
	import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
	import NextClass from './NextClass/NextClass'
	export default {
		components: {
			Breadcrumb,
			NextClass
		}
	}
</script>