export default function getStyle(){

  var tpl = `

@import "../../node_modules/less-plugin-est/src/all";
@IMAGE_URL: 'images/';
//@IMAGE_URL: 'http://a.vpimg3.com/upload/actpics/uidesign/2016/2m/0218haohaizi/';
@WARM_NAME: 'warm';
@SALE_NAME: 'sale';
@nav-z-index: 20;

.kstate-debug {
  a {
    background-color: rgba(0, 0, 0, .3);
    &.kstate-hover, &:hover{ background-color: rgba(0, 0, 0, .4); }
  }
}
/* 状态-begin */
.kstate-hover{ }
.kstate-fixed{ position: fixed; }
/* 状态-end */

.kmods { overflow: hidden; background: #efefef; }
.kmod { background: no-repeat center top; }
.kmod-bd { .clearfix(); position: relative; width: 1000px; margin: 0 auto; }
.kmod-link, .kmod-plink, .kmod-blink { float: left; }
.kmod-hash { }
.kmod-target { display: block; position: relative; visibility: hidden; }


.kmod-header { height: 500px;}
.kmod-logo{ width: 115px; height: 115px; }
.kmod-body { }
.kmod-footer {height: 250px; margin: 80px 0 40px;
  .kmod-btn { float: left; width: 311px; height: 57px; margin: 190px 0 0 334px; }
}


{{if navigators}}
/* 导航-begin */
.kmod-nav-wrap{ height: 0; }
.kmod-nav{
  position: relative;
  top: 0;
  width: 100%;
  //height: @nav-height;
  margin: 0 auto;
  background: #ccc;
  //.opacity(0);
  z-index: @nav-z-index;
  &.kstate-fixed{
    position: fixed;
  }
}
{{each navigators}}
.kmod-nav{{$index | kToIndex}}{
  width: 120px; height: 550px; margin-left: {{ $value === 'right' ? '1040px' : '-140px' }}; padding-top: 80px; background: url('@{IMAGE_URL}nav-a.png') no-repeat center 80px;
.kmod-nav-hd{ height: 170px; }
.kmod-nav-bd{ margin: 0px; }
.kmod-nav-ft{ height: 40px; .kmod-hash{ height: 35px; } }
.kmod-hash{ display: block; width: 100%; height: 115px; }
//{{each brands as $v $i}}.kmod-hash{{$i | kToIndex}}{ display: block; width: 100%; height: 60px; }{{/each}}
}
{{/each}}
{{if coupons}}
.kmod-nav-coupon { position: relative; height: 173px; }
.kmod-nav-coupon-btn {
  position: absolute; top: 143px; left: 7px; width: 106px; height: 25px;
  //background: url("@{IMAGE_URL}nav-coupon-btn-a.png") no-repeat;
}
{{/if}}
/* 导航-end */
{{/if}}


/* 品购模块-begin */
{{each modules}}
.kmod{{$index | kToIndex}} {
  height: 400px;
  {{if products}}
  .kmod-plink{ {{if layout === 'float'}}width: 100% / {{products.length}};height: 200px;{{/if}} }
  {{if layout === 'position'}}{{each products as $v $i}}.kmod-plink{{$i | kToIndex}}{width: {{(bodyWidth ? bodyWidth / products.length : '200') | kToInt}}px;height: 200px; margin-top: 0px; margin-left: 0px;}{{/each}}{{/if}}
  {{/if}}
}
{{/each}}
/* 品购模块-end */


{{if coupons}}

.kmod-coupon { position: relative; width: 482px; height: 144px; background: url("@{IMAGE_URL}coupon-a.png") no-repeat center; }
.kmod-coupon-btn {
  position: absolute; width: 163px; display: block; height: 47px; top: 39px; left: 231px;
  //background: url("@{IMAGE_URL}coupon-btn-a.png") no-repeat;
}

/* 红包状态-begin */
.kstate-coupon-get{
  .kmod-coupon{ background-image: url("@{IMAGE_URL}coupon-b.png"); }
  {{if navigators}}.kmod-nav1{ background-image: url("@{IMAGE_URL}nav-b.png"); }{{/if}}
}

.kstate-coupon-success{
  .kmod-coupon{ background-image: url("@{IMAGE_URL}coupon-c.png"); }
  {{if navigators}}.kmod-nav1{ background-image: url("@{IMAGE_URL}nav-c.png"); }{{/if}}
}
/* 红包状态-end */
{{/if}}



.kstate-warm{
  .kmod-header{ background: url('@{IMAGE_URL}@{WARM_NAME}-header.jpg') no-repeat center 0; }
  .kmod-logo{ background: url('@{IMAGE_URL}@{WARM_NAME}-logo.png') no-repeat center 0; }
  .kmod-body { background: url('@{IMAGE_URL}@{WARM_NAME}-body.jpg') repeat; }
  .kmod-footer { background: url('@{IMAGE_URL}@{WARM_NAME}-footer.png') no-repeat center 0; }
  {{each modules}}
  .kmod{{$index | kToIndex}} { background-image: url("@{IMAGE_URL}@{WARM_NAME}-{{$index | kToIndex : '00'}}{{imageSuffix}}"); }{{/each}}
}
.kstate-sale{
  .kmod-header{ background: url('@{IMAGE_URL}@{SALE_NAME}-header.jpg') no-repeat center 0; }
  .kmod-logo{ background: url('@{IMAGE_URL}@{SALE_NAME}-logo.png') no-repeat center 0; }
  .kmod-body { background: url('@{IMAGE_URL}@{SALE_NAME}-body.jpg') repeat; }
  .kmod-footer { background: url('@{IMAGE_URL}@{SALE_NAME}-footer.png') no-repeat center 0; }
  {{each modules}}
  .kmod{{$index | kToIndex}} { background-image: url("@{IMAGE_URL}@{SALE_NAME}-{{$index | kToIndex : '00'}}{{imageSuffix}}"); }{{/each}}
}





/*  半品购调整-begin */
.warmup_bg .pro_bread{display: none;}
.warmup_bg, .list-define-w{overflow: hidden;position: relative;}
.warmup_bg .kmods{margin: 0 -460px;}
.list-define-w .kmods{margin: -380px -460px 0;}
/*  半品购调整-end */


  `;

}

function getModStyle(list){

  function format(i, fmt){
    //i += 1;
    if (!fmt) return i;

    var len = ('' + fmt).length;
    i = 0..toFixed(len) + i;
    i = i.substring(i.length - len);
    return i;
  }

  return list.map(function(v, i){
    var tpl = `
.kmod${i}{ height: ${v.h}; }
.kstate-warm .kmod${i}{ background-image: url("@{IMAGE_URL}@{WARM_NAME}-${format(i, '00')}.jpg"); }
.kstate-sale .kmod${i}{ background-image: url("@{IMAGE_URL}@{SALE_NAME}-${format(i, '00')}.jpg"); }
  `;
    return tpl;
  }).join('\n');
}

var list = [
  'img1',
  'img2'
  'img3'
];
console.log(getModStyle(list));
