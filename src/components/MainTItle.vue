<template>
    <div class="main__title title-main">
        <ul class="title-main__list">
            <li 
                v-for="mainTitle in mainTitles"
                :key="mainTitle.id"
                :style="mainTitle.style"
            >   
                {{  mainTitle.value }}
                <img  :src="mainTitle.icon">
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        name: 'main-title',
        data: () => ({
            mainTitles: [
                {id: 1, icon: './public/arrow-left.svg'},
                {id: 2, value: 'Month year', style: 'color: #828282; font-weight: 600;font-size: 20px;line-height: 24px;'},
                {id: 3, icon: './public/arrow-right.svg'}
            ]
        })
    }
</script>