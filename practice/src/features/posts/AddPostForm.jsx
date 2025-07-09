import { useState } from "react"
import { useDispatch } from "react-redux"
import { postAdded } from "./postSlice"
import { nanoid } from "@reduxjs/toolkit"

const AddPostForm = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({  id: nanoid(), title: "", content: "" })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
         dispatch(postAdded(formData))

        setFormData({title: "", content: ""})
    }

    return (<section>
        <h2>Add a New Post</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="postTitle">Post Title:</label>
            <input type="text" name="title" id="postTitle" value={formData.title} onChange={handleChange} required />
            <label htmlFor="postContent">Content:</label>
            <textarea
                id="postContent"
                name="content"
                value={formData.content} onChange={handleChange}
                required
            />
            <button>Save Post</button>
        </form>
    </section>)
}

export default AddPostForm