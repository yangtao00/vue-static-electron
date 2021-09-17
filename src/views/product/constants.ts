import img1 from './images/1.jpg';
import img1_1 from './images/1-1.jpg';
import img1_2 from './images/1-2.jpg';

import img2 from './images/2.jpg';
import img2_1 from './images/2-1.jpg';
import img2_2 from './images/2-2.jpg';
import img2_3 from './images/2-3.jpg';
import img2_4 from './images/2-4.jpg';

import img3 from './images/3.jpg';
import img3_1 from './images/3-1.jpg';
import img3_2 from './images/3-2.jpg';
import img3_3 from './images/3-3.jpg';
import img3_4 from './images/3-4.jpg';

const imageList = [img1, img2, img3];

export const findProductDetailById = (id: number): any => {
  const item = products.filter(item => item.id === id);
  return item[0];
};

export const products = [
  {
    id: 1,
    name: '天然高级猫粮',
    desc: '好主人幼猫粮1到4到12月全价奶糕专用英短蓝猫5斤，适合小猫，大猫，各种猫，猫吃了都说好',
    thumb: img1,
    imgList: [img1_1, img1_2],
    price: 100,
    originPrice: 120,
  },
  {
    id: 2,
    name: '高级宠物盆',
    desc: '好主人狗粮1到4到12月全价奶糕专用英短蓝猫5斤，适合小猫，大猫，各种猫，猫吃了都说',
    thumb: img2,
    imgList: [img2_1, img2_2, img2_3, img2_4],
    price: 100,
    originPrice: 120,
  },
  {
    id: 3,
    name: '天然高级狗粮',
    desc: '好主人幼猫粮1到4到12月全价奶糕专用英短蓝猫5斤，适合小猫，大猫，各种猫，猫吃了都说好',
    thumb: img3,
    imgList: [img3_1, img3_2, img3_3, img3_4],
    price: 100,
    originPrice: 120,
  },
];
