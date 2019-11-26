import React from 'react';
import Button from '@material-ui/core/Button';
import OverallContent from '../../../data/OverallContent'

export default function MenuList() {
    const overallContent = OverallContent();
    return (
        <div>
            { overallContent.map((content) => (
                <Button key={content.sectionName} color="inherit" >{content.sectionName}</Button>
            ))}
        </div>
    );
}