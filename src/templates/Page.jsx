import React from 'react'
import SideNav from '../Nav/SideNav'


function Page(props) {
    return (
        <div className="grid md:grid-cols-6">
            <SideNav />
            <div className="md:col-span-5">
                {props.children}
            </div>
        </div>
    )
}

export default Page
