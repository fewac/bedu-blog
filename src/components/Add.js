import React from  'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as action from '../redux/actions/index'

const Add = ({ title, updateTitle }) => {

    return(        
    <div className="row justify-content-center">        
        <div className="col-8">
            <div className="card bg-light">
                <div className="card-body">
                    <h3 className="card-title text-center">New Post</h3>
                    <div className="form-group">
                        <input className="form-control" placeholder="Title..."
                            value = { title }
                            onChange = { (e) => updateTitle(e.target.value) }
                        />
                    </div>                    
                    <div className="form-group">
                        <textarea className="form-control" col="3" placeholder="Write your excerpt here..."></textarea>
                    </div>                    
                    <div className="form-group">
                        <textarea className="form-control" col="3" placeholder="Write your content here..."></textarea>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" col="3" placeholder="Who are you ..."></textarea>
                    </div>
                    <div className="text-right">
                        <button className="btn btn-primary mr-1">Save</button>
                        <Link to="/home" className="btn btn-secondary">Cancel</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

const mapStateToProps = ({ post }) => {
    const { post } = post.post
    return { title }
}

export default connect(mapStateToProps, actions)(Add)