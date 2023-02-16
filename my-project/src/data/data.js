import sneakers from '../assets/sneaker.png';

import hightlightimg from '../assets/hightlightimg.png';
import sneakershoe from '../assets/sneaker.png';

import clip from '../assets/video/clip.mp4';
import vcover1 from '../assets/video/vcover1.png';
import vcover2 from '../assets/video/vcover2.png';
import vcover3 from '../assets/video/vcover3.png';

import psale1 from '../assets/nike-air-red.png';
import psale2 from '../assets/nike-adapt-bb.png';
import psale3 from '../assets/nike-adapt-bb-smart.png';

import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';
import product5 from '../assets/product5.png';
import product6 from '../assets/product6.png';
import product7 from '../assets/product7.png';
import product8 from '../assets/product8.png';
import product9 from '../assets/product9.png';
import product10 from '../assets/product10.png';
import product11 from '../assets/product11.png';
import product12 from '../assets/product12.png';

import adapt1 from '../assets/nike-adapt-bb-2.0/nike-adapt-bb-2.0-1.webp';
import adapt2 from '../assets/nike-adapt-bb-2.0/nike-adapt-bb-2.0-2.jpg';
import adapt3 from '../assets/nike-adapt-bb-2.0/nike-adapt-bb-2.0-3.jpg';
import adapt4 from '../assets/nike-adapt-bb-2.0/nike-adapt-bb-2.0-4.webp';
import adapt5 from '../assets/nike-adapt-bb-2.0/nike-adapt-bb-2.0-5.jpg';

import martinRose1 from '../assets/martin-rose/martin-rose-1.webp';
import martinRose2 from '../assets/martin-rose/martin-rose-2.webp';
import martinRose3 from '../assets/martin-rose/martin-rose-3.webp';
import martinRose4 from '../assets/martin-rose/martin-rose-4.webp';
import martinRose5 from '../assets/martin-rose/martin-rose-5.webp';

import smartShoe1 from '../assets/smart-shoe-2.0/smart-shoe-1.webp';
import smartShoe2 from '../assets/smart-shoe-2.0/smart-shoe-4.jpg';
import smartShoe3 from '../assets/smart-shoe-2.0/smart-shoe-5.jpg';
import smartShoe4 from '../assets/smart-shoe-2.0/smart-shoe-6.jpg';
import smartShoe5 from '../assets/smart-shoe-2.0/smart-shoe-7.jpg';

import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
import youtube from '../assets/youtube.svg';
import messenger from '../assets/messenger.svg';
import { FaMaxcdn } from 'react-icons/fa';

const heroapi = {
  title: 'Play With Electric Nike',
  subtitle: 'Adapt 2.0 Sneakers',
  img: sneakers,
  btntext: 'Explore Product',
  videos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip },
  ],
  sociallinks: [
    { icon: facebook, url: 'https://www.facebook.com/nike/' },
    { icon: messenger, url: 'https://www.facebook.com/nike/' },
    { icon: instagram, url: 'https://www.instagram.com/nike/' },
    { icon: twitter, url: 'https://twitter.com/Nike' },
    { icon: youtube, url: 'https://www.youtube.com/user/nike' },
  ],
};

