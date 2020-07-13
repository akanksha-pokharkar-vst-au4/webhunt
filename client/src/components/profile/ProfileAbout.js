import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
    profile: {
        bio,
        skills,
        user: { name },
    },
}) => (
        <div className='profile-about bg-dark p-2'>
            {bio && (
                <Fragment>

                    <h3>{bio}</h3>
                    <div className='line' />
                </Fragment>
            )}
            <h2 >Learned So Far</h2>
            <div className='skills'>
                {skills.map((skill, index) => (
                    <div key={index} className='p-1'>
                        <i className='fas fa-check' /> {skill}
                    </div>
                ))}
            </div>
        </div>
    );

ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
