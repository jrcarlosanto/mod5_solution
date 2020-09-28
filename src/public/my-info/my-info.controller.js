(function(){
    'user strict'
    
    angular.module('public')
    .controller('MyInfoController',MyInfoController);
    
    MyInfoController.$inject=['myInfo'];
    function MyInfoController(myInfo){
        var myinfoCtrl = this;
        console.log("my info contoller",myInfo);
        myinfoCtrl.user = myInfo;
        myinfoCtrl.user.shortName = myInfo.shortName;
        
    }
    })();
