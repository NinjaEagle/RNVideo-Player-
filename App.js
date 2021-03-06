import React, { useState, useRef } from "react";
import { View, StyleSheet, SafeAreaView, Dimensions, Text } from "react-native";
import { Video } from "expo-av";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
	const video = useRef(null);
	const [mute, setMute] = useState(false);
	const [shouldPlay, setShouldPlay] = useState(true);
	const [status, setStatus] = useState({});
	const { width } = Dimensions.get("window");

	// console.log(status.isMuted, "status mute", "status play", status.isPlaying);

	const handlePlayAndPause = () => {
		setShouldPlay(!shouldPlay);
	};

	const handleVolume = () => {
		setMute(!mute);
	};

	return (
		<SafeAreaView style={styles.safearea}>
			<View style={styles.container}>
				<Text style={{ textAlign: "center" }}> TED React Native Video Player </Text>
				<Video
					ref={video}
					style={{
						width,
						height: 200,
					}}
					source={{
						uri: "https://hls.ted.com/project_masters/3875/manifest.m3u8",
					}}
					useNativeControls={true}
					resizeMode='contain'
					isLooping={false}
					shouldPlay={shouldPlay}
					isMuted={mute}
					onPlaybackStatusUpdate={(status) => setStatus(() => status)}
				/>
			</View>
			<View style={styles.controlBar}>
				<MaterialIcons
					name={status.isMuted ? "volume-mute" : "volume-up"}
					size={45}
					color='white'
					onPress={handleVolume}
				/>
				<MaterialIcons
					name={status.isPlaying ? "pause" : "play-arrow"}
					size={45}
					color='white'
					onPress={handlePlayAndPause}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safearea: {
		flex: 1,
		backgroundColor: "black",
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fafafa",
	},
	controlBar: {
		height: 50,
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
});
