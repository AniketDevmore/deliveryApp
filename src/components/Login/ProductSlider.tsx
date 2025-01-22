import React, { useMemo } from "react";
import { FlatList, Image, View, StyleSheet } from "react-native";
import AutoScroll from "@homielab/react-native-auto-scroll";
import { productImages } from "../../utils/dummyData";
import createStyles from './ProductSlider.styles'

const ProductSlider = () => {
    const styles = useMemo(() => createStyles(), []);

    // Group images into rows of 4
    const rows = useMemo(() => {
        const result = [];
        for (let i = 0; i < productImages.length; i += 3) {
            result.push(productImages.slice(i, i + 3));
        }
        return result;
    }, []);

    return (
        <View style={styles.container}>
            <AutoScroll
                endPaddingWidth={0}
                duration={10000}
            >
                <FlatList
                    data={rows}
                    keyExtractor={(item, index) => `row-${index}`}
                    renderItem={({ item, index }) => (
                        <MemorizedRow key={index} row={item} rowIndex={index} />
                    )}
                />
            </AutoScroll>
        </View>
    );
};

const Row = ({ row, rowIndex }: any) => {
    const styles = useMemo(() => createStyles(), []);
    const horizontalShift = rowIndex % 2 === 0 ? -10 : 10;
    return (
        <View style={[styles.rowContainer, { transform: [{ translateX: horizontalShift }] }]}>
            {row.map((image: any, imageIndex: any) => (
                <View style={styles.itemContainer} key={imageIndex}>
                    <Image source={image} style={styles.image} />
                </View>
            ))}
        </View>
    );
};

const MemorizedRow = React.memo(Row);

export default ProductSlider;

