/** @format */

import { Audio, Permissions, FileSystem } from "expo";
import axios from "axios";

const recordingOptions = {
	android: {
		extension: ".m4a",
		outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
		audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
		sampleRate: 44100,
		numberOfChannels: 1,
		bitRate: 128000,
	},
	ios: {
		extension: ".wav",
		audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
		sampleRate: 44100,
		numberOfChannels: 1,
		bitRate: 128000,
		linearPCMBitDepth: 16,
		linearPCMIsBigEndian: false,
		linearPCMIsFloat: false,
	},
};

startRecording = async () => {
	// request permissions to record audio
	const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
	// if the user doesn't allow us to do so - return as we can't do anything further :(
	if (status !== "granted") return;
	// when status is granted - setting up our state
	this.setState({ isRecording: true });

	// basic settings before we start recording,
	// you can read more about each of them in expo documentation on Audio
	await Audio.setAudioModeAsync({
		allowsRecordingIOS: true,
		interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
		playsInSilentModeIOS: true,
		interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
		playThroughEarpieceAndroid: true,
	});

	try {
		// here we pass our recording options
		await recording.prepareToRecordAsync(recordingOptions);
		// and finally start the record
		await recording.startAsync();
	} catch (error) {
		console.log(error);
		// we will take a closer look at stopRecording function further in this article
		this.stopRecording();
	}

	// if recording was successful we store the result in variable,
	// so we can refer to it from other functions of our component
	this.recording = recording;
};
