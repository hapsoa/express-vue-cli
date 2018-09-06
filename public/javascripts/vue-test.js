new Vue({
    el: '#app',
    data: function () {
        return {
            creator: 'HYUNWOO',
            messages: [
                {user: 'HYUNWOO', 'text': 'WT'},
                {user: 'HYUNWOO', 'text': 'WT'},
                {user: 'HYUNWOO', 'text': 'WT'},
            ],
        };
    },
    methods: {
        addMessage() {
            this.messages.push({
                user: 'HW',
                text: this.creator,
            });
        }
    },
});
