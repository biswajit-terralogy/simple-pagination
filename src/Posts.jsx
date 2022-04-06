import React from 'react'

const Posts = ({ data }) => {
    return (
        <div className="post-container">
            {data.map(({ title, body, userId, id }, idx) => <div className="single-post" key={`${userId}-${idx}`}>
                <div className="post-title"><b>{id}{" "}</b>{title}</div>
                <div>{body}</div>
            </div>)}
        </div>
    )
}

export default Posts