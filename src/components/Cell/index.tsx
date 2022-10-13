import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface CellProps {
    item: string;
}

const Cell: React.FC<CellProps> = ({item}) => {
    return <View style={styles.cellContainer}>        
        <Text style={styles.cellText}>{item}</Text>
    </View>
}

const styles = StyleSheet.create({
    cellContainer: {
        width: '100%',
        height: 60,
        backgroundColor: '#fff',
        marginVertical: 2,
        marginHorizontal: 6,
        justifyContent: 'center',
    },
    cellText: {
        fontSize: 24,
        marginHorizontal: 16,
    }
});

export default Cell;