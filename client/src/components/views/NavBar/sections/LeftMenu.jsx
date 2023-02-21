import React, { useMemo } from 'react'
import { Menu } from 'antd';

const LeftMenu = ({ mode }) => {

    const menuItems = useMemo(() => {
        return [
            {
                key: 'mail',
                label: <a href='/'>Home</a>,
            },
            {
                ket: 'favorite',
                label: <a href='/favorite'>Favorite</a>
            },
            // {
            //     key: 'submenu',
            //     label: <span>Blogs</span>,
            //     children: [
            //         {
            //             ley: 'Item 1',
            //             label: 'Item 1',
            //             children: [
            //                 {
            //                     key: 'setting:1',
            //                     label: 'Option 1',                    
            //                 },
            //                 {
            //                     key: 'setting:2',
            //                     label: 'Option 2',  
            //                 },
            //             ],
            //         },                
            //         {
            //             ley: 'Item 2',
            //             label: 'Item 2',
            //             children: [
            //                 {
            //                     key: 'setting:3',
            //                     label: 'Option 3',                    
            //                 },
            //                 {
            //                     key: 'setting:4',
            //                     label: 'Option 4',  
            //                 },
            //             ],
            //         },   
            //     ],
            // },
        ];
    });    

    return(      
        <Menu mode={mode} items={menuItems} style={{width: '300px', marginTop: '10px'}}/>
    );
};

export default LeftMenu;