import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {useFormik } from "formik";
import * as yup from "yup";

// import AddReview from "./AddReview";

function TrailCard({user}) {
    const [oneTrail, setOneTrail] = useState([])
    const { id } = useParams()
    const [submittedReview, setSubmittedReview] = useState([])
    const history = useHistory()
    const addReview = (review) => setSubmittedReview(current => [review, ...current])

    useEffect(() => {
        fetch(`/trails/${id}`)
        .then(response => response.json())
        .then(data => setOneTrail(data))
    }, [id])
    console.log(oneTrail.review)
    console.log(oneTrail.id)

    const parkReviews = oneTrail.review || []
    console.log(parkReviews)

    const formSchema = yup.object().shape({
        text: yup.string().required("Please let us know what you thought!")
    })

    const formik = useFormik({
        initialValues: {
            rating: 5/5,
            text: "",
            user_id: user.id,
            trail_id: id
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            console.log(values)
            fetch('/reviews', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            }).then((response) => {
                if(response.ok) {
                    response.json().then(review => {
                        addReview(review)
                        history.push('/reviews')
                        window.location.reload()
                    })
                }
            })
         }
    })

    const trailReviews = parkReviews.map((reviewObj) => {
        console.log(reviewObj)
        return (
            <div key={reviewObj.id}>
                <h6>{reviewObj.users.name} || {reviewObj.rating}</h6>
                <p>{reviewObj.text}</p>
            </div>
        )
    })

    // useEffect(() => {
    //     fetch('/reviews')
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    // }, [])

    // console.log(oneTrail)

    return <div>
        <h3>{oneTrail.name}</h3>
        <h5>{oneTrail.length} || {oneTrail.difficulty}</h5>
        <p>{oneTrail.description}</p>
        {/* <AddReview oneTrail={oneTrail} /> */}
        <form onSubmit={formik.handleSubmit}>
                <label>Rating: </label>
                <select name="rating" value={formik.values.rating} onChange={formik.handleChange} >
                        <option value="5/5">5/5</option>
                        <option value="4/5">4/5</option>
                        <option value="3/5">3/5</option>
                        <option value="2/5">2/5</option>
                        <option value="1/5">1/5</option>
                    </select>
                    <br></br>
                <label>Review: </label>
                <textarea type='text' name="text" value={formik.values.text} onChange={formik.handleChange} />
                <input type='submit' />
            </form>
        {trailReviews}
    </div>
}

export default TrailCard;