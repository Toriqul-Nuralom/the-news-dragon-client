import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit magnam doloribus repellat consequuntur dolorem nihil facilis molestias ut laudantium porro. Eius reiciendis possimus sequi aliquid, tempore perferendis error architecto exercitationem.</p>
            <p>Go Back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;