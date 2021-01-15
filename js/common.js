for(let i=0;i<20;i++){
    $("#main .clouds").append(`<span><img src="../images/main/cloud0${Math.ceil(Math.random()*2)}.png" alt=""></span>`);
}
const clouds = $("#main .clouds span");
const balloons = $("#main .balloons span");
const airplane = $("#main .airplane");
$(clouds).each(function(i,item){
    gsap.fromTo(item,{
        top:Math.random()*1000,
        scale:Math.random()*0.2+0.1,
        left:"100%",
        
    },{
        delay:Math.random()*10+3,
        left:"-120%",
        duration:Math.random()*120+50,
        repeat:-1,
    });
});

$(balloons).each(function(i,item){
    gsap.set(item,{
        top:Math.random()*500,
        left:Math.random()*1600+200,
        scale:Math.random()*0.2+0.8,
    });
    gsap.to(item,{
        y:30,
        repeat:-1,
        ease:"none",
        yoyo:true,
        duration:1,
        delay:Math.random()
    });
});
function moveAirplane() {
    let randomLeft  =  -(Math.random()*20+10)+"%";
    let randomTop  =  (Math.random()*20+10)+"%";
    gsap.fromTo(airplane,{
        top:0,
        left:"100%"
    },{
        top:randomTop,
        left:randomLeft,
        ease:"none",
        duration:10,
        onComplete:function(){
            moveAirplane();
        }
    });
}



let profileTL = gsap.timeline({
    scrollTrigger:{
        trigger:"#main .profile",
        start:"top 30%",
        end:"bottom top",
        markers:true,
        toggleActions:"play none resume reset",
        onEnter:function(self){
            console.log("enter");
        },
        onEnterBack:function(self){
            console.log("enter back");
        },
        
    }
});
profileTL.from("#main .mainCloud",{
    scale:0,
    ease:"power4",
    duration:1,
})
.from("#main .item",{
    opacity:0,
    y:-200,
    ease:"bounce",
    stagger:{
        each:0.2,
        from:"random",
    },
    duration:1,
})
.from("#main .woman",{
    opacity:0,
    y:-200,
    duration:1,
    ease:"bounce",
})
.from("#main .wordBalloon",{
    transformOrigin:"50px 90%",
    scale:0,
    duration:1,
    ease:"power4",
})




moveAirplane();