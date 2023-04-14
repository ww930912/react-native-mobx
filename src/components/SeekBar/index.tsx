import React from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import TrackPlayer, { useProgress } from 'react-native-track-player';

const SeekBar = () => {
  const { position, duration } = useProgress();
    return (
      <MultiSlider
        values={[position || 0]}
        min={0}
        max={duration || 1}
        step={1}
        sliderLength={308}
        enabledOne={true}
        selectedStyle={{backgroundColor:'white'}}
        unselectedStyle={{backgroundColor:'#f3ebeb'}}
        markerStyle={{width:15,height:15}}
        onValuesChangeFinish={val =>  TrackPlayer.seekTo(val[0])}
      />
    );
};


export default React.memo(SeekBar);
