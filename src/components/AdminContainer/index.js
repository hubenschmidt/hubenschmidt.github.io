import React, { Component, Fragment } from "react";
import Index from "../../pages/index";

// const AdminContainer = () =>
//     return(
//         <Fragment>
//           <Index/>
//         </Fragment>
//       )

// class AdminContainer extends Component {
//     state = {
//         projectData: {}
//     }

//   render() {

const AdminContainer = props => {
  console.log(props.match.params.id)
  let id = props.match.params.id
  console.log(id)
  return (
    <Fragment>
      <Index {...id} />
    </Fragment>
  );
};

export default AdminContainer;
