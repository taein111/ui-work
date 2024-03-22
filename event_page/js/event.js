
  const change_image = document.querySelector("#change_image");
  const image_box1 = document.querySelector(".side_image1");
  const image_box2 = document.querySelector(".side_image2");
  const image_box3 = document.querySelector(".side_image3");

  image_box1.addEventListener("mouseover", function(){
    change_image.src="images/1.png"
  });
  image_box2.addEventListener("mouseenter", function(){
    change_image.src="images/2.png"
  });
  image_box3.addEventListener("mouseenter", function(){
    change_image.src="images/3.png"
  });

  //  image_box1.addEventListener("mouseleave", function(){
  //   change_image.src="images/왼쪽 이벤트1.png"
  //  })
