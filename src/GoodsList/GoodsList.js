import React, {Component} from 'react'
import GoodsListElement from '../GoodsListElement/GoodsListElement'
import PropTypes from 'prop-types';

export default class GoodsList extends Component {
    onDelete = (id) => {
        this.props.onDelete(id)
    };


    onToggle = (id) => {
        this.props.onToggle(id)
    };


    render() {
        const {goods} = this.props;
        return (
            <div>
                {Array.isArray(goods) && goods.map((good) => {
                    return (
                        <GoodsListElement
                            good={good}
                            key={good.id}
                            onDelete={this.onDelete}
                            onToggle={this.onToggle}
                        />
                    )
                })}
            </div>
        )
    }
}


GoodsListElement.defaultProps = {
    goods: [],
    good: {},
    active: false
};

GoodsListElement.propTypes = {
    goods: PropTypes.array,
    good: PropTypes.object,
    onDelete: PropTypes.func,
    onToggle: PropTypes.func
};