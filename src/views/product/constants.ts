import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';

const imageList = [img1, img2, img3, img4, img5];

const rondomImg = () => {
  const random = Math.floor(Math.random() * 5);
  return imageList[random];
};

export const findProductDetailById = (id: number): any => {
  const item = products.filter(item => item.id === id);
  return item[0];
};

export const products = [
  {
    id: 1,
    name: '宠物美容',
    desc: '宠物美容是指借着顶级的美容用品和精湛的修剪技法和染色激发增添美感，为宠物遮掩体型缺失、增添美感，从而达到让狗狗和主人身心愉悦的效果。美容师需要辛苦的拜师学艺、考证照、更要不断吸收新知以拥有一流的专业技艺和独到的造形设计。还包括宠物犬养殖、赛级犬繁殖、藏獒繁殖、宠物医疗、宠物美容的宠物管理养殖中心。',
    thumb: rondomImg(),
    price: 100,
    discountPrice: 80,
  },
  {
    id: 2,
    name: '脸部spa',
    desc: '脸部spa，你值得拥有脸部spa，你值得拥有脸部spa，你值得拥有脸部spa，你值得拥有脸部spa，你值得拥有脸部spa，你值得拥有脸部spa，你值得拥有脸部spa，你值得拥有脸部spa，你值得拥有脸部spa，你值得拥有脸部spa，你值得拥有',
    thumb: rondomImg(),
    price: 100,
    discountPrice: 80,
  },
  {
    id: 3,
    name: '脸部spa',
    desc: '脸部spa，你值得拥有',
    thumb: rondomImg(),
    price: 100,
    discountPrice: 80,
  },
  {
    id: 4,
    name: '脸部spa',
    desc: '脸部spa，你值得拥有',
    thumb: rondomImg(),
    price: 100,
    discountPrice: 80,
  },
  {
    id: 5,
    name: '脸部spa',
    desc: '脸部spa，你值得拥有',
    thumb: rondomImg(),
    price: 100,
    discountPrice: 80,
  },
  {
    id: 6,
    name: '脸部spa',
    desc: '脸部spa，你值得拥有',
    thumb: rondomImg(),
    price: 100,
    discountPrice: 80,
  },
  {
    id: 7,
    name: '脸部spa',
    desc: '脸部spa，你值得拥有',
    thumb: rondomImg(),
    price: 100,
    discountPrice: 80,
  },
  {
    id: 8,
    name: '脸部spa',
    desc: '脸部spa，你值得拥有',
    thumb: rondomImg(),
    price: 100,
    discountPrice: 80,
  },
];
