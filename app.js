const app =Vue.createApp({
    data(){
        return{
            showBooks:true,
            books:[
                {title:"name of the wind",author:'patrick '},
                {title:"the way of kings",author:'brandon'},
                {title:'the final empire',author:'brandon'}
            ]
        }
    },
    methods:{
        changeTitle(title){
            this.title=title;
        }
    }
});

app.mount('#app');