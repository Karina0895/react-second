import React, {Component} from 'react'
import './GoodsListElement.css'
import PropTypes from 'prop-types';


export default class GoodsListElement extends Component {
    onDelete = (e) => {
        this.props.onDelete(this.props.good.id)
    };


    onToggle = (e) => {
        this.props.onToggle(this.props.good.id)
    };


    render() {
        const {title, weight, description, active, category} = this.props.good;
        return (
            <div className="GoodsListElement">
                <div className="GoodsListElement_Column GoodsListElement_Button">
                    <button onClick={this.onDelete}>Delete</button>
                </div>
                <div className="GoodsListElement_Column">{title}</div>
                <div className="GoodsListElement_Column">{weight}</div>
                <div className="GoodsListElement_Column GoodsListElement_ColumnDescription">{description}</div>
                <div className="GoodsListElement_Column ">{category}</div>
                <div className="GoodsListElement_Column GoodsListElement_Checkbox">
                    <input
                        type='checkbox'
                        checked={active}
                        onChange={() => this.onToggle()}/>
                </div>
            </div>
        )
    }
}


GoodsListElement.defaultProps = {
    good: {},
    title: '',
    weight: '',
    description: '',
    active: false
};

GoodsListElement.propTypes = {
    active: PropTypes.bool,
    good: PropTypes.object,
    title: PropTypes.string,
    weight: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string,
    onDelete: PropTypes.func,
    onToggle: PropTypes.func
};