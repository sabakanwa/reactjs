/* import React, { useEffect, useState } from 'react'


 function ImageSection({ images }) {
const {img, setImg}= useState(images ? images[0] : null)

 useEffect(() =>{
    setImg(images[0])
},[])
 
 const changeImage=(index)=>{
    setImg(images[index])
}
return (


<><div>
<div className="container w-75">
<img src={img} alt="" className="img-fluid mb-5" />
</div>

</div>
 


 <div className='d-flex align-items-center gap-3 bg-dark p-5 rounded mb-5'>
    {

        images?.map((val,key)=>
        <div className='border border-success' onClick={()=> changeImage(key)}  key={key}> <img style={{height:'15vh'}} className=' rounded-circle img-fluid' src={val} alt={`img-${key}`} />
        </div>
        )
    }
</div>
</>
)
} 


export default ImageSection
 */
 
import React, { useState } from "react";

function ImageSection({ images }) {
  const [img, setImg] = useState(images[0] ? images[0] : null);

  const changeImage = (index) => {
    setImg(images[index]);
  };

  return (
    <>
      <div className="container w-75">
        <img src={img} alt="" className="img-fluid mb-5" />
      </div>

      <div className="d-flex align-items-center gap-3 bg-light border border-danger p-5 rounded mb-5 w-100">
        {images?.map((val, key) => (
          <div
            className={
              img == images[key]
                ? "border border-danger rounded-circle p-2"
                : null
            }
            onClick={() => changeImage(key)}
            key={key}
          >
            <img
              className=" rounded-circle img-fluid "
              src={val}
              alt={`img-${key}`}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ImageSection;
