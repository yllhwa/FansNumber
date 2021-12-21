<template>
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-14 mx-auto">
        <div class="flex flex-col text-center w-full mb-6">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">粉丝编号释义词典</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">大道之行也，天下为公。</p>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="-m-2">
                <div class="p-2 w-full text-center">
                    <input v-model="fan_id" id="fan_id" placeholder="粉丝编号" class="w-2/3 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <div class="p-2 w-full">
                    <button @click="explain" class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">释义</button>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
export default{
    methods:{
        explain(){
            this.$router.push({
                path:'/result',
                query:{
                    fan_id: this.fan_id
                }
                })
        }
    },
    data(){
        return {
            fan_id: ""
        }
    }
}
</script>

<style scoped>
</style>
