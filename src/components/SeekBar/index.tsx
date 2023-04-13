import MultiSlider from '@ptomasroos/react-native-multi-slider';
const SeekBar = () => {
    return (
      <MultiSlider
        sliderLength={308}
        selectedStyle={{backgroundColor:'white'}}
        unselectedStyle={{backgroundColor:'#f3ebeb'}}
        markerStyle={{width:15,height:15}}
      />
    );
};


export default SeekBar;
