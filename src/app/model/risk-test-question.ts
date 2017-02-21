import {RiskTestAnswer} from './risk-test-answer';

export interface RiskTestQuestion {
    question: string;
    answerOptions: RiskTestAnswer[];
    selected: string;
}
