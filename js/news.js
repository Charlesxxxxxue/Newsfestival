window.onload = function(){
// 	$(function(){
//     $(window).scrollTop(0);
// });
	$(function(){
		$("#body").mouseover(function(){
		$("#line-1").fadeIn(2000);
		$("#line-2").fadeIn(4000);
		$("#line-3").fadeIn(6000);
		$("#line-4").fadeIn(8000);
			
		})

	})
	
	$(document).ready(function(){
		
		$("#content").mouseover(function(){
		    $("#side").fadeIn();
		});
		$("#content").mouseleave(function(){
		    $("#side").fadeOut();
		});
		
	    $(".line0").mouseover(function(){
	        $(".time0").fadeIn();
	    });
	    $(".line0").mouseleave(function(){
			$(".time0").fadeOut();
	    });
		
		$(".line1").mouseover(function(){
		    $(".time1").fadeIn();
		});
		$(".line1").mouseleave(function(){
		    $(".time1").fadeOut();
		});
		
		$(".line2").mouseover(function(){
		    $(".time2").fadeIn();
		});
		$(".line2").mouseleave(function(){
		    $(".time2").fadeOut();
		});
		
		$(".line3").mouseover(function(){
		    $(".time3").fadeIn();
		});
		$(".line3").mouseleave(function(){
		    $(".time3").fadeOut();
		});
		
		$(".line4").mouseover(function(){
		    $(".time4").fadeIn();
		});
		$(".line4").mouseleave(function(){
		    $(".time4").fadeOut();
		});
		
		$(".line5").mouseover(function(){
		    $(".time5").fadeIn();
		});
		$(".line5").mouseleave(function(){
		    $(".time5").fadeOut();
		});
		
		$(".line6").mouseover(function(){
		    $(".time6").fadeIn();
		});
		$(".line6").mouseleave(function(){
		    $(".time6").fadeOut();
		});
		
		$(".line7").mouseover(function(){
		    $(".time7").fadeIn();
		});
		$(".line7").mouseleave(function(){
		    $(".time7").fadeOut();
		});
		
		$(".line8").mouseover(function(){
		    $(".time8").fadeIn();
		});
		$(".line8").mouseleave(function(){
		    $(".time8").fadeOut();
		});
		
		$(".line9").mouseover(function(){
		    $(".time9").fadeIn();
		});
		$(".line9").mouseleave(function(){
		    $(".time9").fadeOut();
		});
		
		$(".line10").mouseover(function(){
		    $(".time10").fadeIn();
		});
		$(".line10").mouseleave(function(){
		    $(".time10").fadeOut();
		});
		
		$(".line11").mouseover(function(){
		    $(".time11").fadeIn();
		});
		$(".line11").mouseleave(function(){
		    $(".time11").fadeOut();
		});
		
		$(".line12").mouseover(function(){
		    $(".time12").fadeIn();
		});
		$(".line12").mouseleave(function(){
		    $(".time12").fadeOut();
		});
		
		$(".line13").mouseover(function(){
		    $(".time13").fadeIn();
		});
		$(".line13").mouseleave(function(){
		    $(".time13").fadeOut();
		});
		
		$(".line14").mouseover(function(){
		    $(".time14").fadeIn();
		});
		$(".line14").mouseleave(function(){
		    $(".time14").fadeOut();
		});
		
		$(".line15").mouseover(function(){
		    $(".time15").fadeIn();
		});
		$(".line15").mouseleave(function(){
		    $(".time15").fadeOut();
		});
		
		$(".line16").mouseover(function(){
		    $(".time16").fadeIn();
		});
		$(".line16").mouseleave(function(){
		    $(".time16").fadeOut();
		});
		
		$(".line17").mouseover(function(){
		    $(".time17").fadeIn();
		});
		$(".line17").mouseleave(function(){
		    $(".time17").fadeOut();
		});

		
		$("#content").mouseover(function(){
		    $("#dateclock").css("display","inline-block");
		});
		$("#content").mouseleave(function(){
		    $("#dateclock").css("display","none");
		});
		
		var lineNum = 0;
		
		$("#1-23").mouseover(function(){
		    var a = document.getElementById("dateclock");
			a.innerHTML='1月23日';
			for(lineNum = 0;lineNum<=0;lineNum++){
				 $(".line"+lineNum).css("background","red");
			} 
			for(var x=1;x<24;x++){
				$(".line"+x).css("background","gray");
			}
			$(".time0").css("display","inline");
			$(".time1").css("display","none");
			$(".time2").css("display","none");
			$(".time3").css("display","none");
			$(".time4").css("display","none");
			$(".time5").css("display","none");
			$(".time6").css("display","none");
			$(".time7").css("display","none");
			$(".time8").css("display","none");
			$(".time9").css("display","none");
			$(".time10").css("display","none");
			$(".time11").css("display","none");
			$(".time12").css("display","none");
			$(".time13").css("display","none");
			$(".time14").css("display","none");
			
		});
		
		$("#1-25").mouseover(function(){
		    var a = document.getElementById("dateclock");
			a.innerHTML='1月25日';
			for(lineNum = 0;lineNum<=1;lineNum++){
				 $(".line"+lineNum).css("background","red");
			} 
			for(var x=2;x<24;x++){
				$(".line"+x).css("background","gray");
			}
			$(".time0").css("display","none");
			$(".time1").css("display","inline");
			$(".time2").css("display","none");
			$(".time3").css("display","none");
			$(".time4").css("display","none");
			$(".time5").css("display","none");
			$(".time6").css("display","none");
			$(".time7").css("display","none");
			$(".time8").css("display","none");
			$(".time9").css("display","none");
			$(".time10").css("display","none");
			$(".time11").css("display","none");
			$(".time12").css("display","none");
			$(".time13").css("display","none");
			$(".time14").css("display","none");

		});
		
		$("#1-28").mouseover(function(){
		    var a = document.getElementById("dateclock");
			a.innerHTML='1月28日';
			for(lineNum = 0;lineNum<=2;lineNum++){
				 $(".line"+lineNum).css("background","red");
			} 
			for(var x=3;x<24;x++){
				$(".line"+x).css("background","gray");
			}
			$(".time0").css("display","none");
			$(".time1").css("display","none");
			$(".time2").css("display","inline");
			$(".time3").css("display","none");
			$(".time4").css("display","none");
			$(".time5").css("display","none");
			$(".time6").css("display","none");
			$(".time7").css("display","none");
			$(".time8").css("display","none");
			$(".time9").css("display","none");
			$(".time10").css("display","none");
			$(".time11").css("display","none");
			$(".time12").css("display","none");
			$(".time13").css("display","none");
			$(".time14").css("display","none");
			
		});
		
		$("#1-30").mouseover(function(){
		    var a = document.getElementById("dateclock");
			a.innerHTML='1月30日';
			for(lineNum = 0;lineNum<=3;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=4;x<24;x++){
				$(".line"+x).css("background","gray");
			}
			$(".time0").css("display","none");
			$(".time1").css("display","none");
			$(".time2").css("display","none");
			$(".time3").css("display","inline");
			$(".time4").css("display","none");
			$(".time5").css("display","none");
			$(".time6").css("display","none");
			$(".time7").css("display","none");
			$(".time8").css("display","none");
			$(".time9").css("display","none");
			$(".time10").css("display","none");
			$(".time11").css("display","none");
			$(".time12").css("display","none");
			$(".time13").css("display","none");
			$(".time14").css("display","none");
			
		});
		
		$("#1-31").mouseover(function(){
		    var a = document.getElementById("dateclock");
			a.innerHTML='1月31日';
			for(lineNum = 0;lineNum<=4;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=5;x<24;x++){
				$(".line"+x).css("background","gray");
			}
			$(".time0").css("display","none");
			$(".time1").css("display","none");
			$(".time2").css("display","none");
			$(".time3").css("display","none");
			$(".time4").css("display","inline");
			$(".time5").css("display","none");
			$(".time6").css("display","none");
			$(".time7").css("display","none");
			$(".time8").css("display","none");
			$(".time9").css("display","none");
			$(".time10").css("display","none");
			$(".time11").css("display","none");
			$(".time12").css("display","none");
			$(".time13").css("display","none");
			$(".time14").css("display","none");
			
		});
		
		$("#2-1").mouseover(function(){
		    var a = document.getElementById("dateclock");
			a.innerHTML='2月1日';
			for(lineNum = 0;lineNum<=5;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=6;x<24;x++){
				$(".line"+x).css("background","gray");
			}
			$(".time0").css("display","none");
			$(".time1").css("display","none");
			$(".time2").css("display","none");
			$(".time3").css("display","none");
			$(".time4").css("display","none");
			$(".time5").css("display","inline");
			$(".time6").css("display","none");
			$(".time7").css("display","none");
			$(".time8").css("display","none");
			$(".time9").css("display","none");
			$(".time10").css("display","none");
			$(".time11").css("display","none");
			$(".time12").css("display","none");
			$(".time13").css("display","none");
			$(".time14").css("display","none");
			
		});

		$("#2-2").mouseover(function(){
		    var a = document.getElementById("dateclock");
			a.innerHTML='2月2日';
			for(lineNum = 0;lineNum<=6;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=7;x<24;x++){
				$(".line"+x).css("background","gray");
			}
			$(".time0").css("display","none");
			$(".time1").css("display","none");
			$(".time2").css("display","none");
			$(".time3").css("display","none");
			$(".time4").css("display","none");
			$(".time5").css("display","none");
			$(".time6").css("display","inline");
			$(".time7").css("display","none");
			$(".time8").css("display","none");
			$(".time9").css("display","none");
			$(".time10").css("display","none");
			$(".time11").css("display","none");
			$(".time12").css("display","none");
			$(".time13").css("display","none");
			$(".time14").css("display","none");
			
		});
		
		$("#2-3").mouseover(function(){
		    var a = document.getElementById("dateclock");
			a.innerHTML='2月3日';
			for(lineNum = 0;lineNum<=7;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=8;x<24;x++){
				$(".line"+x).css("background","gray");
			}
			$(".time0").css("display","none");
			$(".time1").css("display","none");
			$(".time2").css("display","none");
			$(".time3").css("display","none");
			$(".time4").css("display","none");
			$(".time5").css("display","none");
			$(".time6").css("display","none");
			$(".time7").css("display","inline");
			$(".time8").css("display","none");
			$(".time9").css("display","none");
			$(".time10").css("display","none");
			$(".time11").css("display","none");
			$(".time12").css("display","none");
			$(".time13").css("display","none");
			$(".time14").css("display","none");
			
		});
		
		$("#2-4").mouseover(function(){
		    var a = document.getElementById("dateclock");
			a.innerHTML='2月4日';
			for(lineNum = 0;lineNum<=8;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=9;x<24;x++){
				$(".line"+x).css("background","gray");
			}
			$(".time0").css("display","none");
			$(".time1").css("display","none");
			$(".time2").css("display","none");
			$(".time3").css("display","none");
			$(".time4").css("display","none");
			$(".time5").css("display","none");
			$(".time6").css("display","none");
			$(".time7").css("display","none");
			$(".time8").css("display","inline");
			$(".time9").css("display","none");
			$(".time10").css("display","none");
			$(".time11").css("display","none");
			$(".time12").css("display","none");
			$(".time13").css("display","none");
			$(".time14").css("display","none");
			
		});
		
		$("#2-5").mouseover(function(){
		    var a = document.getElementById("dateclock");
			a.innerHTML='2月5日';
			for(lineNum = 0;lineNum<=9;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=10;x<24;x++){
				$(".line"+x).css("background","gray");
			}
			$(".time0").css("display","none");
			$(".time1").css("display","none");
			$(".time2").css("display","none");
			$(".time3").css("display","none");
			$(".time4").css("display","none");
			$(".time5").css("display","none");
			$(".time6").css("display","none");
			$(".time7").css("display","none");
			$(".time8").css("display","none");
			$(".time9").css("display","inline");
			$(".time10").css("display","none");
			$(".time11").css("display","none");
			$(".time12").css("display","none");
			$(".time13").css("display","none");
			$(".time14").css("display","none");
			
		});
		
		$("#2-7").mouseover(function(){
		    var a = document.getElementById("dateclock");
			a.innerHTML='2月7日';
			for(lineNum = 0;lineNum<=10;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=11;x<24;x++){
				$(".line"+x).css("background","gray");
			}
			$(".time0").css("display","none");
			$(".time1").css("display","none");
			$(".time2").css("display","none");
			$(".time3").css("display","none");
			$(".time4").css("display","none");
			$(".time5").css("display","none");
			$(".time6").css("display","none");
			$(".time7").css("display","none");
			$(".time8").css("display","none");
			$(".time9").css("display","none");
			$(".time10").css("display","inline");
			$(".time11").css("display","none");
			$(".time12").css("display","none");
			$(".time13").css("display","none");
			$(".time14").css("display","none");
			
		});
		
		$("#2-12").mouseover(function(){
		    var a = document.getElementById("dateclock");
			a.innerHTML='2月12日';
			for(lineNum = 0;lineNum<=11;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=12;x<24;x++){
				$(".line"+x).css("background","gray");
			}
			$(".time0").css("display","none");
			$(".time1").css("display","none");
			$(".time2").css("display","none");
			$(".time3").css("display","none");
			$(".time4").css("display","none");
			$(".time5").css("display","none");
			$(".time6").css("display","none");
			$(".time7").css("display","none");
			$(".time8").css("display","none");
			$(".time9").css("display","none");
			$(".time10").css("display","none");
			$(".time11").css("display","inline");
			$(".time12").css("display","none");
			$(".time13").css("display","none");
			$(".time14").css("display","none");
			
		});
		
		$("#2-24").mouseover(function(){
		    var a = document.getElementById("dateclock");
			a.innerHTML='2月24日';
			for(lineNum = 0;lineNum<=12;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=13;x<24;x++){
				$(".line"+x).css("background","gray");
			}
			$(".time0").css("display","none");
			$(".time1").css("display","none");
			$(".time2").css("display","none");
			$(".time3").css("display","none");
			$(".time4").css("display","none");
			$(".time5").css("display","none");
			$(".time6").css("display","none");
			$(".time7").css("display","none");
			$(".time8").css("display","none");
			$(".time9").css("display","none");
			$(".time10").css("display","none");
			$(".time11").css("display","none");
			$(".time12").css("display","inline");
			$(".time13").css("display","none");
			$(".time14").css("display","none");
			
		});
		
		$("#4-8").mouseover(function(){
		    var a = document.getElementById("dateclock");
			a.innerHTML='4月8日';
			for(lineNum = 0;lineNum<=13;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=14;x<24;x++){
				$(".line"+x).css("background","gray");
			}
			$(".time0").css("display","none");
			$(".time1").css("display","none");
			$(".time2").css("display","none");
			$(".time3").css("display","none");
			$(".time4").css("display","none");
			$(".time5").css("display","none");
			$(".time6").css("display","none");
			$(".time7").css("display","none");
			$(".time8").css("display","none");
			$(".time9").css("display","none");
			$(".time10").css("display","none");
			$(".time11").css("display","none");
			$(".time12").css("display","none");
			$(".time13").css("display","inline");
			$(".time14").css("display","none");
			
		});
		
		$("#4-24").mouseover(function(){
		    var a = document.getElementById("dateclock");
			a.innerHTML='4月24日';
			for(lineNum = 0;lineNum<=14;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=15;x<24;x++){
				$(".line"+x).css("background","gray");
			}
			$(".time0").css("display","none");
			$(".time1").css("display","none");
			$(".time2").css("display","none");
			$(".time3").css("display","none");
			$(".time4").css("display","none");
			$(".time5").css("display","none");
			$(".time6").css("display","none");
			$(".time7").css("display","none");
			$(".time8").css("display","none");
			$(".time9").css("display","none");
			$(".time10").css("display","none");
			$(".time11").css("display","none");
			$(".time12").css("display","none");
			$(".time13").css("display","none");
			$(".time14").css("display","inline");
			
		});

		
	});
	
	
	
	
	
	$(document).ready(function(){
		var lineNum = 0;
		$(".line0").click(function(){
			var a = document.getElementById("dateclock");
			a.innerHTML='1月23日';
			for(lineNum = 0;lineNum<=0;lineNum++){
				 $(".line"+lineNum).css("background","red");
			} 
			for(var x=1;x<24;x++){
				$(".line"+x).css("background","gray");
			}
		});
		
		$(".line1").click(function(){
			var a = document.getElementById("dateclock");
			a.innerHTML='1月25日';
			for(lineNum = 0;lineNum<=1;lineNum++){
				 $(".line"+lineNum).css("background","red");
			} 
			for(var x=2;x<24;x++){
				$(".line"+x).css("background","gray");
			}
		});
		
		$(".line2").click(function(){
			var a = document.getElementById("dateclock");
			a.innerHTML='1月28日';
			for(lineNum = 0;lineNum<=2;lineNum++){
				 $(".line"+lineNum).css("background","red");
			} 
			for(var x=3;x<24;x++){
				$(".line"+x).css("background","gray");
			}
		});
		
		$(".line3").click(function(){
			var a = document.getElementById("dateclock");
			a.innerHTML='1月30日';
			for(lineNum = 0;lineNum<=3;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=4;x<24;x++){
				$(".line"+x).css("background","gray");
			}
		});
		
		$(".line4").click(function(){
			var a = document.getElementById("dateclock");
			a.innerHTML='1月31日';
			for(lineNum = 0;lineNum<=4;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=5;x<24;x++){
				$(".line"+x).css("background","gray");
			}
		});
		
		$(".line5").click(function(){
			var a = document.getElementById("dateclock");
			a.innerHTML='2月1日';
			for(lineNum = 0;lineNum<=5;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=6;x<24;x++){
				$(".line"+x).css("background","gray");
			}
		});
		
		$(".line6").click(function(){
			var a = document.getElementById("dateclock");
			a.innerHTML='2月2日';
			for(lineNum = 0;lineNum<=6;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=7;x<24;x++){
				$(".line"+x).css("background","gray");
			}
		});
		
		$(".line7").click(function(){
			var a = document.getElementById("dateclock");
			a.innerHTML='2月3日';
			for(lineNum = 0;lineNum<=7;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=8;x<24;x++){
				$(".line"+x).css("background","gray");
			}
		});
		
		$(".line8").click(function(){
			var a = document.getElementById("dateclock");
			a.innerHTML='2月4日';
			for(lineNum = 0;lineNum<=8;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=9;x<24;x++){
				$(".line"+x).css("background","gray");
			}
		});
		
		$(".line9").click(function(){
			var a = document.getElementById("dateclock");
			a.innerHTML='2月5日';
			for(lineNum = 0;lineNum<=9;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=10;x<24;x++){
				$(".line"+x).css("background","gray");
			}
		});
		
		$(".line10").click(function(){
			var a = document.getElementById("dateclock");
			a.innerHTML='2月7日';
			for(lineNum = 0;lineNum<=10;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=11;x<24;x++){
				$(".line"+x).css("background","gray");
			}
		});
		
		$(".line11").click(function(){
			var a = document.getElementById("dateclock");
			a.innerHTML='2月12日';
			for(lineNum = 0;lineNum<=11;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=12;x<24;x++){
				$(".line"+x).css("background","gray");
			}
		});
		
		$(".line12").click(function(){
			var a = document.getElementById("dateclock");
			a.innerHTML='2月24日';
			for(lineNum = 0;lineNum<=12;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=13;x<24;x++){
				$(".line"+x).css("background","gray");
			}
		});
		
		$(".line13").click(function(){
			var a = document.getElementById("dateclock");
			a.innerHTML='4月8日';
			for(lineNum = 0;lineNum<=13;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=14;x<24;x++){
				$(".line"+x).css("background","gray");
			}
		});
		
		$(".line14").click(function(){
			var a = document.getElementById("dateclock");
			a.innerHTML='4月24日';
			for(lineNum = 0;lineNum<=14;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=15;x<24;x++){
				$(".line"+x).css("background","gray");
			}
		});
		
		$(".line15").click(function(){
			var a = document.getElementById("dateclock");
			a.innerHTML='2月2日';
			for(lineNum = 0;lineNum<=15;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=16;x<24;x++){
				$(".line"+x).css("background","gray");
			}
		});
		
		$(".line16").click(function(){
			for(lineNum = 0;lineNum<=16;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=17;x<24;x++){
				$(".line"+x).css("background","gray");
			}
		});
		
		$(".line18").click(function(){
			for(lineNum = 0;lineNum<=18;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=19;x<24;x++){
				$(".line"+x).css("background","gray");
			}
		});
		
		$(".line19").click(function(){
			for(lineNum = 0;lineNum<=19;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=20;x<24;x++){
				$(".line"+x).css("background","gray");
			}
		});
		
		$(".line20").click(function(){
			for(lineNum = 0;lineNum<=20;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=21;x<24;x++){
				$(".line"+x).css("background","gray");
			}
		});
		
		$(".line21").click(function(){
			for(lineNum = 0;lineNum<=21;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=22;x<24;x++){
				$(".line"+x).css("background","gray");
			}
		});
		
		$(".line22").click(function(){
			for(lineNum = 0;lineNum<=22;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=23;x<24;x++){
				$(".line"+x).css("background","gray");
			}
		});
		
		$(".line23").click(function(){
			for(lineNum = 0;lineNum<=23;lineNum++){
				 $(".line"+lineNum).css("background","red");	
			} 
			for(var x=24;x<24;x++){
				$(".line"+x).css("background","gray");
			}
		});
		
		// $(".line3").click(function(){
		// 	for(;lineNum<=3;lineNum++){
		// 		 $(".line"+lineNum).css("background","red");	
		// 	} 
		// 	for(var x=4;x<24;x++){
		// 		$(".line"+x).css("background","gray");
		// 	}
		// });
		
		// $(".line3").click(function(){
		// 	for(;lineNum<=3;lineNum++){
		// 		 $(".line"+lineNum).css("background","red");	
		// 	} 
		// 	for(var x=4;x<24;x++){
		// 		$(".line"+x).css("background","gray");
		// 	}
		// });
		
		// $(".line3").click(function(){
		// 	for(;lineNum<=3;lineNum++){
		// 		 $(".line"+lineNum).css("background","red");	
		// 	} 
		// 	for(var x=4;x<24;x++){
		// 		$(".line"+x).css("background","gray");
		// 	}
		// });
		
	});
			


}