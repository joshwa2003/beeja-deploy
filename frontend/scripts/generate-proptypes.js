#!/usr/bin/env node

/**
 * PropTypes Generator Script
 * This script helps generate PropTypes definitions for React components
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Key components that need PropTypes
const keyComponents = [
  'src/components/core/Dashboard/PurchaseHistory/OrderInvoiceModal.jsx',
  'src/components/core/ViewCourse/CourseReviewModal.jsx',
  'src/pages/Admin/components/QuizCreator.jsx',
  'src/components/common/ConfirmationModal.jsx',
  'src/components/common/CouponDetailsModal.jsx',
  'src/components/core/Catalog/CourseCard.jsx',
  'src/components/core/Course/CourseDetailsCard.jsx',
  'src/components/core/Certificate/CertificateModal.jsx'
];

function generatePropTypesForComponent(filePath) {
  try {
    const fullPath = path.join(__dirname, '..', filePath);
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Extract component name from file path
    const componentName = path.basename(filePath, '.jsx');
    
    // Basic PropTypes template based on common patterns
    const propTypesTemplate = `
import PropTypes from 'prop-types';

// Add this at the end of your ${componentName} component file:

${componentName}.propTypes = {
  // Add your prop definitions here based on the component's props
  // Example:
  // data: PropTypes.object.isRequired,
  // onClose: PropTypes.func.isRequired,
  // isOpen: PropTypes.bool,
  // children: PropTypes.node,
};

${componentName}.defaultProps = {
  // Add default props if needed
};
`;

    console.log(`\n=== PropTypes for ${componentName} ===`);
    console.log(propTypesTemplate);
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function main() {
  console.log('🔧 PropTypes Generator for Key Components\n');
  console.log('This script provides PropTypes templates for your key components.');
  console.log('You\'ll need to manually add the specific prop types based on your component\'s actual props.\n');
  
  keyComponents.forEach(generatePropTypesForComponent);
  
  console.log('\n📝 Instructions:');
  console.log('1. Copy the PropTypes definitions above');
  console.log('2. Add them to the respective component files');
  console.log('3. Import PropTypes at the top: import PropTypes from \'prop-types\';');
  console.log('4. Customize the prop definitions based on your component\'s actual props');
  console.log('5. Run npm run lint to check for remaining issues');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { generatePropTypesForComponent };
