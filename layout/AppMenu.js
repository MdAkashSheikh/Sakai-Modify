import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const model = [
        {
            label: 'Home',
            items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
        },

        {
            label: 'Pages',
            icon: 'pi pi-fw pi-briefcase',
            to: '/pages',
            items: [

                {
                    label: 'Auth',
                    icon: 'pi pi-fw pi-user',
                    items: [
                        {
                            label: 'Login',
                            icon: 'pi pi-fw pi-sign-in',
                            to: '/auth/login'
                        },
                        {
                            label: 'Error',
                            icon: 'pi pi-fw pi-times-circle',
                            to: '/auth/error'
                        },
                        {
                            label: 'Access Denied',
                            icon: 'pi pi-fw pi-lock',
                            to: '/auth/access'
                        }
                    ]
                },
                {
                    label: 'Customer',
                    icon: 'pi pi-fw pi-user',
                    to: '/pages/crud'
                }
            ]
        },
        
                {
                    label: 'Setting',
                    icon: 'pi pi-fw pi-bookmark',
                    items: [
                        {
                            label: 'Submenu 1.1',
                            icon: 'pi pi-fw pi-bookmark',
                            items: [
                                { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                            ]
                        }
                    ]
                },
                // {
                //     label: 'Submenu 2',
                //     icon: 'pi pi-fw pi-bookmark',
                //     items: [
                //         {
                //             label: 'Submenu 2.1',
                //             icon: 'pi pi-fw pi-bookmark',
                //             items: [
                //                 { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                //                 { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
                //             ]
                //         },
                //         {
                //             label: 'Submenu 2.2',
                //             icon: 'pi pi-fw pi-bookmark',
                //             items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
                //         }
                //     ]
                // }
            ]
        

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
