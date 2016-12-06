import defaultExports from './modules/index';
import letKeword from './newSyntax/let';
import constKeword from './newSyntax/const';
import templateLiteral from './newSyntax/template-literal';
import spreadOperator from './newSyntax/spread';
import arrowFuncions from './newSyntax/arrow';
import enhancedObjectProperties from './newSyntax/enhanced';
import destructingAssignment from './newSyntax/destructing';
import defaultParameters from './newSyntax/defaultParameters';
import * as lib from './modules/sort';
import { log, logTitle } from './windowLogger';

// defaultExports();
// letKeword();
// constKeword();
// templateLiteral();
// spreadOperator();
// arrowFuncions();
// enhancedObjectProperties();
// destructingAssignment();
defaultParameters();

let numbers = [5, 6, 9, 1, 45, 89, 7, 5, 9, 1, 2, 3, 4, 8, 6, 2];

log(numbers);

lib.selectSort(numbers);

log(numbers);


