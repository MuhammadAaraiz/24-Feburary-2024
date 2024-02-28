import React, { useEffect } from 'react'

export const product_Details = () => {
    useEffect(async () => {
        const response = await
            get_data(`/products/${params_id.id}`)
        dispatch(set_product_details(response))
    }, [])


    return (<div>{data_by_id !== null ? data_by_id.title : "-"}</div>

        // <div>product_Details</div>
    )
}
