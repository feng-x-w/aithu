<style scoped>
	.NextClass {
		padding: 12px;
	}
	
	.NextClass> {
		color: darkred;
	}
	.el-col-11 {
    width: 87.83333%;
}
</style>

<template>
	<div class="NextClass">
		<div class="btns">
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="目标人">
    <el-input v-model="ruleForm.name" placeholder="目标人"></el-input>
  </el-form-item>
  <el-form-item label="证件号">
    <el-input v-model="ruleForm.date1" placeholder="证件号"></el-input>
  </el-form-item>
  <el-form-item label="性别">
    <el-select v-model="ruleForm.sex" placeholder="性别">
      <el-option label="男" value="man"></el-option>
      <el-option label="女" value="woman"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="出声年月" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="民族">
    <el-input v-model="ruleForm.date1" placeholder="民族"></el-input>
  </el-form-item>
  <el-form-item label="家庭住址">
    <el-input v-model="ruleForm.date1" placeholder="家庭住址"></el-input>
  </el-form-item>
  <el-form-item label="现居住地">
    <el-input v-model="ruleForm.date1" placeholder="现居住地"></el-input>
  </el-form-item>
  <el-form-item label="目标组">
    <el-input v-model="ruleForm.date1" placeholder="目标组"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
</el-form>
		</div>
		<hr />
		<el-container>
			<el-aside width="180px">
				<h2 style="color: #2a899e;">{{$t('NextC.h2')}}</h2>
				<el-input :placeholder="$t('NextC.placeholder')" v-model="filterText">
				</el-input>

				<el-tree 
				  class="filter-tree" 
				  :data="$t('NextClass')" 
				  :props="defaultProps" 
				  :filter-node-method="filterNode" 
				  ref="tree2">
				
				</el-tree>
				
			</el-aside>

			<el-main>
			  <div class="addUser">
					<button>添加目标组</button>
					<button>添加目标人</button>
				</div>
				<el-table :data="tableData" border style="width: 100%">

					<el-table-column prop="name" label="姓名" width="120">
					</el-table-column>
					<el-table-column type="selection" width="55">
					</el-table-column>
					<el-table-column prop="date" label="创建时间" width="120">
					</el-table-column>
					<el-table-column prop="address" label="地址">
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<!--<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
							<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>

				<div class="block">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[5, 10, 15, 20]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
					</el-pagination>
				</div>

			</el-main>
		</el-container>
	</div>
</template>

<script>
	export default {
		components: {

		},
		watch: {
			filterText(val) {
				this.$refs.tree2.filter(val);
			}
		},
		methods: {
			//			关键字查找
			filterNode(value, data) {
				if(!value) return true;
				return data.label.indexOf(value) !== -1;
			},
			//			操作（编辑）
			//			handleEdit(index, row) {
			//				console.log(index, row);
			//			},
			//			操作（删除）
			handleDelete(index, row) {
				//				console.log(index);
				//				console.log(row);
				this.tableData.splice(index, 1);
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			
			onSubmit() {
        console.log('submit!');
      }
		},
		data() {
			return {
			  formInline: {
          user: '',
          region: ''
        },
        
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-06',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1515 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}],
				filterText: '',
				defaultProps: {
					children: 'children',
					label: 'label'
				},
				ruleForm: {
				  name:'',
          date1: '',
          sex:''
        },
			
			 rules: {
			   name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
        }
			}
		}
	}
</script>