const popularsales = {
  title: 'Popular Sales',
  items: [
    {
      id: '0p0x1',
      title: 'Nike Addapt BB 2.0',
      text: 'MEN Running Shoes',
      rating: '4.9',
      stars: 4.9,
      btn: 'Buy Now',
      image: psale2,
      price: '200',
      reviews: 19,
      shipping: true,
      stock: 10,
      images: [
        {
          url: adapt1,
          filename: 'adapt-bb-2.0-1.jpg',
        },
        {
          url: adapt2,
          filename: 'adapt-bb-2.0-2.jpg',
        },
        {
          url: adapt3,
          filename: 'adapt-bb-2.0-3.jpg',
        },
        {
          url: adapt4,
          filename: 'adapt-bb-2.0-4.jpg',
        },
        {
          url: adapt5,
          filename: 'adapt-bb-2.0-5.jpg',
        },
      ],
      description:
        'Riding the momentum of last year hit auto-lacing basketball shoe, the Nike Adapt BB 2.0 delivers the same consistent, customized fit, now with more of the game-changing technology revealed. Ultra-responsive cushioning is curved to follow the natural motion of your foot, providing continuous energy return on the court.',
      colors: ['#0220A6'],
      color: 'from-blue-600 to-blue-500',
      shadow: 'shadow-lg shadow-blue-500',
    },
    {
      id: '0p0x2',
      title: 'Nike Martine Rose',
      text: 'MEN Running Shoes',
      rating: '4.5',
      stars: 4.5,
      btn: 'Buy Now',
      image: psale1,
      price: '200',
      reviews: 10,
      shipping: true,
      stock: 7,
      images: [
        {
          url: martinRose1,
          filename: 'martin-rose-1.webp',
        },
        {
          url: martinRose2,
          filename: 'martin-rose-2.webp',
        },
        {
          url: martinRose3,
          filename: 'martin-rose-3.webp',
        },
        {
          url: martinRose4,
          filename: 'martin-rose-4.webp',
        },
        {
          url: martinRose5,
          filename: 'martin-rose-5.webp',
        },
      ],
      description:
        'Crossing fashion with sport, London-based designer Martine Rose merges classic formalwear with the renowned look of Nike Shox. Born out of a desire to outfit football in a relevant, elevated and contemporary fashion, it steps beyond boundaries by fusing opposites—the quintessential dress shoe with the fast-paced look of the football boot. Lending her magic to the iconic Shox just as the UEFA Womens EURO tournament unfolds, Martine Rose introduces the Nike Shox MR4, lifting the columns into a heel, elongating the foot and chiselling the toe for an extra-bold aesthetic that taps into her visionary design language and inclusive, optimistic ethos.',
      colors: ['#F43F5C'],
      color: 'from-red-500 to-rose-500',
      shadow: 'shadow-lg shadow-rose-500',
    },
    {
      id: '0p0x3',
      title: 'Nike Smart Shoe 2.0',
      text: 'Women Running Shoes',
      rating: '5+',
      stars: 5,
      btn: 'Buy Now',
      image: psale3,
      price: '200',
      reviews: 50,
      shipping: true,
      stock: 5,
      images: [
        {
          url: smartShoe1,
          filename: 'smart-shoe-2.0-1.jpg',
        },
        {
          url: smartShoe2,
          filename: 'smart-shoe-2.0-2.jpg',
        },
        {
          url: smartShoe3,
          filename: 'smart-shoe-2.0-3.jpg',
        },
        {
          url: smartShoe4,
          filename: 'smart-shoe-2.0-4.jpg',
        },
        {
          url: smartShoe5,
          filename: 'smart-shoe-2.0-5.jpg',
        },
      ],
      description:
        'Riding the momentum of last year hit auto-lacing basketball shoe, the Nike Adapt BB 2.0 delivers the same consistent, customized fit, now with more of the game-changing technology revealed. Ultra-responsive cushioning is curved to follow the natural motion of your foot, providing continuous energy return on the court.',
      colors: ['#403061'],
      color: 'from-violet-500 to-indigo-500',
      shadow: 'shadow-lg shadow-violet-500',
    },
  ],
};

const highlight = {
  heading: 'HIGHLIGHTS',
  title: 'NIKE AIR WITH LIMITLESS CHOICES',
  text: 'Our Purpose is to move the world forward. We take action by building community, protecting our planet and increasing access to sport.',
  btn: 'Explore More',
  url: 'https://www.nike.com/launch/t/nocta-hot-step-black-gold',
  img: hightlightimg,
};

const sneaker = {
  heading: 'FEATURED',
  title: 'NIKE SNEAKERS AIR LANCING SHOES',
  text: 'The radiance lives on Nike Sneakers Air Lancing Shoes, the basket ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.',
  btn: 'Explore More',
  url: 'https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/',
  img: sneakershoe,
};

