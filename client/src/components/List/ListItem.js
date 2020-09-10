import React from 'react'

export const ListItem = props => {
    return(
        <li className='list-group-item'>
            <p>{props.tool.title}</p>
        </li>
    )
}

export default ListItem
