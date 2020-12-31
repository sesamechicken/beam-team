import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import {loadStats} from '../../redux/actions';

const Profile = (props) => {
  let { id } = useParams();

  useEffect( () => {
    props.loadStats(id);
  }, []);

  return <div>Soon. Very soon.</div>;
}


const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadStats: (member) => dispatch(loadStats(member))
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Profile);