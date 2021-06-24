
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewHobby } from '../actions/hobby';
import HobbyList from '../components/Home/HobbyList';


const randomNumber=()=>{
    return 1000+Math.trunc(Math.random()*9000);
}

function HomePage(props) {
    // Mỗi selector nên khai báo một thẻ riêng như bên dưới
    const hobbyList =useSelector(state=>state.hobby.list);
    const dispatch =useDispatch()
    console.log('Hobby List: ', hobbyList)

    const handleClickAdd=()=>{
        //Random a hobby object: id+ title
        const newID=randomNumber()
        const newHobby ={
            id: newID,
            title:`Hobby${newID}`,
        }
        //Dispath action to add new hobby to redux store
        //Thự hiện sự thay đổi trên khung (vd: văn bản đã tạo từ trước)
        const action = addNewHobby(newHobby);

        

        // Thực hiện thay đổi
        dispatch(action);
    }

    return (
        <div>
             <h1>Day la redux hook - Home Page</h1>  
                <button onClick={handleClickAdd}>Random Click</button>
            <HobbyList hobbyList={hobbyList}/>
        </div>
    );
}

export default HomePage;