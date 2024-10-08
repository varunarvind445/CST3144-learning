var app=new Vue({
    el:"#app",
    data:{
        length:5,
        width:3
    },
    computed: {
        area:function(){
            return this.width*this.length;
        }
    }
})