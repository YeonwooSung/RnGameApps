import { Fragment } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { Coordinate } from "@/constants/Types";


interface SnakeProps {
    snake: Coordinate[];
}


export default function Snake({ snake }: Readonly<SnakeProps>): JSX.Element {
    return (
        <Fragment>
            {snake.map((segment: any, index: number) => {
                const segmentStyle = {
                left: segment.x * 10, // adjust for the size of each segment
                top: segment.y * 10,
                };
                const key = `fragment-${index}`;
                return <View key={key} style={[styles.snake, segmentStyle]} />;
            })}
        </Fragment>
    );
}

const styles = StyleSheet.create({
    snake: {
        width: 15,
        height: 15,
        borderRadius: 7,
        backgroundColor: Colors.primary,
        position: "absolute",
    },
});
