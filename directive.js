window.onload = function(){
  new Vue({
    el: '#app',
    data: {
      password: '',
      categories: [
      	{name: 'Javascript', sub: ['Vue.js', 'React', 'Angular']},
        {name: 'Databases', sub: ['MySQL', 'PostgreSQL', 'MariaDB']},
        {name: 'Operating Systems', sub: ['macOS', 'Linux', 'Windows']}
      ]
    },
    methods: {

    }
  });

};
