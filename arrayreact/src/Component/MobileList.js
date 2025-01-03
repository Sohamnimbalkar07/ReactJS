const MobileList = (props)=>{

    return (
        props.array.map((x,index)=> <li key={index} >{x} ----- {index}</li>)
    )

}

export default MobileList;