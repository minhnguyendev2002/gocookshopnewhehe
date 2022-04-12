import React from 'react';
import Header from "../../Components/Header/Header";
import "./Blogs.css";
import Data from "../../Data/Blogs.json";
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [data, setData] = React.useState(Data)
  return (
    <>
    <div className="content">
      <Header title="Blogs"/>
      <div className="box">
      <div className="add-new-blog">
        <Link className="d-inline-block" to="/blogs/add-post">Thêm bài viết</Link>
      </div>
        <div className="d-flex flex-wrap">
          {data.map((item, index) => {
            return <div key={index} className="post d-flex mb-3">
                      <div className="post-image">
                          <img src={item.image_1} alt="/" />
                      </div>
                      <div className="post-content d-flex flex-column">
                          <h3 className="mb-2">{item.namepost}</h3>
                          <span className="time-post">
                              <span className="date">{item.time}</span>
                                  <span className="space-text">/</span>
                              <span className="author">{item.author}</span>
                                  <span className="space-text">/</span>
                              <span><i className="fas fa-eye"></i></span>
                              <span className="total-view">{item.view}</span>
                          </span>
                          <p className='mt-2'>{item.description}</p>
                          <div className="mt-3">
                            <a href='/' className="more-btn mt-auto d-inline-block me-2">Sửa bài viết</a>
                            <span onClick={() => setData(data.filter(elm => elm.id !== item.id))}className="more-btn mt-auto d-inline-block">Xóa bài viết</span>
                          </div>
                      </div>
                    </div>
          })}
        </div>
      </div>
    </div>
    </>
  )
}

export default Blogs