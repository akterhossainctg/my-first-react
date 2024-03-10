export default function Post({post}){
    const {title,body,Id,userId} = post;
    return (
        <div className="box">
            <h4>Title {title}</h4>
            <h6>User Id {userId}</h6>
            <h6> Post Id{Id}</h6>
            <p>{body}</p>
        </div>
    )
}