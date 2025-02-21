import {menu} from '../asset/menu.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../Styles/menu.css'
export function MenuComp() {
    const [activeButton,setActiveButton] = useState(null);
    const navigate = useNavigate();
    function handlefunction(id){
        setActiveButton(id);
        console.log(id);
        if(id===1) navigate('/friends');
        if(id===2) navigate('/groups');
        if(id===3) navigate('/settings');
        if(id===4) navigate('/addfriends');
    }
    return (
        <>
        {menu.map(item =>(

        <button onClick={()=>handlefunction(item.id)} className={`chat ${activeButton === item.id ? 'active':''}`} key={item.id} >
            <img className={`chat-img ${activeButton === item.id ? 'active':''}`} 
            src={activeButton===item.id?item.activeImg:item.img} alt="" />
            <p className={`chat-p ${activeButton === item.id ? 'active':''}`}>{item.name}</p>
        </button>
        ))}
        </>
    )
}