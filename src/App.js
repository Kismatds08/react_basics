import {NestedElements, Attribute, JSExpression, Styling} from './1. JSXElements'
import { ClassBasedComponent, FunctionalComponent } from './2. StatelessComponent'


function App() {
  return (
    <div>
      {/* JSX Elements */}

       {/* 1.1. Nested Elements */}
       <NestedElements />

       {/* 1.2. Attributes */}
       <Attribute />

       {/* 1.3. JS Expression */}
       <JSExpression />

      {/* 1.4. Styling */}
      <Styling />

      {/* 2. Components */}

        {/** 2.1. Functional Component */}
          <FunctionalComponent />
          
        {/** 2.2. Class Based Component */}
          <ClassBasedComponent />
    </div>
  );
}



export default App
