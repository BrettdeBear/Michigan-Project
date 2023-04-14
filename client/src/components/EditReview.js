import { useFormik } from "formik";

function EditReview({reviews, setReviews, reviewObj, setEditMode}) {


    const formik = useFormik({
        initialValues: {
            rating: reviewObj.rating,
            text: reviewObj.text
        },
        onSubmit: (values) => {
            fetch(`/reviews/${reviewObj.id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            }).then(res => {
                if (res.ok) {
                    res.json().then(newReview => {
                        const updatedReviews = reviews.map(review => {
                            if (review.id === newReview.id) {
                                return newReview
                            } else {
                                return review
                            }
                        })
                        setReviews(updatedReviews)
                        setEditMode(current => !current)
                    })
                }
            })
        }
    })
    return (
        <form className='editreviewform' onSubmit={formik.handleSubmit}>
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
                <input id='submit' type='submit' />
            </form>
    )
}

export default EditReview;