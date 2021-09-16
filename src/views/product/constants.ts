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
    name: '脸部spa',
    desc: '脸部spa，你值得拥有',
    thumb: rondomImg(),
    price: 100,
  },
  {
    id: 2,
    name: '脸部spa',
    desc: '脸部spa，你值得拥有脸部spa，你值得拥有脸部spa，你值得拥有脸部spa，你值得拥有脸部spa，你值得拥有脸部spa，你值得拥有脸部spa，你值得拥有脸部spa，你值得拥有脸部spa，你值得拥有脸部spa，你值得拥有脸部spa，你值得拥有',
    thumb: rondomImg(),
    price: 100,
  },
  {
    id: 3,
    name: '脸部spa',
    desc: '脸部spa，你值得拥有',
    thumb: rondomImg(),
    price: 100,
  },
  {
    id: 4,
    name: '脸部spa',
    desc: '脸部spa，你值得拥有',
    thumb: rondomImg(),
    price: 100,
  },
  {
    id: 5,
    name: '脸部spa',
    desc: '脸部spa，你值得拥有',
    thumb: rondomImg(),
    price: 100,
  },
  {
    id: 6,
    name: '脸部spa',
    desc: '脸部spa，你值得拥有',
    thumb: rondomImg(),
    price: 100,
  },
  {
    id: 7,
    name: '脸部spa',
    desc: '脸部spa，你值得拥有',
    thumb: rondomImg(),
    price: 100,
  },
  {
    id: 8,
    name: '脸部spa',
    desc: '脸部spa，你值得拥有',
    thumb: rondomImg(),
    price: 100,
  },
  // {
  //   id: 9,
  //   name: '脸部spa',
  //   desc: '脸部spa，你值得拥有',
  //   thumb: rondomImg(),
  //   price: 100,
  // },
];
