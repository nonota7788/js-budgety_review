/*------------------------------*/
/* DATA MODULE */
/*------------------------------*/
var budgetController = (function() {
  var x = 20;
  function add(a) {
    return a + x;
  }

  return {
    publicTest: function(b) {
      //console.log(add(b));
      return add(b);
    }
  };
})();

/*------------------------------*/
/* UI MODULE */
/*------------------------------*/
var UIController = (function() {})();

/*------------------------------*/
/* CONTROLLER MODULE */
/*------------------------------*/
var controller = (function(bugetCtrl, UICtrl) {
  var y = bugetCtrl.publicTest(5);

  return {
    anotherPublic: function() {
      console.log(y);
    }
  };
})(budgetController, UIController);

controller.anotherPublic();
