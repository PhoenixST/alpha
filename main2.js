var money = 0;

var click = {
  power = 1,
  click : function(){
    money += power;
  }
};

var autoclick = {
  name : "Auto clicker lvl 1",
  baseInc : 1,
  baseCost : 1.5,
  prix : 15,
  basePower : 10,
  nombre : 0,
  ajout : function() {
      if ( money >= this.prix ){
        money -= this.prix;
        this.nombre++;
        $("#clicks_per_second").text(this.nombre);
        this.prix = Math.ceil( this.basePower * Math.pow( this.baseCost , this.nombre + 1 ));
        $("#auto_liker").text("Buy for " + this.prix);
        $("#auto_liker_level").text("lvl " + (this.nombre));
      }
  }
};


var buttonUpdate = function(){
  // mise a jour des stats
  $("#total_clicks").text(money);

  if(money >= autoclick.prix){
      $("#auto_liker").removeClass("btn-danger");
      $("#auto_liker").addClass("btn-success");
  } else {
      $("#auto_liker").addClass("btn-danger");
      $("#auto_liker").removeClass("btn-success");
  }
};


$(document).ready(function(){

  $('#click').click(powerClick.);
  $("#auto_liker").click(autoclick.ajout);


});
