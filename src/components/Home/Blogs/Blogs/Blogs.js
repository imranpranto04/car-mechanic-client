import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import oil from '../../../../images/oil.jpg'
import battery from '../../../../images/battery.jpg'
import interrior from '../../../../images/interrior.jpg'

const Blogs = () => {

    const blogData = [
        {
            title : 'Check oil levels',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author:'Toyota Motor Corporation',
            image : oil,
        },
        {
            title : 'Check your cars battery',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author:'Toyota Motor Corporation',
            image : battery,
        },
        {
            title : 'Protect your car interiors',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author:'Toyota Motor Corporation',
            image : interrior,
        },
    ]

    return (

       <section className="blogs my-5 container">
           <div className="mt-5">
               <div className="section-header text-center">
                    <h5 className="text-danger text-uppercase">Car Blogs</h5>
                    <h4>Car Maintenance Tips to Help Keep Your Vehicle in Good </h4>
               </div>
               <div className="row mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                    }
               </div>
           </div>
       </section>

    );
};

export default Blogs;