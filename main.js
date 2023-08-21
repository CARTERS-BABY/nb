function setup(){
    video = createCapture(VIDEO)
    video.size(550 , 500)
    canvas = createCanvas (550 , 410 )
    canvas.position(560 , 150 )
    poseNet = ml5.poseNet(video , modelo)
    poseNet.on('pose', resultado )
    }
    function draw(){
        background('#802be2')
        fill('#e2b222b')
        stroke('#e2b222b')
        square(nosex - 50 , nosey - 50 , 100)
    }
    function modelo(){
        console.log('carregado')
    }
    function resultado(resultados){
        if(resultados.length>0){
          //  console.log(resultados)
        }
    }