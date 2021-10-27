import React from 'react'

const Layout = ({ children }) => {
    return (
        <section  className="max-w-7xl  min-h-screen mx-auto overflow-hidden bg-gray-300">
            {children}
        </section>
    )
}

export default Layout
