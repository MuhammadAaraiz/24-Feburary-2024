import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Products_Card = () => {



    useEffect(() => {
        getdata()
    }, [])
    const [products, setProduct] = useState([])
    const getdata = () => {
        const data = axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setProduct(res.data)
                console.log(res.data)
            })
    }
    // console.log(products)
    getdata()
    return (<>
        <div className="card-container">
            {products.map((pro, i) => {
                const { id, title, price, image, category, description } = pro
                const { rate, count } = pro.rating;
                const navigate_handle = () => {
                    console.log('clicked')
                    console.log(pro.id)
                    navigate(`/products/${id}`)
                }
                return (
                    <div key={i} className="card ">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 400 }}
                                image={image}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Title : {title}
                                </Typography>
                                <h2>{category}</h2>
                                <h2>{price}</h2>
                                <Typography gutterBottom variant="h5" component="div">
                                    Ratings : {rate} Count : {count}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </div>
                )
            })}
        </div>
    </>
    );
}

// fetch('https://api.escuelajs.co/api/v1/products')
//         .then(response => response.json())
//         .then(json => console.log(json))




