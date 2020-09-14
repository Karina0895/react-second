import React, {Component} from 'react'
import './App.css'
import PropTypes from 'prop-types';
import GoodsList from '../GoodsList/GoodsList'
import {goods} from '../Mocks/GoodsMock'
import GoodsListForm from '../GoodsListForm/GoodsListForm'
import {
    addNewItem,
    removeElementById,
    getTotal,
    getSubTotal,
    toggleElementById,
    removeActive
} from '../Utils/goodsUtils'

export default class App extends Component {
    state = {
        goods,
        total: getTotal(goods),
        subtotal: getSubTotal(goods)
    };

    recalculateTotal = () => {
        this.setState((state) => ({
            total: getTotal(state.goods)
        }))
    };

    recalculateSubTotal = () => {
        this.setState((state) => ({
            subtotal: getSubTotal(state.goods)
        }))
    };

    onAdd = (newElement) => {
        this.setState(({goods}) => {
            const newArray = addNewItem(newElement, goods);
            return {
                goods: newArray,
                total: getTotal(newArray),
                subtotal: getSubTotal(newArray),
            }
        })
    };

    onDelete = (id) => {
        const newArray = removeElementById(id, this.state.goods);
        this.setState({
            goods: newArray,
            total: getTotal(newArray),
            subtotal: getSubTotal(newArray),

        })
    };

    onDeleteActive = (id) => {
        const newArray = removeActive(id, this.state.goods);
        this.setState({
            goods: newArray,
            total: getTotal(newArray),
            subtotal: getSubTotal(newArray),
        })
    };

    onToggle = (id) => {
        const newArray = toggleElementById(id, this.state.goods);
        this.setState({
            goods: newArray,
            total: getTotal(newArray),
            subtotal: getSubTotal(newArray),
        })
    };


    render() {
        const {total, subtotal, goods} = this.state;
        return (
            <div className="Container">
                <div className="Title">Fridge</div>
                <GoodsList goods={goods} onToggle={this.onToggle} onDelete={this.onDelete}
                           onDeleteActive={this.onDeleteActive}/>
                <div className="SubTotal">
                    <div>Sub Total:</div>
                    <div>{subtotal}</div>
                </div>
                <div className="Total">
                    <div>Total:</div>
                    <div>{total}</div>
                </div>
                <button className="DeleteActive" onClick={this.onDeleteActive}>Delete Active Items</button>
                <GoodsListForm onAdd={this.onAdd}/>
            </div>
        )
    }
}

App.defaultProps = {
    goods: [],
    total: 0,
    subtotal: 0,
};

App.propTypes = {
    goods: PropTypes.array,
    total: PropTypes.number,
    subtotal: PropTypes.number,
    recalculateTotal: PropTypes.func,
    recalculateSubTotal: PropTypes.func,
    onAdd: PropTypes.func,
    onDelete: PropTypes.func,
    onDeleteToggle: PropTypes.func,
};