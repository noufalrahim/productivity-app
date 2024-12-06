import React from 'react';
import EducationIcon from '../public/assets/educational-icon.svg';
import HealthIcon from '../public/assets/health-icon.svg';
import HouseIcon from '../public/assets/house-icon.svg';
import PersonalIcon from '../public/assets/personal-icon.svg';
import WorkIcon from '../public/assets/work-icon.svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export const Icon = ({ name, size }: { name: string, size: number }) => {
    switch (name) {
        case 'EDUCATIONAL':
            return <EducationIcon width={size} height={size} />;
        case 'HEALTH':
            return <HealthIcon width={size} height={size} />;
        case 'HOUSE':
            return <HouseIcon width={size} height={size} />;
        case 'PERSONAL':
            return <PersonalIcon width={size} height={size} />;
        case 'WORK':
            return <WorkIcon width={size} height={size} />;
        default:
            return <MaterialIcons name="task-alt" size={size} color={'gray'} />;
    }
};
