(function () {
    "use strict";
    
    angular.module('public')
    .service('SignUpService', SignUpService);

    SignUpService.$inject = ['$http', 'ApiPath'];
    function SignUpService($http, ApiPath) {
        var service = this;

        var myInfo = '';
        
        service.getDish = function (shortName) {
            
            return $http.get(ApiPath + '/menu_items/' + shortName.toUpperCase() +'.json').then(function (response) {
              console.log('data',response.data);
                return response.data;
            });
          };

        service.createMyInfo = function(fistName, lastName,email,phone,shortName){

           var add = {fistName: fistName, lastName: lastName, email: email, phone: phone, shortName:{shortName}};
           myInfo = add;
          };
    
        service.getMyInfo = function(){
            return myInfo;
        };
    }
})();
    
