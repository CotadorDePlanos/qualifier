import { BrowserRouter, Route } from 'react-router-dom';

import { FormStep1 } from './pages/FormStep1';
import { FormStep2 } from './pages/FormStep2';
import { FormStep3 } from './pages/FormStep3';
import { FormStep4 } from './pages/FormStep4';
import { FormStep5 } from './pages/FormStep5';
import { FormStep6 } from './pages/FormStep6';
import { FormStep7 } from './pages/FormStep7';
import { FormStep8 } from './pages/FormStep8';
import { FormStep9 } from './pages/FormStep9';
import { FormStep10 } from './pages/FormStep10';

export const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={FormStep1} />
            <Route path="/step2" component={FormStep2} />
            <Route path="/step3" component={FormStep3} />
            <Route path="/step4" component={FormStep4} />
            <Route path="/step5" component={FormStep5} />
            <Route path="/step6" component={FormStep6} />
            <Route path="/step7" component={FormStep7} />
            <Route path="/step8" component={FormStep8} />
            <Route path="/step9" component={FormStep9} />
            <Route path="/step10" component={FormStep10} />
        </BrowserRouter>
    );
}