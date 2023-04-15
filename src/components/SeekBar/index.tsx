import React from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import TrackPlayer, { useProgress } from 'react-native-track-player';
import { isIOS } from '@/utils/fun';

const SeekBar = () => {
  const { position, duration } = useProgress();
    return (
      <MultiSlider
        values={[position || 0]}
        min={0}
        max={duration || 1}
        step={1}
        sliderLength={isIOS() ? 308 : 298}
        enabledOne={true}
        selectedStyle={{backgroundColor:'white'}}
        unselectedStyle={{backgroundColor:'#f3ebeb'}}
        markerStyle={{width:15,height:15,backgroundColor:'white'}}
        onValuesChangeFinish={val =>  TrackPlayer.seekTo(val[0])}
      />
    );
};


export default React.memo(SeekBar);
