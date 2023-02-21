<template>
    <main 
        class="main"
        :class="{ isActive : nightActive }"
    >
        <div class="main__container">
            <div class="main__body">
                <switcher
                    :nightActive="nightActive"
                />
                <main-title />
                <hr>
                <table class="table">
                    <tr class="table__block">
                        <th 
                            class="table__item"
                            v-for="tableTitle in tableTitles" 
                            :key="tableTitle.id">
                            {{ tableTitle.value }}
                        </th>
                    </tr>
                    <tr class="table__block">
                        <td
                            class="table__item"
                            v-for="tableDay in tableDays1" 
                            :key="tableDay.id">
                            {{ tableDay.id }}
                        </td>
                    </tr>
                    <tr class="table__block">
                        <td
                            class="table__item"
                            v-for="tableDay in tableDays2" 
                            :key="tableDay.id">
                            {{ tableDay.id }}
                        </td>
                    </tr>
                    <tr class="table__block">
                        <td
                            class="table__item"
                            v-for="tableDay in tableDays3" 
                            :key="tableDay.id">
                            {{ tableDay.id }}
                        </td>
                    </tr>
                    <tr class="table__block">
                        <td
                            class="table__item"
                            v-for="tableDay in tableDays4" 
                            :key="tableDay.id">
                            {{ tableDay.id }}
                        </td>
                    </tr>
                    <tr class="table__block">
                        <td
                            class="table__item"
                            v-for="tableDay in tableDays5" 
                            :key="tableDay.id">
                            {{ tableDay.id }}
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </main>
</template>

<script>
    export default{
        name: 'main-calendar',
        data(){
            return{
                nightActive: false,
                tableTitles: [
                    { id: 1, value: 'Mon'},{ id: 2, value: 'Tue'},{ id: 3, value: 'Wed'},{ id: 4, value: 'Thu'},{ id: 5, value: 'Fri'},{ id: 6, value: 'Sat'},{ id: 7, value: 'Sun'}
                ],
                tableDays1: [
                    {id: 1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7}
                ],
                tableDays2: [
                    {id: 8},{id:9},{id:10},{id:11},{id:12},{id:13},{id:14}
                ],
                tableDays3: [
                    {id: 15},{id:16},{id:17},{id:18},{id:19},{id:20},{id:21}
                ],
                tableDays4: [
                    {id: 22},{id:23},{id:24},{id:25},{id:26},{id:27},{id:28}
                ],
                tableDays5: [
                    {id: 29},{id:30},{id:31}
                ],
            }
        },
    }
</script>