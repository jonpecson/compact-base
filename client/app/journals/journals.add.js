/*
 * IIFE to encapsulate code and avoid global variables
 */
(function() {

    /*
     * attaching  controller function to the  module 
     */
    angular
        .module("app")
    JournalsAddCtrl.$inject = ['$state'];
    function JournalsAddCtrl($state) {
        var vm = this;
       
    }

})();