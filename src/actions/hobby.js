
// Danh sách lệnh thực thi tạo trước
// Như khung văn bản dựng sẳn
export const addNewHobby =(hobby)=>{
    return{
        type:'ADD_HOBBY',
        payload:hobby,
    }
}


export const setActiveHobby =(hobby)=>{
    return{
        type:'SET_ACTIVE_HOBBY',
        payload:hobby,
    }
}