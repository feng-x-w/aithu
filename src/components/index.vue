<style scoped lang="scss">
	#app {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
	}
	.el-main{
		padding: 0 ;
		border-left: 1px solid #8aa0ab;
		/*height: 100%;*/
		position: absolute;
    top: 88px;
    left: 231px;
		// left: 0;
    bottom: 0;
    right: 0;
	}
	.active{
		left: 0;
	}
	.el-container{
		height: 100%;
	}
	.el-aside{
		overflow: visible;
		height: 100%;
		background-color: #efefef;
		padding-top: 88px;
		position: relative;
		ul{
			width: 100%;
			height: 100%;
			overflow-x:auto;
			// background-color: #cacaca;
			&>li{
				width: 100%;
				padding: 15px 10px;
				background-color: #efefef;
				box-sizing: border-box;
				z-index: 55;
				position: relative;
				font-size: 13px;
			}
			&>ol{
				width: 100%;
				background-color: rgb(255, 255, 255);
				z-index: 54;
				overflow: hidden;
				position: relative;
				&>li{
					width: 100%;
					padding: 13px 20px;
    			box-sizing: border-box;
					font-size: 13px;
					// background-color: #d0d0d0;
				}
				&>li:hover{
					background-color: #cbe8ff;
				}
			}
		}
		.p{
			position: absolute;
			top: 57%;
			right: -13px;
			z-index: 55;
			background-color: #b2b2b285;
			font-size: 12px;
			color: #4a85af;
			padding: 15px 2px;
			border-top-right-radius: 13px;
			border-bottom-right-radius: 13px;
		}
		.p1{
			display: none;
		}
	}
	.el-aside:hover .p1{
		display: inline-block;
	}
	.router-link-active{
		background-color: #409eff;
		color: #f7f7f7;
	}
	.router-link-active:hover{
		background-color: #409eff !important;
		// color: #f7f7f7;
	}
	.el-collapse-item__header{
		background-color: #F1F1F1;
	}
	.ol1-leave-active,.ol2-leave-active,.ol3-leave-active,.ol4-leave-active,.ol5-leave-active{
		transition:  all .2s ease;
	}
	.ol1-leave-to,.ol2-leave-to,.ol3-leave-to,.ol4-leave-to,.ol5-leave-to{
		height: 0;
	}
	.ol1-leave,.ol2-leave{
		height: 42px;
	}
	.ol4-leave{
		height: 84px;
	}
	.ol3-leave{
		height: 210px;
	}
	.ol5-leave{
		height: 84px;
	}
	.i1,.i2,.i3,.i4,.i5{
		transition:  all .2s ease;
		transform: rotate(90deg);
	}
		.i11,.i22,.i33,.i44,.i55{
		transition:  all .2s ease;
		transform: rotate(0deg);
	}
	.ol1-enter-active,.ol2-enter-active,.ol3-enter-active,.ol4-enter-active,.ol5-enter-active{
		transition:  all .2s ease;
	}
	.ol1-enter-to,.ol2-enter-to{
		height: 42px;
	}
	.ol4-enter-to{
		height: 84px;
	}
	.ol3-enter-to{
		height: 210px;
	}
	.ol5-enter-to{
		height: 84px;
	}
	.ol1-enter,.ol2-enter,.ol3-enter,.ol4-enter,.ol5-enter{
		height:0;
	}
	.sty{
		font-size: 16px;
		float: right;
	}
