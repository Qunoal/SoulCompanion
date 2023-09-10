<script >
import { inject } from 'vue';

export default {
  setup() {
    const router = inject('$router');
    const itemClick = (path) => {
      router.replace(path);
    };

    return {
      itemClick,
      navbar: [
        { text: "首页", icon: "icon", path: '/home' },
        { text: "分类", icon: "icon", path: '/category' },
        { text: "下单", icon: "icon", path: '/order' },
        { text: "搜索", icon: "icon", path: '/search' },
        { text: "我的", icon: "icon", path: '/profile' },
      ]
    };
  },
}

</script>

<template>
  <div>
    <main id="navbar">
      <section class="nav-item" v-for="item in navbar" @click="itemClick(item.path)">
        <div class="charge1 charge1-quanbudingdan2 ordericon ordericon-2"></div>
        <!-- <i class="tool-icon iconfont icon-kefu"></i> -->
        <i>{{ item.icon }}</i>
        <span>{{ item.text }}</span>
      </section>
    </main>
  </div>
</template>

<style scoped > 
#navbar {
   background-color: var(--theme-card-color--);
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;

   .nav-item {
     flex: 1;
     padding: 5px 0;

     display: flex;
     flex-direction: column;
     font-size: .8rem;
   }
 }
</style>
