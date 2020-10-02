import React, { useEffect ,useState} from "react";

// import { isAuthenticated } from "../../../auth";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAllCategories } from '../../../../actions/categoryAction';
import {DeleteCategories } from '../../../../actions/categoryAction';

import Alert from '../../../../layout/Alert'

const GetCategories = ({ auth, category, getAllCategories }) => {

    useEffect(() => {
        getAllCategories();
    }, [getAllCategories])

    // const editCategory = (id) => {
   
       
    // };
    const editCategory = (id) => {

//         const initialState = { name: '' }
//         const [name, setName] = useState(initialState)
    
//   const handleInputChange = (e) => {
//     const { name} = e.target

//     setName({ ...name, [name]: name})
//   }
}


 
    const deleteCategory = (id) => {
        // const [category, setCategory] = useState({
        //     id:category_list
        // }
        // );
        
        // const del = id.filter(id => id !== category.id)
        //     setCategory(del)
        //     console.log('res', res)
      
            // const items = this.state.items.filter(item => item.id !== itemId);
            // this.setState({ id:id });
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
        

                        <td className="modaltext"><button onClick={editCategory(obj._id)}>Edit</button></td>


                        <td className="modaltext"><button onClick={deleteCategory(obj._id)}>Delete</button></td>

                    </tr>
                    )
})}
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



const mapStateToProps = state => ({
    auth: state.auth,
    category: state.category
})
export default (connect(mapStateToProps, { getAllCategories ,DeleteCategories})(GetCategories));
