window.addEventListener( "load", loadFunc, false );
 
function loadFunc() {
 

 	var i;
 	var j;
 	var k;
 	var people = 4 + Math.floor( Math.random() * 10 );//4～9のうちでランダムな値を格納
    var canvas = document.getElementById( "stage" );
    var canvas2 = document.getElementById("stage2");
    var ctx_base = canvas.getContext( "2d" );
    var ctx2 = canvas2.getContext("2d");
  	var bridge_num;
    var bridge = new Array(people);
    var random;
    var random_row;
    var random_col;
    var temp;

    //2次元配列を生成
    for(i = 0; i < people; i++)
     bridge[i] = new Array(28);
    
    //参加人数×横棒の数だけ配列領域を確保かつ0で初期化
    for(i = 0; i < people ; i++)
      for(j = 0; j < 28; j++){
      	bridge[i][j] = 0;
      
      }
    
    
    
    
    
    //ここからプログラムを記述
     
    
   
  
   //基本線-----------------------------------------------
   
    for(i = 0; i < people; i++){   
    //縦線----------------------------
    ctx_base.beginPath();
     ctx_base.moveTo( 100*(i+1), 0 );
    ctx_base.lineTo( 100*(i+1), 600 );
     ctx_base.lineWidth = 5;
    ctx_base.strokeStyle = "rgb(0,0,0)";
      ctx_base.stroke();
    ctx_base.closePath();
    //--------------------------------
    
    	//横線-----------------------
       if(i != people - 1){
    	for(j = 0; j < 28 ; j++){
    	 ctx_base.beginPath();
         ctx_base.moveTo(100*(i+1), 20*(1+j));
    	 ctx_base.lineTo(100*(i+2), 20*(1+j));
  	 	 ctx_base.lineWidth = 5;
    	 ctx_base.strokeStyle = "rgba(200,200,200,0.3)";
         ctx_base.stroke();
    	 ctx_base.closePath();
    	}
    	}
    	//-----------------------------
    
   }  
   //------------------------------------------------------
   
  
   

//指定した数だけ、横棒をランダムに引くための目印付ける-------
   for(bridge_num = 20; bridge_num > 0; bridge_num--){
   //ランダムな列
	 random_col = Math.floor( Math.random() *(people-1) );
     //ランダムな行
	 random_row = Math.floor( Math.random()*28);
	 
	 if(bridge[random_col][random_row] == 0 && bridge[random_col+1][random_row] == 0){
		bridge[random_col][random_row] = 1;
		bridge[random_col+1][random_row]=1;
	//	document.write("|  ["+random_col+"]["+random_row+"]  |");
		}
	 else
	  bridge_num++;
   
   }
 //------------------------------------------------------------ 
  
  var col;
  var row;
  //実際にランダムな横棒を描画
  for(col = 0; col < people-1; col++)
    for(row = 0; row < 28; row++){
    
    
  	if(col == 0 && bridge[col][row] == 1 && bridge[col+1][row]==1){
  	
  	ctx_base.beginPath();
  	ctx_base.moveTo(100*(col+1), 20*(1+row));
    ctx_base.lineTo(100*(col+2), 20*(1+row));
  	ctx_base.lineWidth = 5;
    ctx_base.strokeStyle = "rgb(0,0,0)";
    ctx_base.stroke();
    ctx_base.closePath();
  	}
  	 else if(col != 0 && bridge[col-1][row] ==0 && bridge[col][row] == 1 && bridge[col+1][row]==1){
  	 	ctx_base.beginPath();
  	ctx_base.moveTo(100*(col+1), 20*(1+row));
    ctx_base.lineTo(100*(col+2), 20*(1+row));
  	ctx_base.lineWidth = 5;
    ctx_base.strokeStyle = "rgb(0,0,0)";
    ctx_base.stroke();
    ctx_base.closePath();
  	 
  	 
  	 
  	 }
  	
  }
 //--------------------------------------------------------------------
 
 col = 100;
 row = 0;
 
      function draw(){
        ctx2.clearRect(0,0,1200,600);
        ctx2.beginPath();                
                   
  	ctx2.moveTo(100, 0);
    ctx2.lineTo(100, row++);
  	ctx2.lineWidth = 5;
    ctx2.strokeStyle = "rgb(255,0,0)";
    ctx2.stroke();
    ctx2.closePath();
        setTimeout(draw, 25);//処理のインターバル
    }
    draw();
              
     
                
        
 }
  
    //ここまでにプログラムを記述
 
