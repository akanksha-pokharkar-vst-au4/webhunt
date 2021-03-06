import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPosts } from '../../actions/post';

const Posts = ({ getPosts, post: { posts, loading } }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return loading ? (
        <Spinner />
    ) : (
            <Fragment>
                <section className="dash" style={{ width: "100%" }}>
                    <h1 className='large text'>Posts</h1>

                    <PostForm />
                    <div className='post'>
                        {posts.map(post => (
                            <PostItem key={post._id} post={post} />
                        ))}
                    </div>
                </section>
            </Fragment>
        );
};

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
