import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <p>my page</p>
            <Link href='/'>Home</Link>
        </div>
    );
};

export default page;