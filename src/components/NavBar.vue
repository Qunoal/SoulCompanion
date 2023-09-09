<script >
import { inject } from 'vue';

export default {
  setup() {
    const router = inject('$router');
    const itemClick = (path) => {
      console.log(router);
      router.replace(path);
    };

    return {
      itemClick,
      navbar: [
        { text: "首页", icon: "", path: '/home' },
        { text: "分类", icon: "", path: '/category' },
        { text: "搜索", icon: "", path: '/search' },
        { text: "我的", icon: "", path: '/profile' },
      ]
    };
  },
}

</script>

<template>
  <div>
    <main id="navbar">
      <section class="nav-item" v-for="item in navbar" @click="itemClick(item.path)">
        <i>22222</i>
        <span>{{ item.text }}</span>
      </section>
    </main>
  </div>
</template>

<style scoped > #navbar {
   background-color: rgb(68, 68, 68);
   width: 100vw;
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
