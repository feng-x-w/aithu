<style scoped>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	
	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}
	
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
		border: 1px dashed #00A0FF;
		border-radius: 5px;
	}
	
	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
	
	.user_main {
		padding: 10px;
	}
</style>

<template>
	<div class="userdata">
		<Breadcrumb>
			<span slot="one">用户资料</span>
		</Breadcrumb>
		<el-container>
			<el-aside width="200px" class="user_main">
				<!--action="https://jsonplaceholder.typicode.com/posts/"-->
				<el-upload class="avatar-uploader" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
					<img v-if="imageUrl" :src="imageUrl" class="avatar">
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</el-aside>
			<el-main class="Udatas">

				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="用戶名" prop="name">
						<el-input v-model="ruleForm.name"></el-input>
					</el-form-item>
					<el-form-item label="性别" prop="region">
						<el-select v-model="ruleForm.region" placeholder="请选择性别">
							<el-option label="男" value="男"></el-option>
							<el-option label="女" value="女"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submitForm('ruleForm')">立即保存</el-button>
						<el-button @click="resetForm('ruleForm')">重置</el-button>
					</el-form-item>
				</el-form>

			</el-main>
		</el-container>
	</div>
</template>

<script>
	import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
	export default {
		components: {
			Breadcrumb
		},
		data() {
			return {
				imageUrl: '',
				ruleForm: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				rules: {
					name: [{
							required: true,
							message: '请输入用戶名',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 8,
							message: '长度在 3 到 8 个字符',
							trigger: 'blur'
						}
					]
				}

			};
		},
		methods: {
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if(!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if(!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			},
			submitForm(formName) { //http://192.168.1.118/login?username=1123&password=11232

				this.$refs[formName].validate((valid) => {
					if(valid) {
						alert('submit!');
						var json = [];
						var j = {};
						j.name = this.name;
						json.push(j);
						var a = JSON.stringify(json);
						
						//						axios.post('http://192.168.1.118/user/info/edit?nickname=%E5%BC%A0%E4%B8%89&email=1336994553@qq.com&roleid=1')
						//						.then(res => {
						//							alert("回传成功")
						//						}).catch(error => console.log(error));
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}

		}
//		created(){
//		    this.dataList.user_id=this.$route.params.user_id
//		    this.getUserProfile(this.userId,this.dataList.user_id)
//		},
	}
</script>