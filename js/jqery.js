$(function(){
	//购物车
	var gouwuche=$(".gouwuche");
	gouwuche.hover(function(){
		$(".jsgwc").stop();
		$(this).children(".jsgwc").slideToggle(300);
	})

//top下拉

	$(".top_list_aa").hover(function(){
		$(".jstop").stop();
		$(this).find(".jstop").slideDown();
	},function(){
		$(".jstop").stop();
		$(this).find(".jstop").hide();
		})

//banner轮播
var imgs=$(".img_a1");
var btn=$(".circle");
var index=0;
function demo(type){
	if(type=="r"){
		index++;
		if(index>=imgs.length){
			index=0;
		}
	}else if(type=="l"){
		index--;
		if(index<=-1){
			index=imgs.length-1;
		}
	}
	imgs.hide();
	imgs.eq(index).fadeIn();
	btn.css({background:"#333"});
	btn.eq(index).css({background:"#ccc"})
}
var t=setInterval(function(){
	demo("r")
},2000);
$(".img_a").hover(function(){
	clearInterval(t)
},function(){
	t=setInterval(function(){
	demo("r")
},2000);
})
$(".banner_middle_a").click(function(){
	demo("l");
})
$(".banner_middle_b").click(function(){
	demo("r");
})
btn.click(function(){
		var index1=$(this).index();
	 	imgs.hide();
		imgs.eq(index1).fadeIn();
		btn.css({background:"#333"});
		btn.eq(index1).css({background:"#ccc"});
  	 	index=$(this).index();

})
//banner左侧淡入淡出
$(".banner_left_aa").hover(function(){
	$(".jsblerji").stop();
	$(this).find(".jsblerji").show()
},function(){
	$(".jsblerji").stop();
	$(this).find(".jsblerji").hide();
})
//搜索框
$(".search").focus(function(){
	$(".sousuo").find(".mijsssk").show();
	$(".sousuo").css("border-color","#ff6700")
	$(".search").css("border-color","#ff6770")
	$(".sousuo").find(".shouhuan").hide();
	$(".sousuo").find(".xiaomishouji").hide();

})
$(".search").blur(function(){
	$(".sousuo").find(".mijsssk").hide();
	$(".sousuo").css("border-color","#e0e0e0")
	$(".search").css("border-color","#e0e0e0")
	$(".sousuo").find(".shouhuan").show();
	$(".sousuo").find(".xiaomishouji").show();
})
$(".sousuo").hover(function(){
	if($(".mijsssk").css("display")=="none"){
		$(".sousuo").css("border-color","#b0b0b0")
		$(".search").css("border-color","#b0b0b0")
	}
},function(){
	if($(".mijsssk").css("display")=="none"){
		$(".sousuo").css("border-color","#e0e0e0")
		$(".search").css("border-color","#e0e0e0")
	}
})

//小米明星产品
function move(){
	var left=$(".star_products1").position().left;
	if(left==-1240){
		$(".star_products1").animate({left:0},600);
		$(".mxcpjt11").css("color","#757575")
		$(".mxcpjt21").css("color","#b0b0b0")
	}else{
		$(".star_products1").animate({left:-1240},600);
		$(".mxcpjt11").css("color","#b0b0b0")
		$(".mxcpjt21").css("color","#757575")
	}
}
var t1=setInterval(move,3000);
$(".mxcpjt11").click(function(){
	$(".mxcpjt11").css("color","#b0b0b0")
	$(".mxcpjt21").css("color","#757575")
	$(".star_products1").animate({left:-1240},600)
})
$(".mxcpjt21").click(function(){
	$(".star_products1").animate({left:0},600)
	$(".mxcpjt21").css("color","#b0b0b0")
	$(".mxcpjt11").css("color","#757575")
})
$(".baojiantou").mouseover(function(){
	clearInterval(t1)
})
$(".baojiantou").mouseout(function(){
	t1=setInterval(move,3000);
})
//为你推介
$(".mxcpjt12").click(function(){
	$(".mxcpjt12").css("color","#b0b0b0")
	$(".mxcpjt22").css("color","#757575")
	$(".star_products2").animate({left:-1240},600)
})
$(".mxcpjt22").click(function(){
	$(".star_products2").animate({left:0},600)
	$(".mxcpjt22").css("color","#b0b0b0")
	$(".mxcpjt12").css("color","#757575")
})
//搭配选项卡
$(".dapeiboc_ba1").hover(function(){
	var index3=$(this).index();
	$(".dapeiboc_ba1").css({color:"#424242",borderBottom:"none"})
	$(".dapei_top1").css("display","none");
	$(".dapeiboc_ba1").eq(index3).css({color:"#ff6700",borderBottom:"2px solid #FF6700"})
	$(".dapei_top1").eq(index3).css("display","block")
})



$(".dapei_img_b").hover(function(){
	$(this).css({boxShadow:"0px 15px 30px rgba(0,0,0,0.1)",marginTop:-5,transition:"all 0.5s ease"})
	$(this).children(".dppj").slideToggle(300);
},function(){
	$(this).css({boxShadow:"none",marginTop:0,transition:"none"})
	$(this).children(".dppj").hide();
})



$(".b1dapei_img_b").hover(function(){
	$(this).css({boxShadow:"0px 15px 30px rgba(0,0,0,0.1)",marginTop:-5,transition:"all 0.5s ease"})
},function(){
	$(this).css({boxShadow:"none",marginTop:0,transition:"none"})
})	
//配件选项卡
$(".dapeiboc_ba2").hover(function(){
	var index3=$(this).index();
	$(".dapeiboc_ba2").css({color:"#424242",borderBottom:"none"})
	$(".dapei_top2").css("display","none");
	$(".dapeiboc_ba2").eq(index3).css({color:"#ff6700",borderBottom:"2px solid #FF6700"})
	$(".dapei_top2").eq(index3).css("display","block")
})

//周边选项卡

$(".dapeiboc_ba3").hover(function(){
	var index3=$(this).index();
	$(".dapeiboc_ba3").css({color:"#424242",borderBottom:"none"})
	$(".dapei_top3").css("display","none");
	$(".dapeiboc_ba3").eq(index3).css({color:"#ff6700",borderBottom:"2px solid #FF6700"})
	$(".dapei_top3").eq(index3).css("display","block")
})
//内容轮播
//diyi 
var  ztnum=0;
$(".neirong_one:nth-child(1)").hover(function(){
	$(".neirong_one_jiantou_a1").css("display","block");
	$(".neirong_one_jiantou_b1").css("display","block");
},function(){
	$(".neirong_one_jiantou_a1").css("display","none");
	$(".neirong_one_jiantou_b1").css("display","none");
})
$(".neirong_one:nth-child(2)").hover(function(){
	$(".neirong_one_jiantou_a2").css("display","block");
	$(".neirong_one_jiantou_b2").css("display","block");
},function(){
	$(".neirong_one_jiantou_a2").css("display","none");
	$(".neirong_one_jiantou_b2").css("display","none");
})
$(".neirong_one:nth-child(3)").hover(function(){
	$(".neirong_one_jiantou_a3").css("display","block");
	$(".neirong_one_jiantou_b3").css("display","block");
},function(){
	$(".neirong_one_jiantou_a3").css("display","none");
	$(".neirong_one_jiantou_b3").css("display","none");
})
$(".neirong_one:nth-child(4)").hover(function(){
	$(".neirong_one_jiantou_a4").css("display","block");
	$(".neirong_one_jiantou_b4").css("display","block");
},function(){
	$(".neirong_one_jiantou_a4").css("display","none");
	$(".neirong_one_jiantou_b4").css("display","none");
})
$(".neirong_one_jiantou_b1").click(function(){
	if(ztnum<=2){
		$(".neirong_one_circle_a1").css({border:"2px solid #fff",background:"#ccc"})
		ztnum++;
		$(".nr_lb_bg1").animate({left:-296*ztnum},600);
		$(".neirong_one_circle_a1").eq(ztnum).css({background:'#fff',border:"2px solid #ff6700",borderRadius:"50%"})
	}else{
		return;
	}
})
$(".neirong_one_jiantou_a1").click(function(){
	var ow=$(".nr_lb_bg1").position().left;
	var index=ow/-296
	if(index>=1){
		$(".neirong_one_circle_a1").css({border:"2px solid #fff",background:"#ccc"});
		ztnum=index-1;
		$(".nr_lb_bg1").animate({left:-296*(index-1)},600);
		$(".neirong_one_circle_a1").eq(ztnum).css({background:'#fff',border:"2px solid #ff6700",borderRadius:"50%"})
	}else{
		return;
	}
})
$(".neirong_one_circle_a1").click(function(){
	var index=$(this).index();
	ztnum=index;
	$(".neirong_one_circle_a1").css({border:"2px solid #fff",backgroundColor:"#ccc"})
	$(".nr_lb_bg1").css({left:-296*index})
	$(".neirong_one_circle_a1").eq(index).css({backgroundColor:'#fff',border:"2px solid #ff6700",borderRadius:"50%"})
})


/**************************************************************************/

var  ztnum2=0;
$(".neirong_one_jiantou_b2").click(function(){
	if(ztnum2<=2){
		$(".neirong_one_circle_a2").css({border:"2px solid #fff",background:"#ccc"})
		ztnum2++;
		$(".nr_lb_bg2").animate({left:-296*ztnum2},600);
		$(".neirong_one_circle_a2").eq(ztnum2).css({background:'#fff',border:"2px solid #ff6700",borderRadius:"50%"})
	}else{
		return;
	}
})
$(".neirong_one_jiantou_a2").click(function(){
	var ow=$(".nr_lb_bg2").position().left;
	var index=ow/-296
	if(index>=1){
		$(".neirong_one_circle_a2").css({border:"2px solid #fff",background:"#ccc"});
		ztnum2=index-1;
		$(".nr_lb_bg2").animate({left:-296*(index-1)},600);
		$(".neirong_one_circle_a2").eq(ztnum2).css({background:'#fff',border:"2px solid #ff6700",borderRadius:"50%"})
	}else{
		return;
	}
})
$(".neirong_one_circle_a2").click(function(){
	var index=$(this).index();
	ztnum2=index;
	$(".neirong_one_circle_a2").css({border:"2px solid #fff",background:"#ccc"})
	$(".nr_lb_bg2").eq(index).css('left',-296*index)
	$(".neirong_one_circle_a2").eq(index).css({background:'#fff',border:"2px solid #ff6700",borderRadius:"50%"})
})

/*************************************************************************/
var  ztnum3=0;
$(".neirong_one_jiantou_b3").click(function(){
	if(ztnum3<=2){
		$(".neirong_one_circle_a3").css({border:"2px solid #fff",background:"#ccc"})
		ztnum3++;
		$(".nr_lb_bg3").animate({left:-296*ztnum3},600);
		$(".neirong_one_circle_a3").eq(ztnum3).css({background:'#fff',border:"2px solid #ff6700",borderRadius:"50%"})
	}else{
		return;
	}
})
$(".neirong_one_jiantou_a3").click(function(){
	var ow=$(".nr_lb_bg3").position().left;
	var index=ow/-296
	if(index>=1){
		$(".neirong_one_circle_a3").css({border:"2px solid #fff",background:"#ccc"});
		ztnum3=index-1;
		$(".nr_lb_bg3").animate({left:-296*(index-1)},600);
		$(".neirong_one_circle_a3").eq(ztnum3).css({background:'#fff',border:"2px solid #ff6700",borderRadius:"50%"})
	}else{
		return;
	}
})
$(".neirong_one_circle_a3").click(function(){
	var index=$(this).index();
	ztnum3=index;
	$(".neirong_one_circle_a3").css({border:"2px solid #fff",background:"#ccc"})
	$(".nr_lb_bg3").eq(index).css('left',-296*index)
	$(".neirong_one_circle_a3").eq(index).css({background:'#fff',border:"2px solid #ff6700",borderRadius:"50%"})
})

/*************************************************************************/

var  ztnum4=0;
$(".neirong_one_jiantou_b4").click(function(){
	if(ztnum4<=2){
		$(".neirong_one_circle_a4").css({border:"2px solid #fff",background:"#ccc"})
		ztnum4++;
		$(".nr_lb_bg4").animate({left:-296*ztnum4},600);
		$(".neirong_one_circle_a4").eq(ztnum4).css({background:'#fff',border:"2px solid #ff6700",borderRadius:"50%"})
	}else{
		return;
	}
})
$(".neirong_one_jiantou_a4").click(function(){
	var ow=$(".nr_lb_bg4").position().left;
	var index=ow/-296
	if(index>=1){
		$(".neirong_one_circle_a4").css({border:"2px solid #fff",background:"#ccc"});
		ztnum4=index-1;
			$(".nr_lb_bg4").animate({left:-296*(index-1)},600);
		$(".neirong_one_circle_a4").eq(ztnum4).css({background:'#fff',border:"2px solid #ff6700",borderRadius:"50%"})
	}else{
		return;
	}
})
$(".neirong_one_circle_a4").click(function(){
	var index=$(this).index();
	ztnum4=index;
	$(".neirong_one_circle_a4").css({border:"2px solid #fff",background:"#ccc"})
	$(".nr_lb_bg4").eq(index).css('left',-296*index)
	$(".neirong_one_circle_a4").eq(index).css({background:'#fff',border:"2px solid #ff6700",borderRadius:"50%"})
})

































})
	


