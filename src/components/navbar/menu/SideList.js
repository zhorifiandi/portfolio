import React from 'react';
import { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import AppsIcon from '@material-ui/icons/Apps';
import OverallContent from '../../../data/OverallContent'

function getRelevantIcon(name) {
    switch (name) {
        case "Experience": return (<WorkIcon />)
        case "Education" : return (<SchoolIcon />)
        default: return (<AppsIcon />)
    }
}

class SideList extends Component {
    render() {
        const overallContent = OverallContent();
        return (
            <div
                role="presentation"
                className={this.props.className}
            >
                <List>
                {overallContent.map((content, index) => (
                    <ListItem button key={content.sectionName}>
                    <ListItemIcon>{getRelevantIcon(content.sectionName)}</ListItemIcon>
                    <ListItemText primary={content.sectionName} />
                    </ListItem>
                ))}
                </List>
            </div>
        );
    }
}

export default SideList;