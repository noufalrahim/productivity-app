import React, { useState } from 'react';
import { Actionsheet } from 'native-base';
import { BottomSheetProps, ChosenCategoryType } from './types';
import { styles } from './styles';
import AllCategories from './AllCategories';
import AddNewTask from './AddNewTask';

export default function BottomSheetComponent({ onClose, isOpen, backgroundStyle, fetchData, respData }: BottomSheetProps) {
    const [chosenCategory, setChosenCategory] = useState<ChosenCategoryType>({
        id: 'EDUCATIONAL',
        label: 'Educational',
    });

    const [renderItem, setRenderItem] = useState('AllCategories');

    const handleRenderItem = (item: string) => {
        setRenderItem(item);
    };

    const handleClose = () => {
        onClose();
        setRenderItem('AllCategories');
    };

    return (
        <Actionsheet isOpen={isOpen} onClose={handleClose}>
            <Actionsheet.Content style={[styles.container, { backgroundColor: backgroundStyle.secondary }]}>
                {
                    renderItem === 'AllCategories' ? (
                        <AllCategories backgroundStyle={backgroundStyle} onClose={onClose} setRenderItem={handleRenderItem} setChosenCategory={setChosenCategory}/>
                    ) : renderItem === 'AddNewTask' ? (
                        <AddNewTask respData={respData} backgroundStyle={backgroundStyle} onClose={onClose} category={chosenCategory} fetchData={fetchData}/>
                    ) : null
                }
            </Actionsheet.Content>
        </Actionsheet>
    );
}
