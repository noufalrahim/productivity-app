import React, { useCallback } from 'react';
import { Text, TouchableWithoutFeedback, View, StyleSheet, Keyboard } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

export default function BottomSheetComponent({ bottomSheetRef }: any) {
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const closeOnTapOutside = () => {
        bottomSheetRef.current?.close();
        Keyboard.dismiss(); // Dismiss the keyboard when tapping outside
    };

    return (
        <View style={styles.overlayContainer}>
            <BottomSheet
                ref={bottomSheetRef}
                onChange={handleSheetChanges}
                snapPoints={['25%', '50%', '90%']} // Define snap points
                style={styles.bottomSheet} // Apply custom styles to the BottomSheet
                detached={true} // Detach the BottomSheet from the parent component
                enableContentPanningGesture={true}
                enableHandlePanningGesture={true}
                enableDynamicSizing={true}
                enableOverDrag={true}
                enablePanDownToClose={true}
            >
                <BottomSheetView style={styles.contentContainer}>
                    <Text>Awesome 🎉</Text>
                </BottomSheetView>
            </BottomSheet>
        </View>
    );
}

const styles = StyleSheet.create({
    overlayContainer: {
        flex: 1,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000, // Ensure it appears on top
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Dim background for overlay
    },
    bottomSheet: {
        zIndex: 2000, // Ensure the BottomSheet appears above the overlay
    },
    contentContainer: {
        flex: 1,
        padding: 36,
        alignItems: 'center',
    },
});
