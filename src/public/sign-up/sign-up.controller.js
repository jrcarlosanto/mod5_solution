(function(){
'user strict'

angular.module('public')
.controller('SignUpController',SignUpController);

SignUpController.$inject=['SignUpService'];
function SignUpController(SignUpService){
    var reg = this;

    reg.completed = 0;

    reg.submit = function () {
      console.log('1');
      var promise = SignUpService.getDish(reg.shortName);
      promise.then(function(response){
        date = response;
      //if(date){
        reg.completed = 1;
        SignUpService.createMyInfo(reg.fistName,reg.lastName,reg.email,reg.phone,date);
      //} else{
      })
      .catch(function (error) {
        reg.completed = 2;
        console.log(error.data);
      //}
    })//;
    };
}
})();