

{
function next() {
              x= (x === images.length - 1) ? 0 : x+1;           
              document.getElementById("delicacies").style.backgroundImage= `url(${images[x]})`;

          }

            function prev() {
              x = (x <= 0) ? images.length - 1 : x - 1;
              document.getElementById("delicacies").style.backgroundImage = `url(${images[x]})`;
          }

function timer() {

	setInterval(next,4000) 
}
	var images=[],x=-1;


images[0]="imager/ai_whiskey.jpg";
images[1]="imager/ai_queencakes.png";
images[2]="imager/couple_orange.jpg";
images[3]="imager/ai_glass.jpg";
images[4]="imager/cream_drink.jpg";
images[5]="imager/sprinkle_drink.jpg";
images[6]="imager/nathan.jpg";
images[7]="imager/redberry_cake.jpg";
images[8]="imager/whitney.jpg";
images[9]="imager/pan_fry.jpg";
images[10]="imager/steak3.jpg";
images[11]="imager/lemon_juice.jpg";
images[12]="imager/table.jpg";
images[13]="imager/cake1.jpg";
images[14]="imager/nathan2.jpg";
}

{
function next2() {
              a= (a === images2.length - 1) ? 0 : a+1;           
              document.getElementById("delicacies2").style.backgroundImage= `url(${images2[a]})`;

          }

            function prev2() {
              a = (a <= 0) ? images2.length - 1 : a - 1;
              document.getElementById("delicacies2").style.backgroundImage = `url(${images2[a]})`;
          }

function timer2() {

  setInterval(next2,6000) 
}
  var images2=[],a=-1;



images2[0]="imager/samosas.jpg";
images2[1]="imager/meatloaf.jpg";
images2[2]="imager/steak2.jpg";
images2[3]="imager/veg_skewer.jpg";
images2[4]="imager/taccos.jpg";
images2[5]="imager/dragon_fruit.jpg";
images2[6]="imager/egg_roll.jpg";
images2[7]="imager/burger.png";
images2[8]="imager/steak4.jpg";
images2[9]="imager/steak1.jpg";

}

/*
images[0]="imager/ai_whiskey.jpg";
images[1]="imager/ai_queencakes.png";
images[2]="imager/couple_orange.jpg";
images[3]="imager/ai_glass.jpg";
images[4]="imager/samosas.jpg";
images[5]="imager/meatloaf.jpg";
images[6]="imager/cream_drink.jpg";
images[7]="imager/sprinkle_drink.jpg";
images[8]="imager/steak1.jpg";
images[9]="imager/nathan.jpg";
images[10]="imager/redberry_cake.jpg";
images[11]="imager/whitney.jpg";
images[12]="imager/pan_fry.jpg";
images[13]="imager/steak2.jpg";
images[14]="imager/veg_skewer.jpg";
images[15]="imager/steak3.jpg";
images[16]="imager/taccos.jpg";
images[17]="imager/dragon_fruit.jpg";
images[18]="imager/lemon_juice.jpg";
images[19]="imager/nathan2.jpg";
images2[6]="imager/egg_roll.jpg";
images[12]="imager/table.jpg";
<button type="button" onclick="prev()" class="prev_button" ><bold> &#x25c0; </bold></button>
<button type="button" onclick="next()" class="next_button" ><bold> &#x25b6; </bold></button>


*/