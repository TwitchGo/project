// 获取li标签伪数组
var slider_li=document.getElementById('slider_ul').children;

// 获取轮播图图片DOM对象
var slider_img=document.getElementById('slider_a').children[0];


// 为轮播图的按钮创建点击事件，并调用切换路径的函数
for(var i=0;i<slider_li.length;i++){
    slider_li[i].index=i;
    slider_li[i].onclick=function () {
        if (this.index==0){
            slider_img.src="../images/carousel.jpg";
        }
        if (this.index==1){
            slider_img.src="../images/carousel1.jpg";
        }
        if (this.index==2){
            slider_img.src="../images/carousel2.jpg";
        }
    }
}