const toprateslaes = {
  title: 'Top Rated Sales',
  items: [
    {
      id: '0M0x1',
      title: 'Nike Air Low Premium',
      text: 'MEN Running Shoes',
      rating: '5+',
      btn: 'Buy Now',
      image: product7,
      price: '150',
      color: 'from-sky-600 to-indigo-600',
      colors: ['#2C5CB5'],
      shadow: 'shadow-lg shadow-blue-500',
      stock: 5,
    },
    {
      id: '0M0x2',
      title: 'Nike Air Force Green',
      text: 'MEN Running Shoes',
      rating: '5+',
      btn: 'Buy Now',
      image: product2,
      price: '150',
      color: 'from-green-500 to-emerald-500',
      colors: ['#01C55B'],
      shadow: 'shadow-lg shadow-green-500',
      stock: 5,
    },
    {
      id: '0M0x3',
      title: 'Nike Addapt BB Rose',
      text: 'MEN Running Shoes',
      rating: '5+',
      btn: 'Buy Now',
      image: product3,
      price: '150',
      color: 'from-red-500 to-rose-500',
      colors: ['#C90828'],
      shadow: 'shadow-lg shadow-rose-500',
      stock: 5,
    },
    {
      id: '0M0x4',
      title: 'Nike Air Premium',
      text: 'MEN Running Shoes',
      rating: '5+',
      btn: 'Buy Now',
      image: product4,
      price: '150',
      color: 'from-orange-500 to-amber-500',
      colors: ['#F78711'],
      shadow: 'shadow-lg shadow-orange-500',
      stock: 5,
    },
    {
      id: '0M0x5',
      title: 'Nike Adapt BB Pro',
      text: 'MEN Running Shoes',
      rating: '5+',
      btn: 'Buy Now',
      image: product5,
      price: '150',
      color: 'from-gray-900 to-yellow-500',
      colors: ['#6D653A'],
      shadow: 'shadow-lg shadow-yellow-500',
      stock: 5,
    },
    {
      id: '0M0x6',
      title: 'Air Jordan PR3',
      text: 'MEN Running Shoes',
      rating: '5+',
      btn: 'Buy Now',
      image: product6,
      price: '150',
      color: 'from-blue-500 to-cyan-500',
      colors: ['#46B6DC'],
      shadow: 'shadow-lg shadow-cyan-500',
      stock: 5,
    },
    {
      id: '0M0x7',
      title: 'Nike Multi Smart Shoe',
      text: 'MEN Running Shoes',
      rating: '5+',
      btn: 'Buy Now',
      image: product1,
      price: '150',
      color: 'from-yellow-500 to-yellow-500',
      colors: ['#EAB308'],
      shadow: 'shadow-lg shadow-yellow-500',
      stock: 5,
    },
    {
      id: '0M0x8',
      title: 'Nike Jordan Air Max',
      text: 'MEN Running Shoes',
      rating: '5+',
      btn: 'Buy Now',
      image: product9,
      price: '150',
      color: 'from-[#936550] to-orange-900',
      colors: ['#DFCEBD'],
      shadow: 'shadow-lg shadow-orange-800',
      stock: 5,
    },
    {
      id: '0M0x9',
      title: 'Nike Old Max-x',
      text: 'MEN Running Shoes',
      rating: '5+',
      btn: 'Buy Now',
      image: product10,
      price: '150',
      color: 'from-indigo-700 to-indigo-700',
      colors: ['#432199'],
      shadow: 'shadow-lg shadow-indigo-500',
      stock: 5,
    },
    {
      id: '0M0x10',
      title: 'Nike Lime Jordan 11',
      text: 'MEN Running Shoes',
      rating: '5+',
      btn: 'Buy Now',
      image: product12,
      price: '150',
      color: 'from-green-600 to-lime-500',
      colors: ['#7CC91A'],
      shadow: 'shadow-lg shadow-lime-500',
      stock: 5,
    },
    {
      id: '0M0x11',
      title: 'Nike Air Black Max',
      text: 'MEN Running Shoes',
      rating: '5+',
      btn: 'Buy Now',
      image: product11,
      price: '150',
      color: 'from-slate-900 to-black',
      colors: ['#E4E4E9'],
      shadow: 'shadow-lg shadow-black',
      stock: 5,
      images: [
        {
          url: product11,
          filename: 'product11.jpg',
        },
      ],
    },
    {
      id: '0M0x12',
      title: 'Nike Zoom Max',
      text: 'MEN Running Shoes',
      rating: '5+',
      btn: 'Buy Now',
      image: product8,
      price: '150',
      color: 'from-blue-900 to-blue-500',
      colors: ['#2B3E87'],
      shadow: 'shadow-lg shadow-blue-500',
      stock: 5,
    },
  ],
};

