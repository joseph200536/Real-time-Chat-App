import cmt from './images/comment 1.png';
import grp from './images/group 1.png';
import settings from './images/setting 1.png';
import img from './images/cmt-white.png';
import img2 from './images/grp-white.png';
import img3 from './images/setting-white.png';
import img4 from './images/plus.png';
import img5 from './images/plus -white.png';
const menu = [
    {
        id:1,
        img: cmt,
        activeImg: img,
        name:'Chats'
    },
    {
        id:2,
        img: grp,
        activeImg: img2,
        name:'Groups'
    },
    {
        id:3,
        img: settings,
        activeImg: img3,
        name:'Settings'
    },{
        id:4,
        img : img4,
        activeImg: img5,
        name:'Add Friends'
    }
];

export {menu};