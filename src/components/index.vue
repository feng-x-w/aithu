<style scoped>
	#app {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
	}
	.el-button {
		border-radius: 0;
		width: 100%;
		margin-left: 0;
		border-left: none;
		border-right: none;
		border-top: none;
		background-color: #f7f7f7;
		color: rgb(0, 0, 0);
		padding-left: 10px;
		border: 1px solid #f1efef;
	}
	.el-button:first-child {
		border-top: 1px solid #dcdfe6;
	}
	.el-main{
		padding: 0 ;
		border-left: 1px solid #8aa0ab;
		height: 100%;
	}
	.el-aside{
		overflow: visible;
		background-color: #f7f7f7;
	}
	.router-link-active{
		/*background-color: #409eff;*/
		background: -webkit-linear-gradient(#e1e1e1, #cacaca); /* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(#e1e1e1, #cacaca); /* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(#e1e1e1, #cacaca); /* Firefox 3.6 - 15 */
		background: linear-gradient(#e1e1e1, #cacaca); /* 标准的语法 */
		/*color: rgb(191, 203, 217);
		border-left: 3px solid #343434;*/
	}
	.el-collapse-item__header{
		background-color: #F1F1F1;
	}
	.beforee{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		z-index: -10;
		background-color: #f7f7f7;
		width: 230px;
		height: 100%;
		border-right: 1px solid #aebdc4;
	}
</style>
<style>
  /*.el-collapse-item__header{
    background-clip: red;
  }*/
</style>

<template>
	<div id="app">
		<headTop></headTop>
		<div class="beforee"></div>
		<el-container>
			<el-aside width="230px">
				<el-collapse v-model="activeName" accordion>
					<el-collapse-item title="任务管理" name="ccc" style="text-align: center;" key="1">
						<router-link to="/home" tag="el-button"><!---->
							<span class="el-icon-star-on"></span>任务管理
						</router-link>
					</el-collapse-item>
					<el-collapse-item title="识别结果管理" name="aaa" style="text-align: center;" key="2">
						<router-link to="/homeTwo" tag="el-button"><!---->
							<span class="el-icon-star-on"></span>识别任务管理
						</router-link>
					</el-collapse-item>
					<el-collapse-item title="模型管理" name="bbb" style="text-align: center;" key="3">
						<router-link to="/home" tag="el-button"><!---->
              <span class="el-icon-star-on"></span>声纹模型
            </router-link>
						<router-link to="/homeTwo" tag="el-button"><!---->
              <span class="el-icon-star-on"></span>语种模型
            </router-link>
						<router-link to="/home" tag="el-button"><!---->
              <span class="el-icon-star-on"></span>性别模型
            </router-link>
						<router-link to="/homeTwo" tag="el-button"><!---->
              <span class="el-icon-star-on"></span>关键词模型
          </router-link>
					</el-collapse-item>
				</el-collapse>
			</el-aside>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</div>
</template>

<script>
	import headTop from "../components/header/header";
	export default {

		components: {
			headTop
		},
		data() {
			return {
				activeName: '1'
			}

		},
		methods:{
//			show(index){
//				console.log(index);
//			}
		}
	}
</script>
