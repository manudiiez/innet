import React, { useState } from 'react'
import useFetch from '../hooks/useFetch';
import Collapse from '@mui/material/Collapse';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { StarBorder } from '@material-ui/icons';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';
import ListSubheader from '@mui/material/ListSubheader';
import DraftsIcon from '@mui/icons-material/Drafts';
const ItemListDropdown = ({setPerson, uri, title, handleChange}) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState('');

    const { data, loading, reFetch } = useFetch(uri);

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleSelect = (id) => {
        handleChange(id)
        setSelected(id)
    }


    return (
        <div>
            {
                loading ? (
                    <p>Loading...</p>
                ) : (
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                Nested List Items
                            </ListSubheader>
                        }
                    >
                        <ListItemButton onClick={handleOpen}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={title} />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            {
                                data.map(item => (
                                    <List component="div" key={item.id} disablePadding onClick={() => { handleSelect(item.id) }}>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <StarBorder style={{color: `${selected === item.id ? 'gold' : 'black'}`}} />
                                            </ListItemIcon>
                                            <ListItemText primary={`${item.name} ${item.lastname !== undefined ? item.lastname : ''} | ${item.dni !== undefined ? item.dni : ''}`} />
                                        </ListItemButton>
                                    </List>
                                ))
                            }
                        </Collapse>
                    </List>
                )
            }
        </div>
    )
}

export default ItemListDropdown