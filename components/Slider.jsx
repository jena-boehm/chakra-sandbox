import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Tooltip } from '@chakra-ui/react';
import React, { useState } from 'react';

export const Slider = () => {
  const [sliderValue, setSliderValue] = useState(25)

  return (
      <RangeSlider 
        w="250px" 
        defaultValue={[0, 100]} 
        onChange={(v) => setSliderValue(v)}
      >
          <RangeSliderTrack>
            <RangeSliderFilledTrack bg="red"/>
          </RangeSliderTrack>
          <Tooltip 
            hasArrow 
            label={sliderValue[0]}
            placement="top"
          >
            <RangeSliderThumb index={0} />
          </Tooltip>
          <Tooltip 
            hasArrow 
            label={sliderValue[1]}
            placement="top"
          >
            <RangeSliderThumb index={1} />
          </Tooltip>
      </RangeSlider>
  );
};
