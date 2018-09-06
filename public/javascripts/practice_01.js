Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

const app7 = new Vue({
    el: '#app-7',
    data: function () {
        return {
            groceryList: [
                { id: 0, text: 'Vegetables' },
                { id: 1, text: 'Cheese' },
                { id: 2, text: 'Whatever else humans are supposed to eat'}
            ]
        }
    },
    methods: {
        getKey: function() {
            console.log('hi');
            // console.log(this.key);
        }
    }

});
