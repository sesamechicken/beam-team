import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = (props) => {
  let { id } = useParams();

  console.log(`profile says ${JSON.stringify(props, null, 2)} - i will fetch stats for ${id}`)
  return <div>This is your profile. It will be magical</div>;
}

export default Profile;


// const mapStateToProps = (state) => {
//   return {
//     state
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadStats: (member) => dispatch(actions.loadStats(member))
//   };
// };

// useEffect( () => {
//   team.map((teammate) => {
//     props.loadStats(teammate.username)
//   })
// }, []);

// export default connect(mapStateToProps, mapDispatchToProps)(Roster);