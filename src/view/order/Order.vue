<script setup>
const list = [
     { "tx": "店员信息" },
     { "tx": "店员信息" },
     { "tx": "店员信息" },
     { "tx": "店员信息" },
     { "tx": "店员信息" },
     { "tx": "店员信息" },
     { "tx": "店员信息" },
     { "tx": "店员信息" },
     { "tx": "店员信息" },
     { "tx": "店员信息" },
]
</script>

<template>
     <div>
          <article class="contait">
               <section >
                    <div class="search">
                         <span class="search-icon">O</span>
                         <input placeholder="请输入" class="input" type="text" name="" id="">
                         <button class="button">搜索</button>
                    </div>
               </section>
               <section class="notion search">
                    
               </section>
               <section class="box card">
                    女神榜 男神榜
               </section>
               <section class="newPerson card">
                    新人推荐
               </section>
               <section >
                    <div></div>
                    <section class="card" v-for="item in list">
                         {{ item.tx }}
                    </section>
               </section>
          </article>
     </div>
</template>

<style scoped>
     .contait{
          /* display: flex;
          flex-direction: column;
          align-items: start; */

          width: 95vw;
          border-radius: 30px;
 
          .search{
               border-radius: var(--theme-radius--);
               background-color: var(--theme-card-color--);
               display: flex;
               justify-content: space-between;
               align-items: center;
               padding: 3px;
               height: 28px;
               margin-bottom: 10px;

               .search-icon{
                    margin-left: 10px;
               }
               .input{
                    width: 65%;
                    height: 100%;
                    /* margin-left: -10px; */
                    /* width: 100%; */
                    background: none;
                    outline: none;
                    border: none;
                    color: var(--theme-font-color--);
               }
               .button{
                    border-radius: 50px;
                    height: 5px;
                    line-height: 0rem;
                    background-color: var( --theme-high-color--);
               }
          }

          notion{
               border-radius: var(--theme-radius--);
          }

          .box{
               background-color: var(--theme-card-color--);
          }
     }
</style>
