import React from 'react';
import {useForm} from 'react-hook-form';
import {connect} from 'react-redux';
import {editTrucks} from '../actions';


const EditTruck = (props) => {
    const {handleSubmit, register, errors} = useForm();
    console.log(props);
    const onSubmit = values => {
        let data = {
            name: values.name ? values.name : props.location.state.truck.name,
            imageUrl: values.imageUrl ? values.imageUrl : props.location.state.truck.imageUrl,
            cuisine: values.cuisine ? values.cuisine : props.location.state.truck.cuisine
        }
        props.editTrucks(data, props.match.params.id);
    };
    return(<>
        <div className="editTruck">
            <h2>Editing Truck (TruckName)</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name: 
                    <input name="name" placeholder={props.location.state.truck.name} ref={register} /></label>
                <label>Image: 
                    <input name="imageUrl" placeholder={props.location.state.truck.imageUrl} ref={register} /></label>
                <label>Name: 
                    <input name="cuisine"  placeholder={props.location.state.truck.cuisine} ref={register} /></label>
                <button>Edit</button>
            </form>

        </div>
    
    </>);
};
const mapStateToProps = state => {
    return{};
}
export default connect(
    mapStateToProps,
    {editTrucks}
    )(EditTruck);