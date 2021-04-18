import React from 'react';

const BlogPost = (props) => {
    const { title, description, author, image } = props.blog;

    return (
        <div className="col-md-4">

            <div class="card h-100" >
                <img class="card-img-top img-fluid" style={{height: "200px"}} src={image} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><h6>{author}</h6></li>
                    </ul>
                    
            </div>


            </div>
    );
};

export default BlogPost;