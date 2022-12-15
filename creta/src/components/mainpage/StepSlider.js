import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function EnableStepsCheckbox({isSeeingSteps, setIsSeeingSteps, disabled}) {

    const onChange = (event, newValue) => {
        setIsSeeingSteps(newValue)
    }

    return (
        <Box paddingLeft={'1em'}>
            <FormGroup>
                <FormControlLabel control={<Checkbox/>} label="See steps" onChange={onChange} checked={isSeeingSteps} disabled={disabled}/>
            </FormGroup>
        </Box>

  );
}

export default function StepSlider({steps, sliderSelection, setSliderSelection, isSeeingSteps, setIsSeeingSteps, isSolved}) {

    const onChange = (event, newValue) => {
        setSliderSelection(newValue)
    }

    return (
        <Box display="flex" flexDirection="row" justifyContent="space-between" sx={{ width: '32em' }} >
            <Slider
            onChange={onChange}
            value={sliderSelection}
            defaultValue={sliderSelection}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={steps ? steps.length - 1 : 1}
            disabled={steps === null}
            />
            <EnableStepsCheckbox isSeeingSteps={isSeeingSteps} setIsSeeingSteps={setIsSeeingSteps} disabled={!isSolved}/>
        </Box>
    );
}
