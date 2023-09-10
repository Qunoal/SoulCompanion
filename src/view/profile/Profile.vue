<script setup>
const list = [
     { text: '优惠卷', icon: 'icon', path: '' },
     { text: '成为电源', icon: 'icon', path: '' },
     { text: '我的守护', icon: 'icon', path: '' },
     { text: '分销中心', icon: 'icon', path: '' },
     { text: '礼物图鉴', icon: 'icon', path: '' },
     { text: '我要开店', icon: 'icon', path: '' },
     { text: '合作推广', icon: 'icon', path: '' },
     { text: '客服', icon: 'icon', path: '' },
]
const list2 = [
     { text: '待服务', icon: 'icon', path: '' },
     { text: '服务中', icon: 'icon', path: '' },
     { text: '已完成', icon: 'icon', path: '' },
     { text: '全部订单', icon: 'icon', path: '' },
]
</script>

<template>
     <div>
          <main class="profile">
               <section class="card1">头像</section>
               <section class="card tool">
                    <p class="title">我的订单</p>
                    <div class="tool-item">
                         <section class="section" v-for="item in list2">
                              <i>{{ item.icon }}</i>
                              <span>{{ item.text }}</span>
                         </section>
                    </div>
               </section>
               <section class="tool card">
                    <p class="title">常用工具</p>
                    <div class="tool-item">
                         <section class="section" v-for="item in list">
                              <i>{{ item.icon }}</i>
                              <span>{{ item.text }}</span>
                         </section>
                    </div>
               </section>
          </main>
     </div>
</template>

<style scoped>
.profile {
     
 
     .tool {
          .title {
               font-size: 1.1rem;
               font-weight: 700;
               text-align: left;
               margin-bottom: 8px;
          }

          .tool-item {
               display: flex;
               flex-direction: row;
               flex-wrap: wrap;
               justify-content: space-between;
               /* gap: 10px; */

               .section {
                    width: 20vw;
                    padding: 10px 0px;

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    /* font-size: .7rem; */
               }
          }
     }
}
</style>
