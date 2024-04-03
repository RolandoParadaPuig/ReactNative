import React from 'react';
// import { 
  // BasicFunctions, 
  // BasicTypes, 
  // ObjectLiteral 
// } from './typescript';
import { 
  // Counter, 
  // CounterWithHooks, 
  // LogingPage,
  // UsersPage,
  FormsPages,
} from './components';
const App: React.FC = () => {
  return (
    <main>
      <h1>React-TS Introduction</h1>
      {/* <BasicTypes/> */}
      {/* <ObjectLiteral/> */}
      {/* <BasicFunctions/> */}
      {/* <Counter/> */}
      {/* <CounterWithHooks/> */}
      {/* <LogingPage /> */}
      {/* <UsersPage /> */}
      <FormsPages />
    </main>
  );
};

export default App;