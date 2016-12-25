
<!DOCTYPE html>
  <html>
    <head>
		 <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="Projections is International Technical festival">
	 
	<meta http-equiv="Cache-control" content="no-transform">
    <title>Projections 2016 | Home</title>
   
      <!--Import Google Icon Font-->
      <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	  <link rel="stylesheet" href="style.css"></link>
      <!--Import materialize.css-->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css">
      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	  
    </head>

    <body class="black">
	<div class="shade">
     <?php
	include("header.html");	
	?>

      <article class="layer" >
        <div class="layer__background">
          <canvas id="starfield"></canvas>
        </div>
        <div class="layer__back">
        <div class="scene scene-00"> </div>
		<div class="scene scene-01"></div>
        <div class="scene scene-02"></div>
        <div class="scene scene-03"></div>
        <div class="scene scene-04"></div>
		<div class="scene scene-05"></div>
        </div>
      </article>
	  
	  </div>	
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-throttle-debounce/1.1/jquery.ba-throttle-debounce.js"></script>
    <script src="top.js"></script>
    
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js"></script>
	<script>
	$( document ).ready(function(){
		$(".button-collapse").sideNav();
	});
	
	</script>
    </body>
  </html>
 