const story = {
  title: 'Top Stories',
  news: [
    {
      title: 'Jayson Tatum Debuts',
      text: 'Jordan Brands signature model for the past few years, Jayson Tatum will be dawning the Air Jordan 37 this season before attaining potentially his first signature sneaker with Jumpman, which he rumored to be in the works recently via his Twitter.',
      img: 'https://sneakernews.com/wp-content/uploads/2022/09/air-jordan-37-low.jpg?w=540&h=380&crop=1',
      url: 'https://sneakernews.com/2022/09/14/air-jordan-37-low/',
      like: '3/5',
      time: '11 Mins',
      by: 'Jared Ebanks',
      btn: 'Read More',
    },
    {
      title: 'Bro’s Nike Zoom Freak 4',
      text: 'Arriving right time for the Fall, this upcoming take on the Zoom Freak 4 seemingly draws inspiration from Thanksgiving. Orange and brown, two staples of the holiday, are used throughout the upper, dressing the parts not bathed in shades of grey.',
      img: 'https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003-2.jpg?w=540&h=380&crop=1',
      time: '41 Mins',
      like: '5/5',
      url: 'https://sneakernews.com/2022/09/14/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003/',
      by: 'Michael Le',
      btn: 'Read More',
    },
    {
      title: 'Nike Air Max Plus',
      text: 'The Nike Air Max Plus has enjoyed the reveal of several colorways these last few of months. And as we officially embark on the Fall season, an additional set have been added to the calendar, including this newly-revealed grey and orange colorway.',
      img: 'https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Max-Plus-FB3358-001-2.jpg?w=540&h=380&crop=1',
      time: '2 Hours',
      url: 'https://sneakernews.com/2022/09/14/nike-air-max-plus-grey-orange-black-fb3358-001/',
      like: '5/5',
      by: 'Michael Le',
      btn: 'Read More',
    },
    {
      title: 'Air Jordan Retro High OG',
      text: 'Air Jordan Retro High OG popular series of AJ1s with the popular color-blocking with the original Yellow Toe flavor. The colorway was revealed back PE by musician Zach Myers, nearly four years later, Jordan fanatics will finally get their shot a GR release.',
      img: 'https://sneakernews.com/wp-content/uploads/2022/03/yellow-toe-jordan-1-release-date-2.jpg',
      time: '7 Months',
      url: 'https://sneakernews.com/2022/03/09/air-jordan-1-retro-high-og-yellow-toe-555088-711/',
      like: '5/5',
      by: 'Sneaker News',
      btn: 'Read More',
    },
    {
      title: 'Nike Air Zoom GT Cut 2',
      text: 'The Bred coloryway of Zoom GT Cut 2 will be first to release this Friday, For Nike Members Nation World Wide while Sabrina Ionescus colorway is set for an October 13th release date. In the meantime, enjoy official images of both colorways below.',
      img: 'https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-gt-cut-2-release-date.jpg?w=540&h=380&crop=1',
      time: '1 Months',
      url: 'https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/',
      like: '3/5',
      by: 'Jared Ebanks',
      btn: 'Read More',
    },
    {
      title: 'Puma Announces Breanna',
      text: 'For the first time in over a decade, a signature basketball silhouette is being made for one of the WNBA’s best and brightest stars, Olympic Gold Medalist and Seattle Storm superstar Breanna Stewart. Puma Stewie 1 Quiet Fire will be available this Friday.',
      img: 'https://sneakernews.com/wp-content/uploads/2022/09/puma-stewie-1-quiet-fire-breanna-stewart-release-date-lead.jpg?w=540&h=380&crop=1',
      time: '25 Days',
      url: 'https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/',
      like: '3/5',
      by: 'Jared Ebanks',
      btn: 'Read More',
    },
    {
      title: 'Nike Air Force Orange Color',
      text: 'From lace toggles to city-inspired makeovers, the Nike Air Force 1 has delivered a number of unique modifications. Here though, the brand is taking things down quite a few notches, opting for a simple colorway helmed primarily by black and Laser Orange.',
      img: 'https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Force-1-Black-Yellow-FB7162-081-8.jpg?w=540&h=380&crop=1',
      url: 'https://sneakernews.com/2022/09/09/nike-air-force-1-black-laser-orange-fb7162-081/',
      time: '6 Days',
      like: '4/5',
      by: 'Micael Le',
      btn: 'Read More',
    },
    {
      title: 'Hello Kitty and Adidas',
      text: 'The world of Sanrio is vast and replete with many an iconic character. Few among the family, though, rival the immense influence of Hello Kitty, who’s played mascot for everything from Pringles merchandise to sneaker collaborations.',
      img: 'https://sneakernews.com/wp-content/uploads/2022/09/hello-kitty-adidas-superstar-GW7168-2.jpg?w=540&h=380&crop=1',
      url: 'https://sneakernews.com/2022/09/08/hello-kitty-adidas-originals-gw7166-gw7167-gw7168/',
      time: '5 Days',
      like: '4/5',
      by: 'Micael Le',
      btn: 'Read More',
    },
    {
      title: 'Air Force 1 Low Expands',
      text: 'The nighttime aesthetic seen here is applied to the tumbled black leather panels of the upper and perforated mesh construction of the tongue while Royal trim and forefoot Swooshes provide additional intrigue to the darkened palette.',
      img: 'https://sneakernews.com/wp-content/uploads/2022/09/nike-air-force-1-low-worldwide-black-royal-fb1840-001-lead.jpg?w=540&h=380&crop=1',
      url: 'https://sneakernews.com/2022/09/08/nike-air-force-1-low-worldwide-black-royal-fb1840-001/',
      time: '5 Days',
      like: '4/5',
      by: 'Micael Le',
      btn: 'Read More',
    },
  ],
};

