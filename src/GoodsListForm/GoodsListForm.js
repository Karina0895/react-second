import React, {Component} from 'react'
import './GoodsListForm.css'
import PropTypes from 'prop-types';

export default class GoodsListForm extends Component {

    state = {
        title: '',
        weight: '',
        description: '',
        category: ''
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state);
        this.setState({
            title: '',
            weight: '',
            description: '',
            category: ''
        })
    };

    onInputChange = ({target}) => {
        this.setState({
            [target.name]: target.value
        })
    };

    render() {
        const {title, weight, description} = this.state;
        return (
            <div>
                <form
                    className="GoodsListForm"
                    onSubmit={this.onFormSubmit}
                >
                    <input required
                           className="GoodsListFormInput"
                           placeholder="Title"
                           name="title"
                           value={title}
                           onChange={this.onInputChange}
                    />
                    <input required
                           className="GoodsListFormInput"
                           placeholder="Weight"
                           name="weight"
                           type="number"
                           min="0" step="0.1"
                           value={weight}
                           onChange={this.onInputChange}
                    />
                    <input required
                           className="GoodsListFormInput"
                           placeholder="Description"
                           name="description"
                           value={description}
                           onChange={this.onInputChange}
                    />
                    <select required className="GoodsListFormInput" onChange={this.onInputChange} name="category">
                        <option value="">Please Select</option>
                        <option value="Soft drinks">Soft drinks</option>
                        <option value="Alcohol">Alcohol</option>
                        <option value="Alcohol">Alcohol</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Meat & Milk">Meat & Milk</option>
                    </select>
                    <button className="GoodsListFormButton">Add</button>
                </form>
            </div>
        )
    }
}


GoodsListForm.defaultProps = {
    good: {},
    title: '',
    weight: '',
    description: '',
    category: '',
    active: false
};

GoodsListForm.propTypes = {
    active: PropTypes.bool,
    good: PropTypes.object,
    title: PropTypes.string,
    weight: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string,
    onFormSubmit: PropTypes.func,
    onInputChange: PropTypes.func
};