import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import PauseDarkSvg from '../../../assets/images/pause_dark.svg';
import PauseGreenSvg from '../../../assets/images/pause_green.svg';
import PloygonDarkSvg from '../../../assets/images/ploygon_dark.svg';
import PloygonGreenSvg from '../../../assets/images/ploygon_green.svg';
import ChatVoiceGreenPng from '../../../assets/images_png/chat_voice_green.png';
import ChatVoiceDarkPng from '../../../assets/images_png/chat_voice_dark.png';

import * as colors from '../../../config/colors';

const ChatMessage = ({item, style, contentContainerStyle, textStyle, recordingContainerStyle, buttonStyle}) => {
    const [pause, setPause] = useState(true);
    const user = item?.user;
    const image = item?.image;
    const message = item?.message;
    const recording = item?.recording;

    const handleChangePause = () => {
        setPause(!pause);
    };

    return (
        <View style={[styles.container, style]}>
            {user === 'you' && (
                <View style={styles.imageContainer}>
                    {image && <Image source={image} />}
                </View>
            )}
            {message && (
                <View style={[styles.contentContainer, contentContainerStyle]}>
                    <Text style={[styles.text, textStyle]}>{item.message}</Text>
                </View>
            )}
            {recording && (
                <View style={[styles.recordingContainer, recordingContainerStyle]}>
                    {user === 'me' && <Image source={ChatVoiceGreenPng} />}
                    <TouchableOpacity onPress={handleChangePause} style={[styles.button, buttonStyle]}>
                        {pause ?
                            user === 'me' ?
                                <PloygonGreenSvg /> : <PloygonDarkSvg />
                            :
                            user === 'me' ?
                                <PauseGreenSvg /> : <PauseDarkSvg />
                        }
                    </TouchableOpacity>
                    {user === 'you' && <Image source={ChatVoiceDarkPng} />}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
    borderRadius: 8,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 50 * 2,
    backgroundColor: colors.background_two,
  },
  contentContainer: {
    height: 40,
    justifyContent:'center',
    paddingHorizontal: 20,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    backgroundColor: '#E4E4E4D4',
  },
  recordingContainer: {
      height: 42,
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 6,
      paddingLeft: 7,
      paddingRight: 24,
      borderRadius: 20,
      borderBottomLeftRadius: 0,
      backgroundColor: '#E4E4E4D4',
    },
    button: {
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 32 * 2,
        backgroundColor: colors.white,
    },
    text: {
      fontSize: 16,
      fontFamily: 'Lato-Regular',
      color: '#383737',
    },
});

export default ChatMessage;