const footerAPI = {
  titles: [
    { title: 'About Nike' },
    { title: 'Get Help' },
    { title: 'Company' },
  ],
  links: [
    [
      { link: 'News' },
      { link: 'Careers' },
      { link: 'Investors' },
      { link: 'Prupose' },
      { link: 'Sustainability' },
    ],
    [
      { link: 'Order Status' },
      { link: 'Shipping & Delivery' },
      { link: 'Payment Options' },
      { link: 'Gift Card Balance' },
      { link: 'Contact Us' },
      { link: 'FAQ' },
      { link: 'Blog' },
    ],
    [
      { link: 'Gift Cards' },
      { link: 'Promotions' },
      { link: 'Find A Store' },
      { link: 'Signup' },
      { link: 'Nike Jouneral' },
      { link: 'Send Us Feeback' },
    ],
  ],
};

 const gridHelp = [
   {
     Id: 1,
     Name: 'GET HELP',
     Link: '/help',
   },
   {
     Id: 2,
     Name: 'Order Status',
     Link: '/orders',
   },
   {
     Id: 3,
     Name: 'Delivery',
     Link: '/help',
   },
   {
     Id: 4,
     Name: 'Returns',
     Link: '/help',
   },
   {
     Id: 5,
     Name: 'Payment Options',
     Link: '/help',
   },
   {
     Id: 6,
     Name: 'Contact Us',
     Link: '/contact',
   },
 ];
 const gridTitle = [
   {
     Id: 1,
     Name: 'FIND A STORE',
     Link: '/retail',
   },
   {
     Id: 2,
     Name: 'BECOME A MEMBER',
     Link: '/email-signup',
   },
   {
     Id: 3,
     Name: 'SIGN UP FOR EMAIL',
     Link: '/register',
   },
   {
     Id: 4,
     Name: 'STUDENT DISCOUNTS',
     Link: '/site-feedback',
   },
   {
     Id: 5,
     Name: 'SEND US FEEDBACK',
     Link: '/feedback',
   },
 ];
 const gridAbout = [
   {
     Id: 1,
     Name: 'ABOUT NIKE',
     Link: '/about',
   },
   {
     Id: 2,
     Name: 'News',
     Link: '/news',
   },
   {
     Id: 3,
     Name: 'Careers',
     Link: '/jobs',
   },
   {
     Id: 4,
     Name: 'Investors',
     Link: '/investors',
   },
   {
     Id: 5,
     Name: 'Sustainability',
     Link: '/sustainability',
   },
 ];
 const gridApp = [
   {
     Id: 1,
     Name: 'NIKE Apps',
     Link: '/nike-app',
   },
   {
     Id: 2,
     Name: 'Nike Run Club',
     Link: '/nrc-app',
   },
   {
     Id: 3,
     Name: 'Nike Training Club',
     Link: '/ntc-app',
   },
 ];
 const gridIcons = [
   {
     Id: 1,
     Icon: `<svg class="social-link-icon" width="30px" fill="currentColor" height="30px" viewBox="0 0 24 24"><path d="M12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm6 9.28v.4c0 1.387-.333 2.72-1 4a8.186 8.186 0 0 1-2.84 3.12c-1.333.853-2.827 1.28-4.48 1.28a8.535 8.535 0 0 1-4.56-1.28h.72c1.387 0 2.613-.427 3.68-1.28-.64 0-1.213-.2-1.72-.6-.507-.4-.867-.92-1.08-1.56l.56.16c.373 0 .64-.053.8-.16a2.67 2.67 0 0 1-1.72-1 2.913 2.913 0 0 1-.68-1.88c.427.267.88.4 1.36.4-.907-.533-1.36-1.36-1.36-2.48 0-.533.133-1.04.4-1.52.8.96 1.72 1.707 2.76 2.24a8.133 8.133 0 0 0 3.4.88c-.107-.16-.16-.4-.16-.72 0-.8.293-1.493.88-2.08s1.28-.88 2.08-.88 1.547.293 2.24.88c.48-.107 1.12-.347 1.92-.72-.213.747-.64 1.28-1.28 1.6H18c.747-.16 1.28-.32 1.6-.48-.533.693-1.067 1.253-1.6 1.68z"></path></svg>`,
     Link: 'https://www.twitter.com/Nike',
   },
   {
     Id: 2,
     Icon: `<svg class="social-link-icon" width="30px" fill="currentColor" height="30px" viewBox="0 0 24 24"><path d="M12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm3.12 12h-2v7.2H10.4V12H8.64V9.52h1.76V8c0-1.12.187-1.92.56-2.4.427-.587 1.2-.88 2.32-.88h2V7.2h-1.2c-.427 0-.693.067-.8.2-.107.133-.16.387-.16.76v1.2h2.16L15.12 12z"></path></svg>`,
     Link: 'https://www.facebook.com/Nike',
   },
   {
     Id: 3,
     Icon: `<svg class="social-link-icon" width="30px" fill="currentColor" height="30px" viewBox="0 0 24 24"><path d="M11.28 17.6a.604.604 0 0 1-.2.24.43.43 0 0 1-.24.08c-.08 0-.133-.027-.16-.08a.557.557 0 0 1-.04-.24v-2.96h-.72v3.28a1 1 0 0 0 .12.52c.08.133.2.2.36.2.16 0 .307-.053.44-.16.133-.107.28-.24.44-.4v.48H12v-3.92h-.72v2.96zM6.96 14v-.8H9.6v.8h-.88v4.56h-.88V14h-.88zm4.96-4.72c-.107 0-.2-.04-.28-.12a.384.384 0 0 1-.12-.28v-2.4c0-.053.027-.107.08-.16.053-.053.147-.08.28-.08.133 0 .24.027.32.08a.27.27 0 0 1 .12.24v2.32c0 .107-.04.2-.12.28a.384.384 0 0 1-.28.12zm2 8.32c0-.64.027-1.307.08-2 0-.107-.04-.2-.12-.28-.08-.08-.16-.12-.24-.12h-.12l-.24.16v2.4l.24.16.16.08c.107 0 .173-.027.2-.08.027-.053.04-.16.04-.32zm.08-3.04c.213 0 .387.08.52.24.133.16.2.4.2.72v2.24c0 .267-.053.48-.16.64a.422.422 0 0 1-.44.2 2.1 2.1 0 0 1-.48-.12.506.506 0 0 1-.28-.24v.32h-.8V13.2h.8v1.76c.107-.107.213-.2.32-.28a.532.532 0 0 1 .32-.12zm3.92 5.12c.267-.213.427-.907.48-2.08.053-.587.107-1.147.16-1.68 0-.48-.053-1.013-.16-1.6-.107-1.173-.28-1.893-.52-2.16-.24-.267-1.267-.453-3.08-.56l-2.64-.08-2.72.08c-1.813.107-2.84.293-3.08.56-.24.267-.413.987-.52 2.16a16.07 16.07 0 0 0-.08 1.6c0 .533.027 1.093.08 1.68.107 1.173.28 1.88.52 2.12.24.24 1.267.44 3.08.6l2.72.08 2.64-.08c1.813-.16 2.853-.347 3.12-.56v-.08zM8.4 4h-.96l1.12 3.6v2.24h.96v-2.4L10.64 4h-.96l-.56 2.32h-.08L8.4 4zm2.32 2.56V8.8c0 .373.107.667.32.88.213.213.507.32.88.32s.667-.107.88-.32c.213-.213.32-.507.32-.88V6.56c0-.32-.107-.587-.32-.8-.213-.213-.507-.32-.88-.32s-.667.107-.88.32c-.213.213-.32.48-.32.8zm3.12-.96v3.6a1 1 0 0 0 .12.52c.08.133.213.2.4.2.187 0 .36-.04.52-.12.16-.08.32-.2.48-.36v.48h.88V5.6h-.88v3.2a.523.523 0 0 1-.24.24.645.645 0 0 1-.28.08c-.08 0-.133-.013-.16-.04-.027-.027-.04-.093-.04-.2V5.52h-.8v.08zM12 0c2.187 0 4.2.533 6.04 1.6a11.793 11.793 0 0 1 4.36 4.36C23.467 7.8 24 9.813 24 12s-.533 4.2-1.6 6.04a11.793 11.793 0 0 1-4.36 4.36C16.2 23.467 14.187 24 12 24s-4.2-.533-6.04-1.6a11.793 11.793 0 0 1-4.36-4.36C.533 16.2 0 14.187 0 12s.533-4.2 1.6-6.04A11.793 11.793 0 0 1 5.96 1.6C7.8.533 9.813 0 12 0zm4.56 16.08l-.08-.4c0-.16-.027-.28-.08-.36a.27.27 0 0 0-.24-.12.27.27 0 0 0-.24.12c-.053.08-.08.2-.08.36v.4h.72zm-.32-1.52c.32 0 .573.093.76.28.187.187.28.467.28.84v.96h-1.44v.8c0 .16.027.28.08.36.053.08.147.12.28.12.133 0 .227-.04.28-.12.053-.08.08-.227.08-.44v-.16h.72v.24c0 .373-.093.667-.28.88-.187.213-.453.32-.8.32-.347 0-.613-.107-.8-.32-.187-.213-.28-.507-.28-.88v-1.76c0-.32.107-.587.32-.8.213-.213.48-.32.8-.32z"></path></svg>`,
     Link: 'https://www.youtube.com/user/nike',
   },
   {
     Id: 4,
     Icon: `<svg class="social-link-icon" width="30px" fill="currentColor" height="30px" viewBox="0 0 24 24"><path d="M16 12.48a4.723 4.723 0 0 1-.56 1.48 3.93 3.93 0 0 1-1.04 1.16 3.428 3.428 0 0 1-1.92.68 3.628 3.628 0 0 1-1.96-.48 3.414 3.414 0 0 1-1.4-1.48c-.48-.96-.587-1.973-.32-3.04H7.68l.08 5.52c0 .107.04.213.12.32.08.107.173.16.28.16h8.32c.107 0 .213-.053.32-.16.107-.107.16-.213.16-.32V10.8h-1.12c.16.533.213 1.093.16 1.68zm-3.68 2c.64 0 1.2-.24 1.68-.72s.72-1.053.72-1.72a2.56 2.56 0 0 0-.68-1.76c-.453-.507-1.013-.76-1.68-.76s-1.24.24-1.72.72-.72 1.053-.72 1.72.227 1.253.68 1.76c.453.507 1 .76 1.64.76h.08zm4.16-7.6h-1.12c-.107 0-.213.053-.32.16-.107.107-.16.213-.16.32v1.36c.107.213.267.32.48.32h1.12c.16 0 .28-.053.36-.16a.532.532 0 0 0 .12-.32v-1.2c0-.107-.053-.213-.16-.32-.107-.107-.213-.16-.32-.16zM12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm6.24 16.88l-.08.08v.08a.926.926 0 0 1-.28.68 1.3 1.3 0 0 1-.68.36H7.52a.871.871 0 0 1-.68-.32 1.536 1.536 0 0 1-.36-.72l-.08-.16.08-9.84c0-.267.093-.507.28-.72.187-.213.413-.347.68-.4h9.68a1.3 1.3 0 0 1 .68.36 1.3 1.3 0 0 1 .36.68l.08 9.92z"></path></svg>`,
     Link: 'https://www.instagram.com/nike',
   },
 ];

export {
  heroapi,
  footerAPI,
  story,
  sneaker,
  highlight,
  toprateslaes,
  popularsales,
  gridHelp,
  gridTitle,
  gridIcons,
  gridAbout,
  gridApp,
};
