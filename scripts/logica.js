

    var contadorAnIntro = 0;
    var contadorNumPaquete=1;
    
    

    var intro = document.getElementById('introId');
    var verMenu = document.getElementById('verMenuId');
    var flechaD = document.getElementById('flechaDId');
    var flechaI = document.getElementById('flechaIId');
    var numeros = document.getElementById("numerosId");
    var paquete1 = document.getElementById('paquete1Id');
    var paquete2 = document.getElementById('paquete2Id');
    var paquete3 = document.getElementById('paquete3Id');
    var wa = document.getElementById("waClickId");
    var maps = document.getElementById("mapsClickId");
    //var dia = document.getElementById("diaId");
    var wall = document.getElementById("wallId");
    var muro = document.getElementById("muroId");

    function funShowPaquete(num, sentido)
    {
        switch(num) 
        {
            case 1:
                if(sentido==0)
                {
                    paquete1.emit("entraI");
                    paquete2.emit("saleD");
                }else{
                    paquete1.emit("entraD");
                    paquete3.emit("saleI");
                }
                numeros.setAttribute("material",{src:"images/1.png"});
                wall.setAttribute("material",{src: "images/hyr.png"});
                
            break;
            case 2:
            if(sentido==0)
                {
                    paquete2.emit("entraI");
                    paquete3.emit("saleD");
                }else{
                    paquete2.emit("entraD");
                    paquete1.emit("saleI");
                }
                numeros.setAttribute("material",{src:"images/2.png"});
                wall.setAttribute("material",{src: "images/2x1.png"});
            break;
            case 3:
            if(sentido==0)
                {
                    paquete3.emit("entraI");
                    paquete1.emit("saleD");
                }else{
                    paquete3.emit("entraD");
                    paquete2.emit("saleI");
                }
                numeros.setAttribute("material",{src:"images/3.png"});
                wall.setAttribute("material",{src: "images/hyp.png"});
            break;
            default:
            {
                console.log("opcion no disponible");
            }
        }
    }


    intro.addEventListener('animationend', function (e) {
        if(contadorAnIntro == 0)
        {
            var fecha = new Date();
            var dia = parseInt(fecha.getDay());
            console.log(dia);
            switch (dia)
            {
                case 0:
                {
                    verMenu.setAttribute("material",{src: "images/ver_menu0.png"});
                }break;
                case 1:
                {
                    verMenu.setAttribute("material",{src: "images/ver_menu1.png"});
                }break;
                case 2:
                {
                    verMenu.setAttribute("material",{src: "images/ver_menu2.png"});
                }break;
                case 3:
                {
                    verMenu.setAttribute("material",{src: "images/ver_menu3.png"});
                }break;
                case 4:
                {
                    verMenu.setAttribute("material",{src: "images/ver_menu4.png"});
                }break;
                case 5:
                {
                    verMenu.setAttribute("material",{src: "images/ver_menu5.png"});
                }break;
                case 6:
                {
                    verMenu.setAttribute("material",{src: "images/ver_menu6.png"});
                }break;
                
            }
            

            
            console.log("evento 1");
            verMenu.emit("an1");
            verMenu.setAttribute("visible", true);
        }
        contadorAnIntro ++;     
    });

    //Clic inicio----------------->
    verMenu.addEventListener("click",function(e)
    {
        

        intro.emit("an2");
        //dia.emit("an2");
        verMenu.setAttribute("position",{x:-1, y:0, z:0});
        flechaD.setAttribute("visible",true);
        flechaI.setAttribute("visible",true);
        numeros.setAttribute("visible",true);
        document.getElementById("waId").setAttribute("visible",true);
        document.getElementById("mapsId").setAttribute("visible",true);
        window.setTimeout(function(e)
        {
            paquete1.emit("entraD");
            muro.setAttribute("visible", true);
        },1000);
        
    });

    //Click derecha
    document.getElementById("flechaDClickId").addEventListener("click",function(e)
    {
        contadorNumPaquete++;
        if(contadorNumPaquete >= 4)
        {
            contadorNumPaquete=1;
            
        }
        funShowPaquete(contadorNumPaquete,1);
        console.log(contadorNumPaquete);
    });
    //click izquierda
    document.getElementById("flechaIClickId").addEventListener("click",function(e)
    {        
        contadorNumPaquete--;
        if(contadorNumPaquete <= 0)
        {
            contadorNumPaquete=3;
           
        }
        funShowPaquete(contadorNumPaquete,0);
        console.log(contadorNumPaquete);
    });

    //click en maps
    maps.addEventListener("click",function(e)
    {
        console.log("click en wa");
       window.open("https://goo.gl/maps/zeeC98icyvF2"); 
    });
    //click en wa
    wa.addEventListener("click",function(e)
    {
        console.log("click en maps");
        if(contadorNumPaquete == 1)
        {
            window.open("https://api.whatsapp.com/send?phone=+5215584151591&text=Buen%20dia!%20quiero%20la%20promo%20de%20hamburguesa%20y%20refresco!");
        }else if(contadorNumPaquete == 2)
        {
            window.open("https://api.whatsapp.com/send?phone=+5215584151591&text=Buen%20dia!%20quiero%20la%20promo%20de%202x1%20en%20cerveza!");
        }else if(contadorNumPaquete == 3)
        {
            window.open("https://api.whatsapp.com/send?phone=+5215584151591&text=Buen%20dia!%20quiero%20la%20promo%20de%20hamburguesa%20y%20papas!");
        }
        
    });


    