import React, { useEffect ,useState, useDispatch} from "react";

// import { isAuthenticated } from "../../../auth";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAllCategories } from '../../../../actions/categoryAction';
import {DeleteCategories, deleteCategory } from '../../../../actions/categoryAction';
import { toast, Slide } from "react-toastify";
import Alert from '../../../../layout/Alert'

const GetCategories = ({ auth, category, getAllCategories,deleteCategory, DeleteCategories }) => {

    useEffect(() => {
        getAllCategories();
    }, [getAllCategories])


    //  const dispatch = useDispatch();
  
    const handleDelete = (obj) => {
        DeleteCategories(obj._id, obj.userId)
    };

 

    return (
        <table>
            <div className="center">
                <thead>
                    <tr >
                        <th className="modaltext">S.No</th>



                        <th className="modaltext">Category Name</th>


                        <th className="modaltext">Edit</th>


                        <th className="modaltext">Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        category.category_list.map((obj, index,id)=>{

                            return(
                    <tr key={id}>
                        <td className="modaltext" >{index+1}</td>



                        <td className="modaltext">{obj.name}</td>
        

                        {/* <td className="modaltext"><button onClick={editCategory(obj._id)}>Edit</button></td> */}


                        {/* <td className="modaltext"><button onClick={() => deleteCategory(obj._id)}>Delete</button></td> */}

                    </tr>
                    )
})}                        <td className="modaltext"><button onClick={handleDelete}>Delete</button></td>

                </tbody>
            </div>
        </table>
    );
};

GetCategories.propTypes = {
    auth: PropTypes.object.isRequired,
    getAllCategories: PropTypes.func.isRequired,
    DeleteCategories:PropTypes.func.isRequired
};




// const mapStateToProps = state => ({
//     auth: state.auth,
//     category: state.category,
    
// })
const mapStateToProps = (state,categoryReducer) => ({
    auth: state.auth,
    category: state.category,
    _id: categoryReducer._id
});

const mapDispatchToProps = (dispatch) => ({
deleteCategory:(_id)  => dispatch(deleteCategory(_id)),
getAllCategories:() => dispatch(getAllCategories()),
DeleteCategories:(_id,userId) => dispatch(DeleteCategories(_id,userId))
});
// export default (connect(mapStateToProps, { getAllCategories ,DeleteCategories})(GetCategories));
export default (connect(mapStateToProps, mapDispatchToProps)(GetCategories));


// const mapStateToProps = state => ({
//     auth: state.auth,
//     category: state.category
// })
// export default (connect(mapStateToProps, { getAllCategories ,DeleteCategories})(GetCategories));