// ��ȡli��ǩα����
var slider_li=document.getElementById('slider_ul').children;

// ��ȡ�ֲ�ͼͼƬDOM����
var slider_img=document.getElementById('slider_a').children[0];


// Ϊ�ֲ�ͼ�İ�ť��������¼����������л�·���ĺ���
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
