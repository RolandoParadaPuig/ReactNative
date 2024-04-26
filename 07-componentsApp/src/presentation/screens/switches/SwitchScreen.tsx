/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {CustomView} from '../../components/ui/CustomView';
import {Card} from '../../components/ui/Card';
import {CustomSwitch} from '../../components/ui/CustomSwitch';
import {Separator} from '../../components/ui/Separator';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: false,
    isHungry: true,
    isHappy: false,
  });
  return (
    <CustomView style={{paddingTop: 100, paddingHorizontal: 20}}>
      <Card>
        <CustomSwitch
          isOn={state.isActive}
          onChange={value =>
            setState(stateVal => ({...stateVal, isActive: value}))
          }
          text="is Active"
        />
        <Separator />
        <CustomSwitch
          isOn={state.isHungry}
          onChange={value =>
            setState(stateVal => ({...stateVal, isHungry: value}))
          }
          text="is Hungry"
        />
        <Separator />
        <CustomSwitch
          isOn={state.isHappy}
          onChange={value =>
            setState(stateVal => ({...stateVal, isHappy: value}))
          }
          text="is Happy"
        />
      </Card>
    </CustomView>
  );
};
