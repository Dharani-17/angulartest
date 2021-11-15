import { inject } from '@angular/core/testing';
import { Assignment } from './assignment';

var $scope:any;
var $_controller_:any;

describe('exceptions (using Jasmine)', function() {

  //beforeEach(inject(function(_$controller_: any)=>{
    //$controller = $_controller_,

//$scope = {},

//}));

it('should return exception when trying to divide by zero (using jasmine)', function() {

var productsController = $_controller_('CalculatorController', { $scope: $scope });

$scope.x = 1;

$scope.y = 0;

expect($scope.divide).toThrow('divisor cannot be zero');

});
});
