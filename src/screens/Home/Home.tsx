import { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native"

const Home = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const handleScroll = (event: any) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        setScrollTop(offsetY);
    };

    console.log('-------->>', scrollTop);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <ScrollView style={{
                flex: 1,
                backgroundColor: 'red'
            }}
                scrollEnabled={true}
            >
                <Text style={{ height: 100 }}>bbb</Text>

                <ScrollView
                    style={{
                        flex: 1,
                        backgroundColor: 'green'
                    }}
                    scrollEnabled={true}>
                    <Text style={{ height: 100 }}>ccc</Text>

                    <ScrollView
                        style={{
                            flex: 1,
                            backgroundColor: 'yellow'
                        }}
                        scrollEnabled={true}>
                        <Text style={{ height: 200 }}>aaaa</Text>
                        <Text style={{ height: 200 }}>aaaa</Text>
                        <Text style={{ height: 200 }}>aaaa</Text>
                        <Text style={{ height: 200 }}>aaaa</Text>
                        <Text style={{ height: 200 }}>aaaa</Text>
                        <Text style={{ height: 200 }}>aaaa</Text>
                        <Text style={{ height: 200 }}>aaaa</Text>
                        <Text style={{ height: 200 }}>aaaa</Text>
                        <Text style={{ height: 200 }}>aaaza</Text>
                    </ScrollView>
                </ScrollView>
            </ScrollView> */}
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: 'yellow'
                }}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                scrollEnabled={true}
            >
                <View style={scrollTop <= 100 ? {
                    position: 'relative',
                    backgroundColor: 'red'
                } : {
                    position: 'absolute',
                    top: 100,
                    backgroundColor: 'red'
                }}>
                    <Text style={{ height: 100 }}>bbbbbbbbbbbb</Text>
                </View>
                <View
                    style={(scrollTop <= 200 && scrollTop >= 100) ? {
                        position: 'absolute',
                        top: 200
                    } : {
                        position: 'absolute',
                        top: 100
                    }}
                >
                    <Text style={{ height: 100 }}>ccccccccccc</Text>
                </View>
                <View>
                    <Text style={{ height: 200 }}>aaaasss</Text>
                    <Text style={{ height: 200 }}>aaaa</Text>
                    <Text style={{ height: 200 }}>aaaa</Text>
                    <Text style={{ height: 200 }}>aaaa</Text>
                    <Text style={{ height: 200 }}>aaaa</Text>
                    <Text style={{ height: 200 }}>aaaa</Text>
                    <Text style={{ height: 200 }}>aaaa</Text>
                    <Text style={{ height: 200 }}>aaaa</Text>
                    <Text style={{ height: 200 }}>aaaa</Text>
                    <Text style={{ height: 200 }}>aaaaaaaxxa</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;