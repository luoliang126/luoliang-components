<template>
    <div>
        <h1>
            {{ test }}
        </h1>
        <div>
            <firstComponent></firstComponent>
        </div>
    </div>
</template>

<script>
import firstComponent from '@/components/FirstComponent/firstComponent'
export default {
    data(){
        return{
            test:'组件名称'
        }
    },
    components:{
        firstComponent
    }
}
</script>

