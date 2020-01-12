import Vue from 'vue';
// import { Button } from 'element-ui';
// import {DatePicker} from 'element-ui';

// import lang from 'element-ui/lib/locale/lang/en'
// import locale from 'element-ui/lib/locale'

// // 设置语言
// locale.use(lang)

// //注册到全局
// Vue.component(Button.name, Button);
// Vue.use(DatePicker);

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


import {
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton,
    Cell, CellGroup ,
    Popup,Tab, Tabs ,Overlay,Loading
  } from 'vant';
  
  Vue.use(Swipe).use(SwipeItem)
  .use(Cell).use(CellGroup)
  .use(Popup)
    .use(GoodsAction)
    .use(GoodsActionIcon)
    .use(GoodsActionButton).use(Tab).use(Tabs).use(Overlay).use(Loading);

    