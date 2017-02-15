$(document).ready(function(){
    
    var total_click = 0;
    
    var powerClick = 1;    
    var power_initial = 10;
    var power_costBase = 1.5;
    var power_nombre = 0;
    var power_prix = 15;
    
    var powerAutoClick = 0;
    var prixAuto = 5;
    var nbAuto = 1;
    
    var tickAutoClick = 1000;
    var prixTick = 50;
    var nbTick = 1;
    
    var batUn_initial = 10;
    var batUn_costBase = 1.2;
    var batUn_nombre = 0;
    var batUn_prix = 12;
	
	var megaL_initial = 666;
    var megaL_costBase = 1.2;
    var megaL_nombre = 0;
    var megaL_prix = 800;
    

    $('#click').click(function(){
        total_click += powerClick;
        buttonUpdate();
    });
    
    $("#buy_mega_clicker").click(function(){
	
	
        if(total_click >= megaL_prix){

            // (prix_dep^num_upgrade - 1) / (prix_dep - 1)
            total_click -= Math.ceil(megaL_initial*(Math.pow(megaL_costBase, megaL_nombre+1)));
            megaL_nombre++;
            megaL_prix = Math.ceil(megaL_initial*(Math.pow(megaL_costBase, megaL_nombre+1)));

            $("#buy_mega_clicker").text("Buy for " + megaL_prix);
            $("#mega_clicker_level").text("lvl " + (megaL_nombre));
            
            buttonUpdate();
        }
});
    
    $("#increase_clicks").click(function(){
	// augmentation du pouvoir de click
	
        if(total_click >= power_prix){
            
            // (prix_dep^num_upgrade - 1) / (prix_dep - 1)
            total_click -= Math.ceil(batUn_initial*(Math.pow(power_costBase, power_nombre+1)));
            power_nombre++;
            powerClick++;
            power_prix = Math.ceil(batUn_initial*(Math.pow(power_costBase, power_nombre+1)));
            
            $("#increase_clicks").text("Buy for " + power_prix);
            $("#power_level").text("lvl " + (power_nombre-1));
			
            buttonUpdate();
        }
    });
    
    $("#auto_liker").click(function(){
	// augmentation du auto click
	
        if(total_click >= batUn_prix){

            // (prix_dep^num_upgrade - 1) / (prix_dep - 1)
            total_click -= Math.ceil(batUn_initial*(Math.pow(batUn_costBase, batUn_nombre+1)));
            batUn_nombre++;
            $("#clicks_per_second").text(batUn_nombre);
            batUn_prix = Math.ceil(batUn_initial*(Math.pow(batUn_costBase, batUn_nombre+1)));

            $("#auto_liker").text("Buy for " + batUn_prix);
            $("#auto_liker_level").text("lvl " + (batUn_nombre));
            
            buttonUpdate();
        }
});
    
    var buttonUpdate = function(){
	// mise a jour des stats
	
		$("#total_clicks").text(total_click);
		
        if(total_click >= prixAuto){
            $("#buy_auto_click").removeClass("btn-danger");
            $("#buy_auto_click").addClass("btn-success");
        } else {
            $("#buy_auto_click").addClass("btn-danger");
            $("#buy_auto_click").removeClass("btn-success");
        }
        if(total_click >= power_prix){
            $("#increase_clicks").removeClass("btn-danger");
            $("#increase_clicks").addClass("btn-success");
        } else {
            $("#increase_clicks").addClass("btn-danger");
            $("#increase_clicks").removeClass("btn-success");
        }
        if(total_click >= batUn_prix){
            $("#auto_liker").removeClass("btn-danger");
            $("#auto_liker").addClass("btn-success");
        } else {
            $("#auto_liker").addClass("btn-danger");
            $("#auto_liker").removeClass("btn-success");
        }
        if(total_click >= megaL_prix){
            $("#buy_mega_clicker").removeClass("btn-danger");
            $("#buy_mega_clicker").addClass("btn-success");
        } else {
            $("#buy_mega_clicker").addClass("btn-danger");
            $("#buy_mega_clicker").removeClass("btn-success");
        }
		};
    
    function ajoutAuto(number){
        total_click += number;
        $("#total_clicks").text(total_click);
    };

    window.setInterval(function(){

        ajoutAuto(batUn_nombre);
		ajoutAuto(megaL_nombre*100);

        buttonUpdate();

    }, tickAutoClick);   
    
});