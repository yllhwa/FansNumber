<template>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-14 mx-auto">
    <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
        <p class="leading-relaxed text-lg">
          行星编号: {{planet.Number}}
        </p>
        <p class="leading-relaxed text-lg">
          行星名称: {{planet.Name}}
        </p>
        <p class="leading-relaxed text-lg">
          绝对星等: {{planet.H}}
        </p>
        <p class="leading-relaxed text-lg">
          上次观测: {{planet.Last_obs}}
        </p>
        <p class="leading-relaxed text-lg">
          轨道周期: {{planet.Orbital_period}}年
        </p>
        <button @click="see_planet" class="mx-auto text-white bg-indigo-500 border-0 py-2 px-3 mt-2 mb-3 focus:outline-none hover:bg-indigo-600 rounded">查看小行星轨道</button><br>
      <p class="text-gray-500">数据来自:IAU Minor Planet Center</p>
    </div>
  </div>
</section>
</template>

<script>
import { parse as QsParse } from "qs";
import axios from "axios";
export default{
    methods:{
        see_planet(){
            window.location.href = this.planet_url+"?Number="+this.planet.Number;
        }
    },
    data(){
        return {
            planet_url: "http://planet.yllhwa.com/",
            planet:{
                "Number":"1",
                "Name":"Ceres",
                "H":"3.54",
                "Last_obs":"2021-10-19",
                "Orbital_period":"4.0920212"
            }
        }
    },
    mounted(){
      const params = QsParse(window.location.search.substring(1));
      axios
      .get(this.planet_url+"planet/" + params.fan_id)
      .then((res) => {
        if (res.data.Number!=undefined && res.data.Number[0]=="("){
          this.planet.Number = res.data.Number.substring(1, res.data.Number.length-1);
        }
        else{
          this.planet.Number = res.data.Number;
        }
        
        this.planet.Name = res.data.Name;
        this.planet.H = res.data.H;
        this.planet.Last_obs = res.data.Last_obs;
        this.planet.Orbital_period = res.data.Orbital_period;
      })
      .catch((error) => {
        console.log(error);
      });
    }
}
</script>

<style scoped>
</style>
