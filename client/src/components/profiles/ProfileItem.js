import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
    profile: {
        user: { _id, name, avatar },
        status,
        company,
        location,
        skills,
    },
}) => {
    return (
        <div className='item'>
            <div className='profile bg-black' >
                <img src={avatar} alt='' className='round-img' />
                <div>
                    <h2>{name}</h2>
                    <h4>
                        {status} {company && <span> at {company}</span>}
                    </h4>
                    <Link to={`/profile/${_id}`} className='btn btn-primary' >
                        View Profile
                </Link>
                </div>
            </div>
        </div>
    );
};

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired,
};

export default ProfileItem;
