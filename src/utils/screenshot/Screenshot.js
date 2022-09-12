import {captureScreen} from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library';

const Screenshot = async () => {
    const uri = await captureScreen({
        format: "jpg",
        quality: 0.8
    });
    const asset = await MediaLibrary.createAssetAsync(uri);
    await MediaLibrary.createAlbumAsync('BMI', asset, false);
}

export default Screenshot;


