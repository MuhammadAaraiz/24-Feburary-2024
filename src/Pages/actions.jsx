// import axios from "axios"


const get_data = async (end_point) => {
    const res = await axios_instatnce.get(end_point)
    return res.data
}

export { get_data }