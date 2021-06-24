import React from 'react'

import {useSelector } from 'react-redux';

function HobbyList(props){
    let hobbyList=[];
    
    // Lay dữ liệu cửa redux
    const hobbyListt =useSelector(state=>state.hobby.list);
    
    if(props){
        hobbyList=props.hobbyList
    }
    return(
        <ul>
            {console.log(hobbyListt)}
            {
                hobbyList.map(hobby=>(
                    <li key={hobby.id}>{hobby.title}</li>
                ))
            }
        </ul>
    )
}

export default HobbyList;