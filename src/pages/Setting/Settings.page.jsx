import React from 'react';
import { BackgroundWithSpinner } from '../../components/WithSpinner/With-Spinner.component';
import SettingsContent from '../../components/SettingsContent/Settings-Content.component';

const WithSpinner = BackgroundWithSpinner(SettingsContent);

const Settings = () => {
    return <WithSpinner />
}

export default Settings;
