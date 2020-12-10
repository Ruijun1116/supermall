<template>
  <div class="tab-bar-item" @click="itemClick">

    <div v-if="!isActive">
      <slot name="item-icon" ></slot>
    </div>

    <div v-else>
      <slot name="item-icon-active" ></slot>
    </div>

    <!--替换插槽时，样式依然保留-->
    <div :style="activeStyle">
      <slot name="item-text" ></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    //父传子用props
    //用于接收父传来的数据
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'//如果没传颜色，默认为红色
      }
    },
    data() {
      return {
        // isActive: true,
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path);
      }
    },
    computed: {
      isActive() {
        //拿到活跃路由的path
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    /*tab-bar的高度一般都是49px*/
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  /*
  不能将文字的颜色写死。
  之后复用，只用传入颜色即可，而不用到源码修改
  */
/*  .active {
    color: #d81e06;
  }*/
</style>
