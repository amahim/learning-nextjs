const singlePost = async (props) => {
    const user = await props.params
  return <div>Profile page of name : {user.username}, id: {user.postId} </div>;
}

export default singlePost;