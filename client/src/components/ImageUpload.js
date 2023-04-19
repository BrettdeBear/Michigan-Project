// // import {fill} from "@cloudinary/url-gen/actions/resize";
// // import {CloudinaryImage} from '@cloudinary/url-gen';

// import { useState, useEffect } from "react";
// import { useParams, useHistory } from "react-router-dom";
// import {useFormik } from "formik";
// import * as yup from "yup";
// import axios from "axios";

// function ImageUpload() {
//     const [fileData, setFileData] = useState()
//     const [images, setImages] = useState('')
//     const [img, setImg] = useState({})
//     const [cloudinaryImage, setCloudinaryImage] = useState("")
//     const addImage = (img) => setCloudinaryImage(current => [img, ...current])

//     // const renderImg = 

   

//     const formik = useFormik({
//         initialValues: {
//             image: ""
//         },
//         onSubmit: async () => {
//             console.log(formik.values)
//             const { image } = formik.values
//             const formData = new FormData()

//             formData.append("file", image)
//             formData.append("upload_preset", "f0fnjc0n")
            
//             const res = await axios.post("https://api.cloudinary.com/v1_1/dvzyuzmzs/image/upload", formData)
//             // .then(res => (setCloudinaryImage(res.data.secure_url)))
//             console.log(res)
//             console.log(res.data.secure_url)
            
//         }
//     })
//     // console.log(formik)

//     return (

//         <div>
//             <form onSubmit={formik.handleSubmit}>
//                 <input type="file" name="image" value={images} onChange={(e) => formik.setFieldValue("image", e.target.files[0])} />
//                 <input type="submit"/>
//                 {/* <img cloudName="dvzyuzmzs" src={`https://res.cloudinary.com/dvzyuzmzs/image/upload/${public_id}`} /> */}
//             </form>
//                 <img style={{ width: 200 }} src={cloudinaryImage}/>
            
//         </div>
//     )
// }

// export default ImageUpload;