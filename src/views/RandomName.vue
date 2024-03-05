<template>
    <div class="contain">
        <ul id="parent">
            <li id="para" class="mc" v-for="name in nameList" :key="name">{{ name }}</li>
        </ul>
        <div>
            <button @click="handleBtn1" id="btn1">开始点名</button>
            <button @click="handleBtn2" id="btn2">停止</button>
            <button @click="handleBtn3" id="btn3">重置</button>
        </div>
    </div>
</template>
   
<script setup>
const nameList = [
            '张三',
            '李四',
            '赵六',
            '凤翔忠',
            '张三',
            '李四',
            '赵六',
            '凤翔忠',
            '张三',
            '李四',
            '赵六',
            '凤翔忠',
            '张三',
            '李四',
            '赵六',
            '凤翔忠',
            '张三',
            '李四',
            '赵六',
            '凤翔忠',
            '张三',
            '李四',
            '赵六',
            '凤翔忠',
            '张三',
            '李四',
            '赵六',
            '凤翔忠',
            '张三',
            '李四',
            '赵六',
            '凤翔忠',
            '张三',
            '李四',
            '赵六',
            '凤翔忠',
            '张三',
            '李四',
            '赵六',
            '凤翔忠',
            '张三',
            '李四',
            '赵六',
            '凤翔忠',
            '张三',
            '李四',
            '赵六',
            '凤翔忠',
            '凤翔忠',
            '张三',
            '李四',
            '赵六',
            '赵六',
            '凤翔忠',
            '张三',
            '李四',
            '赵六',
            '凤翔忠',
            '张三',
            '李四',
            '赵六',
            '凤翔忠',
            '张三',
            '李四',
            '赵六',
            '凤翔忠',
            '张三',
            '李四',
            '赵六'
        ];
const handleBtn1=()=>{}
const handleBtn2=()=>{}
const handleBtn3=()=>{}
</script>
<script>
export default {
    mount() {
        // (() => {
        //     remLayout();
        //     function remLayout() {
        //         var w = document.documentElement.clientWidth;
        //         w = w <= 375 ? 375 : w;
        //         w = w >= 1020 ? 1020 : w;
        //         console.log(w)
        //         document.documentElement.style.fontSize = w / 37.5 + 'px';
        //     }
        //     window.addEventListener('resize', function () {
        //         remLayout();
        //     }, false);
        // })();
        let flag = false;
        let btn1 = document.getElementById('btn1');
        let btn2 = document.getElementById('btn2');
        let btn3 = document.getElementById('btn3');


        function fn(a, b) {
            return Math.floor(Math.random() * (Math.abs(a - b) + 1)) + Math.min(a, b)
        }

        function myTimer() {
            let myNodelist = document.querySelectorAll("li");
            let rd = fn(0, myNodelist.length);
            console.log(rd);
            myNodelist[rd].style.color = "red";
            myNodelist[rd].style.background = "#faa755";
            for (let i = 0; i < myNodelist.length; i++) {
                if (i === rd) continue;
                myNodelist[i].style.color = "white";
                myNodelist[i].style.background = '#918597';
            }
        }

        function clearMyTimer() {
            let myNodelist = document.querySelectorAll("li");
            let rd = fn(0, myNodelist.length);
            for (let i = 0; i < myNodelist.length; i++) {
                if (i === rd) continue;
                myNodelist[i].style.color = "white";
                myNodelist[i].style.background = '#918597';
            }
        }

        var myVar;
        btn1.onclick = function myStopFunction1() {
            clearInterval(myVar);
            myVar = setInterval(function () { myTimer() }, 100);
            setTimeout(function () { clearInterval(myVar) }, 5000)
        }

        btn2.onclick = function myStopFunction2() {
            clearInterval(myVar);
        }

        btn3.onclick = function myStopFunction3() {
            clearInterval(myVar);
            clearMyTimer();
        }
    }
}


</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}

ul,
ol,
dl,
li {
    list-style: none;
}

body {
    background-image: linear-gradient(to right, skyblue, rgb(243, 163, 120));
}

.contain {
    margin: 100px auto 0;
    width: 80%;
}


li {
    display: inline-block;
    border: 1px solid black;
    border-radius: 0.2rem;
    margin: 0.25rem;
    padding: 0.1rem 0.2rem;
    background: #918597;
    text-align: center;
    color: white;
    width: 3.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    box-shadow: 0px -2px 2px 0px #ccc,
        -2px 0px 2px 0px #ccc,
        2px 0px 2px 0px #ccc,
        0px 2px 2px 0px #ccc;
}

.contain>div {
    margin-top: 2.5rem;
    text-align: center;
}

.contain>div>button {
    cursor: pointer;
    width: 6rem;
    height: 3rem;
    margin-right: 0.5rem;
    font-size: 0.9rem;
    border-radius: 0.2rem;
    background: rgb(222, 153, 97);
}
</style>
   