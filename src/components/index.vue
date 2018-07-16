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
		padding-left: 25px;
		border: 1px solid #f1efef;
		font-size: 13px;
		text-align: left;
	}
	.el-button:hover {
		background-color: #cacaca;
	}

	.el-button:first-child {
		border-top: 1px solid #dcdfe6;
	}
	.el-main{
		padding: 0 ;
		border-left: 1px solid #8aa0ab;
		/*height: 100%;*/
		position: absolute;
    top: 88px;
    left: 231px;
    bottom: 0;
    right: 0;
	}
	.el-aside{
		overflow: visible;
		background-color: #f7f7f7;
	}
	.router-link-active{
		background-color: #e1e1e1;
		/*background: -webkit-linear-gradient(#e1e1e1, #cacaca);  Safari 5.1 - 6.0 */
		/*background: -o-linear-gradient(#e1e1e1, #cacaca);  Opera 11.1 - 12.0 */
		/*background: -moz-linear-gradient(#e1e1e1, #cacaca);  Firefox 3.6 - 15 */
		/*background: linear-gradient(#e1e1e1, #cacaca);  标准的语法 */
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
	.btn{
	  margin-left: 0;
	}
</style>
<style>
  .btn{
    margin-left: 0 !important;
  }
  .el-button+.el-button{
    margin-left: 0 !important;
  }
  .el-collapse-item__content{
    padding-bottom: 0 !important;
  }
  .el-collapse-item__header{
    padding-left: 20px;
  }
  .taskmid {
    padding: 10px;
    /*border: 1px solid red;*/
  }
  .taskmid>table {
    width: 100%;
    margin: 0 auto;
    text-align: left;
    /*border: 1px solid red;*/
  }
  .taskmid>table>tr {
    border: 1px solid #e3e3e3;
  }
  .taskmid>table>tr:hover{
    background-color: #ededed;
  }
  .taskmid>table>tr>th {
    border: 1px solid #e3e3e3;
    color: #909399;
    background-color: #f3f3f3;
    font-size: 13px;
    font-weight: 600;
    padding: 10px;
  }
  .taskmid>table>tr>td {
    border: 1px solid #e3e3e3;
    padding: 0px 10px;
    font-size: 13px;
  }
</style>

<template>
	<div id="app">
		<headTop></headTop>
		<div class="beforee"></div>
		<el-container>
			<el-aside width="230px">
				<el-collapse v-model="activeName" accordion>
					<el-collapse-item :title="$t('voiceIndex.taskManager')" name="ccc" style="text-align: left;" key="1"><!--//任务管理-->
						<router-link class="btn" to="/taskM" tag="el-button"><!---->
							<i class="fa fa-tasks fa-lg"></i>&nbsp;&nbsp;&nbsp;{{$t('voiceIndex.taskManager')}}
						</router-link>
					</el-collapse-item>
					<el-collapse-item :title="$t('voiceIndex.identResultManager')" name="aaa" style="text-align: left;" key="2"><!--//识别结果管理-->
						<router-link class="btn" to="/result" tag="el-button"><!---->
							<i class="fa fa-list fa-lg"></i>&nbsp;&nbsp;&nbsp;{{$t('voiceIndex.identResultManager')}}
						</router-link>
					</el-collapse-item>
					<el-collapse-item :title="$t('voiceIndex.modelManager')" name="bbb" style="text-align: left;" key="3"><!--//模型管理-->
						<router-link class="btn" to="/home" tag="el-button"><!---->
              <i class="fa fa-volume-up fa-lg"></i>&nbsp;&nbsp;&nbsp;{{$t('voiceIndex.voiceModle')}}<!--声纹模型-->
            </router-link>
						<router-link class="btn" to="/drill" tag="el-button"><!---->
              <i class="fa fa-language fa-lg"></i>&nbsp;&nbsp;&nbsp;{{$t('voiceIndex.languageModle')}}<!--语种模型-->
            </router-link>
						<router-link class="btn" to="/disindex" tag="el-button"><!---->
              <i class="fa fa-venus-mars fa-lg"></i>&nbsp;&nbsp;&nbsp;{{$t('voiceIndex.genderModle')}}<!--性别模型-->
            </router-link>
						<router-link class="btn" to="/homeTwo" tag="el-button"><!---->
              <i class="fa fa-key fa-lg"></i>&nbsp;&nbsp;&nbsp;{{$t('voiceIndex.keywordModle')}}<!--关键词模型-->
            </router-link>
            <router-link class="btn" to="/voice" tag="el-button">
              <i class="fa fa-list fa-lg"></i>&nbsp;&nbsp;&nbsp;{{$t('voiceIndex.voiceIndex')}}
            </router-link>
					</el-collapse-item>
					<el-collapse-item title="参数配置" name="ddd" style="text-align: left;" key="4">
            <router-link class="btn" to="/config" tag="el-button">
              <i class="fa fa-list fa-lg"></i>&nbsp;&nbsp;&nbsp;{{$t('voiceIndex.voiceIndex')}}
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
