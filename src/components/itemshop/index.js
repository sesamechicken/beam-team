import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadItemShop } from '../../redux/actions';

const ItemShop = (props) => {
  const { loadItemShop } = props;

  useEffect( () => {
    loadItemShop();
  }, []);


  const { specialFeatured, featured, daily } = props.itemShop;

  return(
    <React.Fragment>
      Coming soon.Very soon. 🤓
    </React.Fragment>
  )

}

const mapStateToProps = ({itemShop}) => {
  return {
    itemShop
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadItemShop: () => dispatch(loadItemShop())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemShop);