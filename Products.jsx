
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { Link } from 'react-router-dom'




function Products() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('https://dummyjson.com/products').then(json => setProducts(json.data.products))
  }, [])

  return (
    <>
      <div className="container">
        <div className="my-5">
          <h1> Products</h1>
          <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eum perferendis ab hic aspernatur facilis cumque accusantium aperiam ullam vel distinctio voluptatum unde veritatis iste veniam molestiae repudiandae. Suscipit, rerum?</p>
        </div>

      </div>
      <div className="row px-5">
        {
          products.map((val, key) =>
            <div className="col-md-4" key={key}>

              <Link className='text-decoration-none' to={`/products/${val.id}`}>  <Card>

                <Card.Body style={{ width: '100%', height: '100%', backgroundColor: 'black', color: 'white' }}>
                  <Card.Title>{val.title}</Card.Title>
                  <Card.Img variant="top" src={val.thumbnail} />
                </Card.Body>
              </Card>
              </Link>


            </div>
          )
        }
      </div>
    </>
  )
}

export default Products