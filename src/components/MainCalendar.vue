<template>
    <main 
        class="main"
    >
        <div class="main__container">
            <div class="main__body">

                <div class="main__title title-main">
                    <ul class="title-main__list">
                        <li @click="toPrev">
                            <button
                                type="button"
                                @click="$router.push(views[currentView])" 
                            >
                                <img :src="leftArrowIcon">
                            </button>
                        </li>
                        <li>
                            <p class="month">{{ months[currentView] }}</p>
                        </li>
                                 
                        <li @click="toNext">
                            <button
                                type="button"
                                @click="$router.push(views[currentView])" 
                            >
                                <img :src="rightArrowIcon">
                            </button>
                        </li>
                    </ul>
                </div>

                <hr>
                <div class="table" >
                    <tr class="table__block">
                        <th
                            class="table__item"
                            v-for="tableTitle in tableTitles" 
                            :key="tableTitle.id"
                        >
                            {{ tableTitle.value }}
                        </th>
                    </tr>
                    <router-view/>
                </div>
            </div>
        </div>
    </main>
</template>

<script>

    export default{
        name: 'main-calendar',

        data(){
            return{
                currentView: 0,
                views: ['/01', '/02', '/03', '/04', '/05', '/06', '/07', '/08', '/09', '/10', '/11', '/12'],
                months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                leftArrowIcon: './public/arrow-left.svg',
                rightArrowIcon: './public/arrow-right.svg',
                nightActive: false,
                tableTitles: [
                    { id: 1, value: 'Mon'},{ id: 2, value: 'Tue'},{ id: 3, value: 'Wed'},{ id: 4, value: 'Thu'},{ id: 5, value: 'Fri'},{ id: 6, value: 'Sat'},{ id: 7, value: 'Sun'}
                ],
            }
        },
        methods:{
            toNext(){
                this.currentView ++;
                if(this.currentView >= this.views.length){
                    this.currentView = 0
                };
            },
            toPrev(){
                this.currentView --;
                if(this.currentView < 0){
                    this.currentView = this.views.length - 1
                }
            }
        },
    }
</script>