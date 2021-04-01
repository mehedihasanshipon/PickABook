import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddBooks.css";

const AddBooks = () => {
  const { register, handleSubmit } = useForm();
  const [imgUrl, setImgUrl] = useState({});
  console.log({ imgUrl });
  const onSubmit = (data) => {
    // console.log(data)
    const books = {
      name: data.name,
      price: data.price,
      author: data.author,
      bookImage: imgUrl,
    };

    axios
      .post("https://radiant-badlands-32060.herokuapp.com/addBooks", books)
      .then(function (response) {
        console.log("Server side result", response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(books);
  };

  const handleImageUpload = (e) => {
    // console.log(e.target.files[0]);
    const imgData = new FormData();
    imgData.set("key", "baf759f7b47b24e2b89feea41140dc74");
    imgData.append("image", e.target.files[0]);
    console.log(imgData);

    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then(function (response) {
        setImgUrl(response.data.data.display_url);
        // console.log(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="input-section d-flex justify-content-center">
        <div className="book-info">
          <div className="form-section p-4">
            <h4 className="text-center">Add Book</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                name="name"
                className="form-control"
                placeholder="Enter Name"
                ref={register}
              />

              <label htmlFor="price" className="form-label">
                Add price
              </label>
              <input
                name="price"
                className="form-control"
                placeholder="Enter Price"
                ref={register}
              />

              <label htmlFor="author" className="form-label">
                Author Name
              </label>
              <input
                name="author"
                className="form-control"
                placeholder="Enter Author Name"
                ref={register}
              />

              <label for="formFile" className="form-label">
                Add book cover photo
              </label>
              <input
                onChange={handleImageUpload}
                className="form-control"
                type="file"
                id="formFile"
              />
              {imgUrl.length > 0 ? (
                <input
                  type="submit"
                  value="Add Book"
                  className="form-control btn btn-primary my-2"
                />
              ) : (
                <input
                  type="submit"
                  value="Add Book"
                  disabled
                  className="form-control btn btn-primary my-2"
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
