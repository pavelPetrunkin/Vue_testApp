
<template>

</template>

<script type="text/javascript">
    export default {
        props: ['todo','filters','pagination'],
        data() {
            return {
                todos: [{
                    name: 'Todo A',
                    isEditing: false,
                    checked: false,
                }, {
                    name: 'Todo B',
                    isEditing: false,
                    checked: true,
                }],
                filters: {
                    showAll: true,
                    showChecked: false,
                    showUnchecked: false,
                }
            };
        },
        methods: {

        },
    };
</script>
