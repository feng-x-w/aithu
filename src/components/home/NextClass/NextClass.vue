<style scoped>
	.NextClass {
		padding: 12px;
	}
	
	.NextClass> {
		color: darkred;
	}
</style>

<template>
	<div class="NextClass">
		<div class="btns">
			<el-button :type="i.name" plain v-for="i in $t('btn')" :key="i.id">
				<i class="el-icon-plus"></i>{{i.Txt}}
			</el-button>
		</div>
		<hr />
		<el-container>
			<el-aside width="180px">
				<h2 style="color: #2a899e;">{{$t('NextC.h2')}}</h2>
				<el-input :placeholder="$t('NextC.placeholder')" v-model="filterText">
				</el-input>

				<el-tree class="filter-tree" :data="$t('NextClass')" :props="defaultProps" :filter-node-method="filterNode" ref="tree2">
				</el-tree>
			</el-aside>

			<el-main>
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
			}
		},
		data() {
			return {
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
				//				btn: [{
				//					id:1,
				//					name: "primary",
				//					Txt: "新建模型组"
				//				}, {
				//					id:2,
				//					name: "primary",
				//					Txt: "说话人信息"
				//				}, {
				//					id:3,
				//					name: "primary",
				//					Txt: "新建模型"
				//				}, {
				//					id:4,
				//					name: "primary",
				//					Txt: "更新声纹模型"
				//				}],
				filterText: '',

				data2: [{
					id: 1,
					label: '一级 1',
					children: [{
						id: 4,
						label: '二级 1-1',
						children: [{
							id: 9,
							label: '三级 1-1-1'
						}, {
							id: 10,
							label: '三级 1-1-2'
						}]
					}]
				}, {
					id: 2,
					label: '一级 2',
					children: [{
						id: 5,
						label: '二级 2-1'
					}, {
						id: 6,
						label: '二级 2-2'
					}]
				}, {
					id: 3,
					label: '一级 3',
					children: [{
						id: 7,
						label: '二级 3-1'
					}, {
						id: 8,
						label: '二级 3-2'
					}]
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				}
			}
		}
	}
</script>