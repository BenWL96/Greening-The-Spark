import React, {render, screen} from '@testing-library/react';
import MainScene from '../mainScene/mainScene';
import '@testing-library/jest-dom/extend-expect';
import ReactThreeTestRenderer from '@react-three/test-renderer'


test('Render Main Scene', async () => {
    const renderer = await ReactThreeTestRenderer.create(<MainScene />);
    //console.log(renderer);
})
