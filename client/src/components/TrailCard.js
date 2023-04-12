import { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import EditReview from "./EditReview";

// import AddReview from "./AddReview";

function TrailCard({user}) {
    const [oneTrail, setOneTrail] = useState([])
    const { id } = useParams()
    const [submittedReview, setSubmittedReview] = useState([])
    const [images, setImages] = useState('')
    const [reviews, setReviews] = useState([])
    const [editMode, setEditMode] = useState(false)
    const history = useHistory()
    const addReview = (review) => setSubmittedReview(current => [review, ...current])
 

    useEffect(() => {
        fetch(`/trails/${id}`)
        .then(response => response.json())
        .then(data => {
            setOneTrail(data)
            setReviews(data.review)
            console.log(data.review)
        })
    }, [id])
    console.log(reviews)

    // const parkReviews = oneTrail.review || []

    // console.log(parkReviews)

    const formSchema = yup.object().shape({
        text: yup.string().required("Please let us know what you thought!")
    })

    const formik = useFormik({
        initialValues: {
            rating: 5/5,
            text: "",
            image: "",
            user_id: user.id,
            trail_id: id
        },
        validationSchema: formSchema,
        onSubmit: () => {
            const { image } = formik.values
            const formData = new FormData()
            
            formData.append("file", image)
            formData.append("upload_preset", "f0fnjc0n")
          
            
            axios.post("https://api.cloudinary.com/v1_1/dvzyuzmzs/image/upload", formData)
            .then((res) => {
                console.log(res)
                fetch('/reviews', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({...formik.values, image: res.data.secure_url}),
                }).then(res => {
                    if(res.ok) {
                        res.json().then(review => {
                            addReview(review)
                        })
                    }
                })
            })         
        }
    })  

    
    const trailReviews = reviews.map((reviewObj) => {

        function handleDelete() {
            fetch(`/reviews/${reviewObj.id}`, {
                method: 'DELETE'
            })
            window.location.reload()
        }

        function toggleEditButton() {
            setEditMode(current => !current)
        }

        const deleteButton = (user.id === reviewObj.user_id) ? <button onClick={handleDelete}>Delete Review</button> : null

        const editButton = (user.id === reviewObj.user_id) ? <button onClick={toggleEditButton}>Edit Review</button> : null
        
        return (
            <div key={reviewObj.id}>
                <h6>{reviewObj.users.name} || {reviewObj.rating}</h6>
                <p>{reviewObj.text}</p>
                <img style={{ width: 200 }} src={reviewObj.image}/>
                {editMode ? <EditReview reviews={reviews} setReviews={setReviews} reviewObj={reviewObj} setEditMode={setEditMode} /> : null}
                {editButton}
                {deleteButton}
            </div>
        )
     } )
     console.log(editMode)
    //  console.log(trailReviews)

    return <div>
        <h3>{oneTrail.name}</h3>
        <h5>{oneTrail.length} || {oneTrail.difficulty}</h5>
        <p>{oneTrail.description}</p>
        {/* <AddReview reviews={reviews} setReviews={setReviews} user={user} /> */}
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
                <br></br>
                <input type='file' name='image' value={images} onChange={(event) => {formik.setFieldValue('image', event.target.files[0])}} />
                <br></br>
                <input type='submit' />
            </form>
        {trailReviews}
    </div>
}

export default TrailCard;