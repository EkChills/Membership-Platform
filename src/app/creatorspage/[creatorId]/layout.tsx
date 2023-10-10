import Sidebar from '@/components/ui/Sidebar';
import React from 'react';

type layoutProps = {
    children: React.ReactNode
};

const layout:React.FC<layoutProps> = ({children}) => {
    
    return (
        <>
        <Sidebar/>
        {children}
        </>
    )
}
export default layout;