import React from 'react';


function DonutViewer({donuts, setDonuts}){

    function donutFunc(){
        return donuts.map((donut) =>{
            return <p onClick={(undeadDonuts)=>{}}>
                Date Baked: {donut.date_baked}, Flavor: {donut.donut_flavor}, This donut belongs to {donut.baker_id}
                <button onClick={() => handleDelete(donut.id)}>BAM</button> 
            </p>
        })
    }
        
    function handleDelete(id){
        //const filteredItems = items.filter(item => !valuesToRemove.includes(item))

        fetch(`http://localhost:9292/donuts/${id}`,{
            method: "DELETE",
        })
        .then((res)=>res.json()).then((deadDonut) => setDonuts((prevDonuts) => {
            const copyArray = [...prevDonuts];
            const index = copyArray.findIndex((donut)=>deadDonut.id === donut.id)
            copyArray.splice(index, 1)
            return(copyArray)
        }
        ))

        }
// console.log(donuts)
return(
    <>
    <div>{donutFunc()}</div>
    {/* <button onClick={handleDelete}>Delete</button> */}
    </>
)
}

export default DonutViewer