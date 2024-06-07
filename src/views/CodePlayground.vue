<template>
    <div class="h-screen w-full bg-[#1a1919] flex flex-col justify-center ">
        <div class="h-full flex justify-center w-full">
            <div class="w-full grid grid-cols-2 gap-2 mt-20 mb-2">
                <div class="bg-dark-gray flex flex-col gap-2 p-2">
                    <prism-editor class="my-editor height-300 border-zinc-800" v-model="htmlCode"
                        :highlight="highlighterHtml" :line-numbers="true"></prism-editor>

                    <prism-editor class="my-editor height-300 border-zinc-800" v-model="cssCode"
                        :highlight="highlighterCss" :line-numbers="true"></prism-editor>
                    <prism-editor class="my-editor height-300 border-zinc-800" v-model="jsCode"
                        :highlight="highlighterJs" :line-numbers="true"></prism-editor>


                </div>
                <div class="border border-1 border-zinc-700 flex flex-col transition-all ease-in">
                    <iframe class="ide w-full h-full bg-white  transition-all ease-in" :srcdoc="output"></iframe>

                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch, watchEffect } from 'vue';
import "vue-prism-editor/dist/prismeditor.min.css";
import { highlight, languages } from 'prismjs';
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

const htmlCode = ref("<h1>Hola, Mundo!</h1>")
const cssCode = ref(`h1 {
   color: gray;
   font-family: sans-serif;
}`)
const jsCode = ref("console.log('Pepito')")
const output = ref("")

const highlighterHtml = (code: string) => {
    return highlight(code, languages.html);
}
const highlighterCss = (code: string) => {
    return highlight(code, languages.css);
}
const highlighterJs = (code: string) => {
    return highlight(code, languages.js);
}
const setCode = () => {
    output.value = `<div class="full">
    ${htmlCode.value} 
    </div><div id="log" class="log bg-dark-gray p-2 rounded-md">
        <label class="lab"> cmd </label>
    </div>
    <style>${cssCode.value} 
    .full{height: 70vh; transition: all 0.3s ease; overflow-y: auto} 
    .lab {color: #14d814; margin-bottom: 8px; transition: all 0.3s ease;}
    .log{ transition: all 0.3s ease; font-family: sans-serif; height: 30vh ;background: #181818; color:gray; padding: 8px; border-radius: 5px; display: flex; flex-direction: column; }</style>
    <script>
    var old = console.log;
			(function () {
				var old = console.log;
				var logger = document.getElementById('log');

				console.log = function (message) {
					if (typeof message == 'object') {
						logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
					} else {
						logger.innerHTML += message + '<br />';
					}
				}
			})();
    ${jsCode.value}
console.log = old;
<\/script>`
}
onMounted(() => {
    setCode();
})
watchEffect(() => {

    if (htmlCode.value + cssCode.value + jsCode.value) {
        setTimeout(() => {
            setCode();
        }, 1000);
    }


    // if (cssCode) setCode();
    // if (jsCode) setCode();
})

</script>
<style>
.my-editor {
    background: #2d2d2d;
    color: #ccc;
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
    overflow-y: auto;
}

.prism-editor__textarea:focus {
    outline: none;
}

.height-300 {
    height: 200px;
}
</style>
