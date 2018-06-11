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
		<!--<button @click="funnn">666666</button>-->
	</div>
</template>

<script>
	import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
	import NextClass from './NextClass/NextClass'
	export function getCardStatus(type) {
		return axios.get(config.getSummerCardStatus, {
			params: {
				type: type
			}
		}).then((res) => {
			return Promise.resolve(res.data)
		})
	}
	export default {
		components: {
			Breadcrumb,
			NextClass
		},
		data() {
			return {
				
			}
		},
		methods: {
			funnn(){
				alert(666)
				axios.get('http://192.168.1.118/login?username=1123&password=11232').then(res => {
					console.log(res);
				}).catch(error => console.log(error));
			}
		}
	}
</script>