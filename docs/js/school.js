
var app = new Vue({
    el: '#app',
    data:{
        message: "test",
        school_list: [],
        school_group: [],
        menu_group: [],
        school_name: []
    },
    created(){
        fetch('./data/school/school.csv')
            .then(res => res.text())
            .then(school_list => (this.school_list = this.convertCsvStringToArray(school_list)));
    },
    methods:{
        // window:onload = function(){
        //     console.log("onload")

        //     let vm = this;
        //     vm.school_list = [];

        //     let reader = new FileReader();
        //     reader.readAsText(file);

        //     reader.onload = () => {
        //         let lines = reader.result.split('\n');
        //         lines.shift();
        //         let linesArr = [];
        //         for (let i = 0; i < lines.length; i++) {
        //             linesArr[i] = lines[i].split(',');
        //         }
        //         vm.school_list = linesArr;
        //     };
        // },
        convertCsvStringToArray(str) {
            return str.split("\n").map(s => s.split(","));
          },
        test: function () {
            this.message = this.message.split('').reverse().join('')
        },

        loadCsvFile(){
            let vm = this;
            vm.school_list = [];
            let file = './data/school/school.csv';

            let reader = new FileReader();
            reader.readAsText(file);

            reader.onload = () => {
                let lines = reader.result.split('\n');
                lines.shift();
                let linesArr = [];
                for (let i = 0; i < lines.length; i++) {
                    linesArr[i] = lines[i].split(',');
                }
                vm.school_list = linesArr;
            };
        }
    }  
});

// Vue.component('school-item', {
//     props: ['school'],
//     template: '<li> {{ school }} <li>'
// })
