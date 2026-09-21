import React from 'react';

const page = async({params}:{params:Promise<{bookid:string}>}) => {
    const {bookid}=await params
    return (
        <div>
            
        </div>
    );
};

export default page;