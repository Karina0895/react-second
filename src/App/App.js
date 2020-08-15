import React, { Component } from 'react'

import './App.css'

import GoodsList from '../GoodsList/GoodsList'
import { goods } from '../Mocks/GoodsMock'
import GoodsListForm from '../GoodsListForm/GoodsListForm'
import { addNewItem, removeElementById, getTotal } from '../Utils/goodsUtils'

export default class App extends Component {
  state = {
    goods,
    total: getTotal(goods),
  }

  recalculateTotal = () => {
    this.setState((state) => ({
      total: getTotal(state.goods)
    }))
  }

  onAdd = (newElement) => {
    this.setState(({ goods }) => {
      const newArray = addNewItem(newElement, goods)
      return {
        goods: newArray,
        total: getTotal(newArray),
    }})
  }

  onDelete = (id) => {
    const newArray = removeElementById(id, this.state.goods)
    this.setState({
      goods: newArray,
      total: getTotal(newArray),
    })
  }

  render() {
    const { total, goods } = this.state
    return (
      <div className="Container">
        <div className="Title">Fridge</div>
        <GoodsList goods={goods} onDelete={this.onDelete}/>
        <div className="Total">
          <div>Total:</div>
          <div>{total}</div>
          <div/>
        </div>
        <GoodsListForm onAdd={this.onAdd}/>
      </div>
    )
  }
}
