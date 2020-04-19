import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import Context from '../Context'


// export default function Folders(props) {
//     console.log(props)
//     return (
//         <li className={props.selectedFolder === props.folderName.name ? "active" : ""}>
//             <Link
//                 onClick={() => props.setSelectedFolder(props.folderName.name)}
//                 to={`/folder/${props.folderName.id}`}
//                 className={props.selectedFolder === props.folderName.name ? "active" : ""}
//             >
//                 <div className='button'>
//                     {props.folderName.name}
//                 </div>
//             </Link>
//         </li>
//     )
// }

class Folders extends React.Component {
    render() {
        return (
            <li onClick={() => this.context.setSelectFolder(this.props.folderName.name)} className={this.context.selectedFolder === this.props.folderName.name ? "active" : ""}>
                <Link
                    to={`/folder/${this.props.folderName.id}`}
                    className={this.context.selectedFolder === this.props.folderName.name ? "active" : ""}
                >
                    <div className='button'>
                        {this.props.folderName.name}
                    </div>
                </Link>
            </li>
        )
    }
}

Folders.contextType = Context

export default Folders

