import { Avatar } from 'primereact/avatar';
import { InputText } from 'primereact/inputtext';
import { Menubar } from 'primereact/menubar';

import { NavLink, useNavigate } from 'react-router-dom';

function Menu() {
    const navigate = useNavigate();

    const itemRenderer = (item) => (
        <NavLink className="flex align-items-center p-menuitem-link" to={item.to}>
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
        </NavLink>
    );

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            // url: '/',
            // to: '/',
            command() {
                navigate('/')
            }
        },
        {
            label: 'List of workshops',
            icon: 'pi pi-search',
            // url: '/workshops',
            // to: '/workshops',
            command() {
                navigate('/workshops')
            }
        },
        {
            label: 'Add a workshop',
            icon: 'pi pi-plus',
            // url: '/workshops/add',
            // to: '/workshops/add',
            command() {
                navigate('/workshops/add')
            }

            // items: [
            //   {
            //     label: 'Components',
            //     icon: 'pi pi-bolt'
            //   },
            //   {
            //     label: 'Blocks',
            //     icon: 'pi pi-server'
            //   },
            //   {
            //     label: 'UI Kit',
            //     icon: 'pi pi-pencil'
            //   },
            //   {
            //     label: 'Templates',
            //     icon: 'pi pi-palette',
            //     items: [
            //       {
            //         label: 'Apollo',
            //         icon: 'pi pi-palette'
            //       },
            //       {
            //         label: 'Ultima',
            //         icon: 'pi pi-palette'
            //       }
            //     ]
            //   }
            // ]
        },
        // {
        //   label: 'Contact',
        //   icon: 'pi pi-envelope'
        // }
    ];

    const end = (
        <div className="flex align-items-center gap-2">
            <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
        </div>
    );

    return (
        <Menubar model={items} end={end} />
    );
}

export default Menu;
