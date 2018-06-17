<style scoped>
  h1 {
    color: darkred;
    background-color: pink;
    padding: 15px;
  }
</style>

<template>
  <div class="homeTwo">
    <Breadcrumb>
      <span slot="one">222</span>
      <span slot="two">333</span>
    </Breadcrumb>
    <div id="shangchuan">
      <form :model="uploadForm" ref="uploadForm">
        <input type="file" :model="uploadForm.files" name="mid">
        <button @click="UpLoad">上传服务器</button>
      </form>

    </div>
  </div>
</template>

<script>
  import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
  //先引入接口
  import { UpLoading } from '@/api/UpLoading'
  export default {
    components: {
      Breadcrumb
    },
    data() {
      return {
        uploadForm: {
          files: []
        }
        //                 fileList: [{
        //                         name: 'food.jpeg',
        //                         url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        //                     },
        //                     {
        //                         name: 'food2.jpeg',
        //                         url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        //                     }
        //                 ]
      };
    },
    methods: {
      UpLoad() {
        this.$refs.uploadForm.submit();
//      (
//        (valid) => {
//        if(valid) {
//          UpLoading(this.mid, this.files).then((res) => {
//            console.log(res);
//          })
//        } else {
//          this.$message.error("请上传文件")
//        }
//      })
        //             submitUpload() {
        //                 this.$refs.upload.submit();
        //             },
        //             handleRemove(file, fileList) {
        //                 console.log(file, fileList);
        //             },
        //             handlePreview(file) {
        //                 console.log(file);
        //             }
      }
    }
  }
</script>