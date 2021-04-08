function init(){
  new Vue({
    el: '#app',
    data:{

      todos:[
        'pagare bollo',
        'prendere pizza',
        'lavare macchina',
      ],

      newItem:'',
    },

    methods:{
      add: function(){
        if (this.newItem.length > 0) {
          this.todos.push(this.newItem);
        }

        this.newItem='';
      },

      deleteItem: function(i){
        // splice lavora su array, rimuove elemento in questo caso
        this.todos.splice(i,1);
        // questa "i" lavora sulla I di <i> in html
      }
    },
  });
}

$(document).ready(init);
