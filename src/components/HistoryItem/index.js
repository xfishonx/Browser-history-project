// import React from 'react'
import './index.css'

const HistoryItem = props => {
  const {historyItem, onDeleteUserItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const deleteItem = () => {
    onDeleteUserItem(id)
  }

  return (
    <li className="li">
      <div className="container-li-items">
        <p className="timeAccessed">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="domain-pic" />
        <p className="title-website">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>
      <div>
        <button data-testid="delete" type="button" onClick={deleteItem}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
