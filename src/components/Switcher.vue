<template>
    <div class="switch">
        <div class="switch__container">
            <button @click="nightActive =! nightActive" type="button">
                <div v-if="nightActive">
                    <ion-icon name="moon-outline"></ion-icon>
                </div>
                <div v-else>
                    <ion-icon name="sunny-outline"></ion-icon>
                </div>
            </button>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'switcher',
        props: {
            nightActive: {
                type: Boolean,
                required: true
            }
        },
    }
</script>