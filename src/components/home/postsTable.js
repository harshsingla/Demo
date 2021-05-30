import {useEffect} from 'react'
import {Table} from 'antd'
import {connect} from 'react-redux'
import {getAllPosts} from '../redux/actions/posts'

function PostTable(props) {

    const columns = [
        {
            title : "Title",
            dataIndex : "title",
        },
        {
            title : "Content",
            dataIndex : "body"
        }
    ]

    useEffect(() => {
        props.getAllPosts()
    }, [])

    return (
        <div>
            <Table columns={columns} dataSource={props.data} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data : state.postReducer.posts
    }
}

// const mapDispatchToProps = state => {
//     return {
//         getAll : (data) => getAllPosts(data)
//     }
// }

export default connect(mapStateToProps, {getAllPosts})(PostTable)
