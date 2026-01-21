const singleProfile = async (props) => {
    const user = await props.params
  return <div>Profile page of {user.username} </div>;
}

export default singleProfile;