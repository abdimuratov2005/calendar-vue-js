<template>
  <div v-cloak id="app" class="app">
    <main :class="$style.main">
        <div :class="$style.container">
            <div class="main__body">
                <div class="main__title title-main">
                    <ul class="title-main__list">
                        <li @click="toPrev">
                            <button type="button">
                                <img :src="leftArrowIcon">
                            </button>
                        </li>
                        <li>
                            <p class="month">{{ months[currentView] }}</p>
                        </li>

                        <li @click="toNext">
                            <button type="button">
                                <img :src="rightArrowIcon">
                            </button>
                        </li>
                    </ul>
                </div>
                <!-- @click="$router.push(views[currentView])" -->
                <hr>
                <div class="table">
                    <tr class="table__block">
                        <th class="table__item" v-for="tableTitle in tableTitles" :key="tableTitle.id">
                            {{ tableTitle.value }}
                        </th>
                    </tr>
                    <!-- <keep-alive> -->
                        <router-view />
                    <!-- </keep-alive> -->
                </div>
            </div>
        </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {useRouter} from 'vue-router';
const router = useRouter(),
    currentView = ref(0),
    views = ref(['/01', '/02', '/03', '/04', '/05', '/06', '/07', '/08', '/09', '/10', '/11', '/12']),
    months = ref(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']),
    leftArrowIcon = ref('./public/arrow-left.svg'),
    rightArrowIcon = ref('./public/arrow-right.svg'),
    tableTitles = ref([{ id: 1, value: 'Mon' }, { id: 2, value: 'Tue' }, { id: 3, value: 'Wed' }, { id: 4, value: 'Thu' }, { id: 5, value: 'Fri' }, { id: 6, value: 'Sat' }, { id: 7, value: 'Sun' }]),
    toNext = () => {
        router.push(views.value[currentView.value])
        currentView.value ++;
        if (currentView.value >= 12) {
            currentView.value = 0
        };
    },
    toPrev = () => {
        router.push(views.value[currentView.value])
        currentView.value --;
        if (currentView.value <= 0) {
            currentView.value = views.value.length - 1
        };
    }
</script>

<style lang="scss" module>
.main {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #E5E5E5;
}

.container {
    min-height: 370px;
    background-color: #ffffff;
    padding: 22px 32px;
    border-radius: 20px;
}

</style>