import React from 'react'


function HeaderSection() {
  return (
   <>
   <div className='bg-dark' >
   <div style={{width:'95vw' , height:'90vh'}} className="d-flex justify-content-center align-items-center">
   <div><img  className='img-fluid ' src="https://img.freepik.com/free-psd/special-sales-banner-template_23-2148975922.jpg" alt="" /></div>
   <div className="container">
    <h1 className="text-white" >Lorem ipsum dolor sit.</h1>
    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. A maxime, ducimus ex numquam, nemo sit consequatur nisi vel quaerat aliquid nulla non, in suscipit dolorum sunt quibusdam expedita. Exercitationem, id.</p>
  </div>
   </div>
   </div>
    <div>
      <img className='img-fluid' src="https://img.freepik.com/free-vector/flat-sale-banner-with-photo_23-2149026968.jpg?w=2000" alt="" />
    </div>
   </>
  )
}

export default HeaderSection