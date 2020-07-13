import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
    addLike,
    removeLike,
    deletePost,
    auth,
    post: { _id, text, name, avatar, user, likes, comments, date },
    showActions,
}) => (
        <div className='post bg-light' className="postitem">

            <div>
                <h2 className='my-1'>{text}</h2>
                <p className='post-date'>
                    Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
                </p>

                {showActions && (
                    <Fragment>
                        <button
                            onClick={() => addLike(_id)}
                            type='button'
                            className='btn btn-dark'
                        >
                            <i className='fas fa-thumbs-up' />{' '}
                            <span>
                                {likes.length > 0 && <span>{likes.length}</span>}
                            </span>
                        </button>
                        <button
                            onClick={() => removeLike(_id)}
                            type='button'
                            className='btn btn-dark'
                        >
                            <i className='fas fa-thumbs-down' />
                        </button>
                        <Link to={`/posts/${_id}`} className='btn btn-primary'>
                            Discussion{' '}
                            {comments.length > 0 && (
                                <span >
                                    {comments.length}
                                </span>
                            )}
                        </Link>
                        {!auth.loading && user === auth.user._id && (
                            <button
                                onClick={() => deletePost(_id)}
                                type='button'
                                className='btn btn-danger'
                            >
                                <i className='fas fa-times' />
                            </button>

                        )}
                        <div>
                            <br></br>
                            <Link to={`/profile/${user}`}>
                                <img className='round-img' src={avatar} alt='' />
                                <h3 style={{ color: "Black" }}>{name}</h3>
                            </Link>
                        </div>
                    </Fragment>
                )}
            </div>
        </div>
    );

PostItem.defaultProps = {
    showActions: true,
};

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    showActions: PropTypes.bool,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
    PostItem
);
