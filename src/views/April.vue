<template>
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
</template>

<script setup>
import { ref } from 'vue';

const tableDays1 = ref([
        {id: ''},{id: ''},{id: ''},{id: ''},{id: ''},{id: 1},{id:2}
    ]),
    tableDays2 = ref([
        {id:3},{id:4},{id:5},{id:6},{id:7},{id: 8},{id:9}
    ]),
    tableDays3 = ref([
        {id:10},{id:11},{id:12},{id:13},{id:14},{id: 15},{id:16},
    ]),
    tableDays4 = ref([
        {id:17},{id:18},{id:19},{id:20},{id:21},{id: 22},{id:23},
    ]),
    tableDays5 = ref([
        {id:24},{id:25},{id:26},{id:27},{id:28},{id: 29},{id:30}
    ])
</script>