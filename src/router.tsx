import { BrowserRouter, Route } from 'react-router-dom';

import { FormStep1 } from './pages/qualifier/FormStep1';
import { FormStep2 } from './pages/qualifier/FormStep2';
import { FormStep3 } from './pages/qualifier/FormStep3';
import { FormStep4 } from './pages/qualifier/FormStep4';
import { FormStep5 } from './pages/qualifier/FormStep5';
import { FormStep6 } from './pages/qualifier/FormStep6';
import { FormStep7 } from './pages/qualifier/FormStep7';
import { FormStep8 } from './pages/qualifier/FormStep8';
import { FormStep9 } from './pages/qualifier/FormStep9';
import { FormStep10 } from './pages/qualifier/FormStep10';

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