import React from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { useForm } from 'react-hook-form';
import Header from "../../Components/Header/Header";
import "./addPost.css";
import {Link} from "react-router-dom"

const ChangeText = () => {
  const { quillRef } = useQuill();
  const [routes, setRoutes] = React.useState(false);

  const Modal = () => {
    return (
      <>
      <div className={routes ? "d-block":"d-none"}>
        <div className="modal-container">
          <div className="modal-overley"></div>
          <div className="row modal-box py-3 align-items-center position-relative">
            <div onClick={() => setRoutes(routes ? false:true)} className="position-absolute times-button text-center"><i className="fa-solid fa-xmark"></i></div>
            <h4 className="mt-3">Thêm bài viết thành công, mời quay lại trang chủ</h4>
            <Link to="/">Đồng ý</Link>
          </div>
        </div>
      </div>
      </>
    );
  }

  const onSubmit = () => {
    setRoutes(true)
  } ;
  const { register, handleSubmit, formState: { errors }, } = useForm();

  const [selectedImage, setSelectedImage] = React.useState(null);

  return (
    <div className="content">
        <Header title="Add new Post"/>
        <div className="box">
            <form onSubmit={handleSubmit(onSubmit)} action="#" method="post" className="d-flex align-items-center flex-wrap form-add-post">
                <div className="title-container">
                    <div className="myForm-control position-relative mb-4">
                        <h4>Tiêu đề bài viết</h4>
                        <input {...register('username', { required: true })} type="text" placeholder="Tiêu đề" />
                        {errors.username && <p className="error-toast position-absolute">Hãy nhập đúng trường này</p>}
                    </div>
                    <div className="myForm-control position-relative">
                        <h4>Tác giả</h4>
                        <input {...register('username', { required: true })} type="text" placeholder="Tác giả" />
                        {errors.username && <p className="error-toast position-absolute">Hãy nhập đúng trường này</p>}
                    </div>
                </div>
                <div className="text-container">
                    <h4 className="mb-2">Nội dung bài viết</h4>
                    <div ref={quillRef} />
                </div>
                <div className="action-container d-flex align-items-center flex-column">
                    <div className="upload-picture">
                        {selectedImage && (
                            <div className="d-flex flex-column align-items-center ">
                                <img alt="not fount" height={"300px"} width={"250px"} src={URL.createObjectURL(selectedImage)} />
                                <button className="mt-2" onClick={()=>setSelectedImage(null)}>Remove</button>
                            </div>
                        )}
                        {
                            !selectedImage && (
                                <div className="file-upload">
                                    <input
                                        type="file"
                                        name="myImage"
                                        title=" "
                                        onChange={(event) => {
                                            setSelectedImage(event.target.files[0]);
                                    }}/>
                                    <i className="fa fa-arrow-up"></i>
                                </div>
                            )
                        }
                    </div>
                    <button className="mt-5"type="submit">Thêm bài viết</button>
                </div>
            </form>
        </div>
        <Modal />
  </div>
  );
};
export default ChangeText;