// import React from "react";
// import { useHistory } from "react-router-dom";
// import { useState } from "react";
// import {useFormik } from "formik";
// import * as yup from "yup";

// function AddReview({ oneTrail }) {
//     const [submittedReview, setSubmittedReview] = useState([])
//     const history = useHistory()
//     console.log(oneTrail)

//     const addReview = (review) => setSubmittedReview(current => [review, ...current])

//     const formSchema = yup.object().shape({
//         text: yup.string().required("Please let us know what you thought!")
//     })

//     const formik = useFormik({
//         initialValues: {
//             rating: 5/5,
//             text: "",
//             trail_id: oneTrail[0]?.id
//         },
//         validationSchema: formSchema,
//         onSubmit: (values) => {
//             console.log(values)
//             // fetch('/reviews', {
//             //     method: 'POST',
//             //     headers: {
//             //         "Content-Type": "application/json",
//             //     },
//             //     body: JSON.stringify(values),
//             // }).then((response) => {
//             //     if(response.ok) {
//             //         response.json().then(review => {
//             //             addReview(review)
//             //             history.push('/reviews')
//             //         })
//             //     }
//             // })
//         }
//     })

//     return (
//         <div>
//             <form onSubmit={formik.handleSubmit}>
//                 <label>Rating: </label>
//                 <select name="rating" value={formik.values.rating} onChange={formik.handleChange} >
//                         <option value="5/5">5/5</option>
//                         <option value="4/5">4/5</option>
//                         <option value="3/5">3/5</option>
//                         <option value="2/5">2/5</option>
//                         <option value="1/5">1/5</option>
//                     </select>
//                     <br></br>
//                 <label>Review: </label>
//                 <textarea type='text' name="text" value={formik.values.text} onChange={formik.handleChange} />
//                 <input type='submit' />
//             </form>
//         </div>
//     )
// }

// export default AddReview;