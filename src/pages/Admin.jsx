
export default function Admin () {

    const submitHandler = (event) => {
       event.preventDefault();

       const formData = new FormData(event.target);

       // const data = Object.fromEntries(formData);

       const data = {
        "image": formData.get("imageUrl"),
        "category": formData.get("category"),
        "breed": formData.get("breed"),
        "gender": formData.get("gender"),
        "location": formData.get("location"),
        "short_description": formData.get("shortDescription"),
        "long_description": formData.get("longDescription"),
       }
       
       console.log(data);

       fetch('http://localhost:4000/dogs', {
           method: 'POST',
           headers: {
            'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
       }).then(response => console.log('API response:', response));
       
    }

    return (

        <div className="admin layout-background">
            <main className="admin__main layout-background">
                <h1>Admin Panel</h1>
                <form className="admin__form" onSubmit={submitHandler}>
                    <label className="admin__label">
                        <span>Category</span>
                        <select name="category" className="admin__input">
                            <option value="dogs">Dogs</option>
                            <option value="dogs">Cats</option>
                            <option value="dogs">Birds</option>
                            <option value="dogs">Others</option>
                        </select>
                    </label>

                    <label className="admin__label">
                        <span>Breed</span>
                        <input name="breed" type="text" className="admin__input" placeholder="Enter breed" />
                    </label>

                    <label className="admin__label">
                        <span>Gender</span>
                        <input name="gender" type="text" className="admin__input" placeholder="Enter gender" />
                    </label>

                    <label className="admin__label">
                        <span>Image<br />URL</span>
                        <input name="imageUrl" type="text" className="admin__input" placeholder="Enter image URL" />
                    </label>

                    <label className="admin__label">
                        <span>Location</span>
                        <input name="location" type="text" className="admin__input" placeholder="Enter location" />
                    </label>

                    <label className="admin__label">
                        <span>Short<br />description</span>
                        <textarea name="shortDescription" className="admin__input" placeholder="Enter short description" rows="6" />
                    </label>

                    <label className="admin__label">
                        <span>Long<br />description</span>
                        <textarea name="longDescription" className="admin__input" placeholder="Enter long description" rows="6"/>
                    </label>
                    <button type="submit" className="admin__submit">Add Pet</button>
                </form>
            </main>
        </div>

    )
}