(function () {
    "use strict";
    
    angular.module('public')
    .service('SignUpService', SignUpService);

    SignUpService.$inject = ['$http', 'ApiPath'];
    function SignUpService($http, ApiPath) {
        var service = this;

        var myInfo = '';
        
        service.getDish = function (shortName) {
            
            
        //var shortName = shortName
            return $http.get(ApiPath + '/menu_items/' + shortName.toUpperCase() +'.json').then(function (response) {
              console.log('data',response.data);
                return response.data;
            });
          };

        service.createMyInfo = function(fistName, lastName,email,phone,shortName){

            //console.log('shortName',shortName);

          //  if(myInfo==''){
                var add = {fistName: fistName, lastName: lastName, email: email, phone: phone, shortName:{shortName}};
            //} else{
                
              //  var myShortName = myInfo.shortName.menu_items;
                //var add = {fistName : fistName, lastName: lastName, email: email, phone: phone, shortName: [myShortName.push(shortName)]};  
           // }
            myInfo = add;
            console.log('my info1',myInfo);
        };
    
        service.getMyInfo = function(){
            return myInfo;
        };
    }
})();
    