</style>
<style>
  .el-button+.el-button{
    margin-left: 0 !important;
  }
  .el-collapse-item__content{
    padding-bottom: 0 !important;
  }
  .el-collapse-item__header{
    padding-left: 20px;
		height: 47px;
    line-height: 47px;
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
	.boxs {
    float: right;
    font-size: 14px;
    border: 1px solid #80808042;
    line-height: 10px;
    height: 10px;
    font-weight: 500;
    /* display: inline-block; */
    padding: 5px 6px;
  }
  .boxs:hover {
    border-color: #ff4b4b;
    background-color: #ffd9d9;
    color: #ad0000;
  }
	.boxstui:hover {
		border-color: #409eff;
    background-color: #b7daff;
    color: #409eff;
	}
</style>

<template>
	<div id="app">
		<headTop></headTop>
		<el-container>
			<el-aside :width="width">
				<ul>
					<li @click="li1">
						<i class="fa fa-tasks fa-lg fa-fw"></i>&nbsp;
						{{$t('voiceIndex.taskManager')}}
						<i :class="[rotate==1?'i1 fa fa-angle-right sty':'i11 fa fa-angle-right sty']"></i>
					</li>
					<transition name="ol1">
						<ol v-show="ol1">
							<router-link to="/taskM" tag="li"><!---->
								<i class="fa fa-tasks fa-lg fa-fw"></i>&nbsp;{{$t('voiceIndex.taskManager')}}
							</router-link>
						</ol>
					</transition>
					<li @click="li2">
						<i class="fa fa-list fa-lg fa-fw"></i>&nbsp;
						{{$t('voiceIndex.identResultManager')}}
						<i :class="[rotate==2?'i2 fa fa-angle-right sty':'i22 fa fa-angle-right sty']"></i>
					</li>
						<transition name="ol2">
						<ol v-show="ol2">
							<router-link to="/result" tag="li"><!---->
								<i class="fa fa-list fa-lg fa-fw"></i>&nbsp;{{$t('voiceIndex.identResultManager')}}
							</router-link>
						</ol>
						</transition>
					<li @click="li3">
						<i class="fa fa-volume-up fa-lg fa-fw"></i>&nbsp;
						{{$t('voiceIndex.modelManager')}}
						<i :class="[rotate==3?'i3 fa fa-angle-right sty':'i33 fa fa-angle-right sty']"></i>
					</li>
						<transition name="ol3">
						<ol v-show="ol3">
							<router-link to="/home" tag="li"><!---->
								<i class="fa fa-volume-up fa-lg fa-fw"></i>&nbsp;{{$t('voiceIndex.voiceModle')}}<!--声纹模型-->
							</router-link>
							<router-link to="/drill" tag="li"><!---->
								<i class="fa fa-language fa-lg fa-fw"></i>&nbsp;{{$t('voiceIndex.languageModle')}}<!--语种模型-->
							</router-link>
							<router-link to="/disindex" tag="li"><!---->
								<i class="fa fa-venus-mars fa-lg fa-fw"></i>&nbsp;{{$t('voiceIndex.genderModle')}}<!--性别模型-->
							</router-link>
							<router-link to="/homeTwo" tag="li"><!---->
								<i class="fa fa-key fa-lg fa-fw"></i>&nbsp;{{$t('voiceIndex.keywordModle')}}<!--关键词模型-->
							</router-link>
							<router-link to="/voice" tag="li">
								<i class="fa fa-list fa-lg fa-fw"></i>&nbsp;{{$t('voiceIndex.voiceIndex')}}
							</router-link>
						</ol>
						</transition>
					<li @click="li4">
						<i class="fa fa-gears fa-lg fa-fw"></i>&nbsp;
						权限管理
						<i :class="[rotate==4?'i4 fa fa-angle-right sty':'i44 fa fa-angle-right sty']"></i>
					</li>
						<transition name="ol4">
						<ol v-show="ol4">
							<router-link to="/organization" tag="li">
								<i class="fa fa-gears fa-lg fa-fw"></i>&nbsp;机构管理<!--权限管理 -->
							</router-link>
							<router-link to="/role" tag="li">
								<i class="fa fa-gears fa-lg fa-fw"></i>&nbsp;角色管理<!--权限管理 -->
							</router-link>
							<!-- <router-link to="/useradmin" tag="li">
								<i class="fa fa-gears fa-lg fa-fw"></i>&nbsp;权限管理
							</router-link> -->
						</ol>
						</transition>
					<li @click="li5">
						<i class="fa fa-gears fa-lg fa-fw"></i>&nbsp;
						{{$t('voiceIndex.systemConfig')}}
						<i :class="[rotate==5?'i5 fa fa-angle-right sty':'i55 fa fa-angle-right sty']"></i>
					</li>
						<transition name="ol5">
						<ol v-show="ol5">
							<router-link to="/nodeConfig" tag="li">
								<i class="fa fa-gears fa-lg fa-fw"></i>&nbsp;{{$t('voiceIndex.nodeConfig')}}<!--节点配置 -->
							</router-link>
							<router-link to="/parameterConfig" tag="li">
								<i class="fa fa-braille fa-lg fa-fw"></i>&nbsp;{{$t('voiceIndex.parameterConfig')}}<!--参数配置 -->
							</router-link>
						</ol>
						</transition>
							<p class="p p1" @click="vinish" v-show="vin"><i class="fa fa-chevron-left"></i></p>
							<p class="p" @click="dis" v-show="displ"><i class="fa fa-chevron-right"></i></p>
				</ul><!-- v-bind:class="{p1 : acti != $store.state.Item }"-->
				<!-- <el-collapse v-model="activeName" accordion>
					<el-collapse-item :title="$t('voiceIndex.taskManager')" name="ccc" style="text-align: left;" key="1">
						<router-link class="btn" plain to="/taskM" tag="el-button">
							<i class="fa fa-tasks fa-lg fa-fw"></i>&nbsp;&nbsp;&nbsp;{{$t('voiceIndex.taskManager')}}
						</router-link>
					</el-collapse-item>
					<el-collapse-item :title="$t('voiceIndex.identResultManager')" name="aaa" style="text-align: left;" key="2">
						<router-link class="btn" plain to="/result" tag="el-button">
							<i class="fa fa-list fa-lg fa-fw"></i>&nbsp;&nbsp;&nbsp;{{$t('voiceIndex.identResultManager')}}
						</router-link>
					</el-collapse-item>
					<el-collapse-item :title="$t('voiceIndex.modelManager')" name="bbb" style="text-align: left;" key="3">
						<router-link class="btn" plain to="/home" tag="el-button">
              <i class="fa fa-volume-up fa-lg fa-fw"></i>&nbsp;&nbsp;&nbsp;{{$t('voiceIndex.voiceModle')}}
            </router-link>
						<router-link class="btn" plain to="/drill" tag="el-button">
              <i class="fa fa-language fa-lg fa-fw"></i>&nbsp;&nbsp;&nbsp;{{$t('voiceIndex.languageModle')}}
            </router-link>
						<router-link class="btn" plain to="/disindex" tag="el-button">
              <i class="fa fa-venus-mars fa-lg fa-fw"></i>&nbsp;&nbsp;&nbsp;{{$t('voiceIndex.genderModle')}}
            </router-link>
						<router-link class="btn" plain to="/homeTwo" tag="el-button">
              <i class="fa fa-key fa-lg fa-fw"></i>&nbsp;&nbsp;&nbsp;{{$t('voiceIndex.keywordModle')}}
            </router-link>
            <router-link class="btn" plain to="/voice" tag="el-button">
              <i class="fa fa-list fa-lg fa-fw"></i>&nbsp;&nbsp;&nbsp;{{$t('voiceIndex.voiceIndex')}}
            </router-link>
					</el-collapse-item>
					<el-collapse-item title="权限管理" name="ddd" style="text-align: left;" key="4">
            <router-link class="btn" plain to="/nodeConfig" tag="el-button">
               <i class="fa fa-gears fa-lg fa-fw"></i>&nbsp;&nbsp;&nbsp;权限管理
            </router-link>
          </el-collapse-item>
					<el-collapse-item :title="$t('voiceIndex.systemConfig')" name="ddd" style="text-align: left;" key="4">
            <router-link class="btn" plain to="/nodeConfig" tag="el-button">
               <i class="fa fa-gears fa-lg fa-fw"></i>&nbsp;&nbsp;&nbsp;{{$t('voiceIndex.nodeConfig')}}
            </router-link>
						<router-link class="btn" plain to="/parameterConfig" tag="el-button">
               <i class="fa fa-braille fa-lg fa-fw"></i>&nbsp;&nbsp;&nbsp;{{$t('voiceIndex.parameterConfig')}}
            </router-link>
          </el-collapse-item>
				</el-collapse> -->
			</el-aside>
			<el-main v-bind:class="{ active: acti == $store.state.Item }">
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
				rotate:0,
				acti:0,
				vin:true,
				displ:false,
				width:"230px",
				ol1:false,
				ol2:false,
				ol3:false,
				ol4:false,
				ol5:false,
				activeName: '1'
			}

		},
		methods:{
			li1(){
				this.ol1=!this.ol1;
				this.ol2=false;
				this.ol3=false;
				this.ol4=false;
				this.ol5=false;
				if(this.ol1){
					this.rotate = 1;
				}else{
					this.rotate = 0;
				}
			},
			li2(){
				this.ol1=false;
				this.ol2=!this.ol2;
				this.ol3=false;
				this.ol4=false;
				this.ol5=false;
				if(this.ol2){
					this.rotate = 2;
				}else{
					this.rotate = 0;
				}
			},
			li3(){
				this.ol1=false;
				this.ol2=false;
				this.ol3=!this.ol3;
				this.ol4=false;
				this.ol5=false;
				if(this.ol3){
					this.rotate = 3;
				}else{
					this.rotate = 0;
				}
			},
			li4(){
				this.ol1=false;
				this.ol2=false;
				this.ol3=false;
				this.ol4=!this.ol4;
				this.ol5=false;
				if(this.ol4){
					this.rotate = 4;
				}else{
					this.rotate = 0;
				}
			},
			li5(){
				this.ol1=false;
				this.ol2=false;
				this.ol3=false;
				this.ol4=false;
				this.ol5=!this.ol5;
				if(this.ol5){
					this.rotate = 5;
				}else{
					this.rotate = 0;
				}
			},
			vinish(){
				this.$store.state.Item = 0;
				this.width = "0";
				this.vin = false;
				this.displ = true;
			},
			dis(){
				this.$store.state.Item = -1;
				this.vin = true;
				this.displ = false;
				this.width = "230px";
			}
		}
	}
</script>
