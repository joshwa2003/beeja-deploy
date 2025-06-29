#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Helper function to recursively get all JSX/JS files
const getFiles = (dir, files = []) => {
  const entries = fs.readdirSync(dir);
  entries.forEach(entry => {
    const fullPath = path.join(dir, entry);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!entry.startsWith('.') && entry !== 'node_modules') {
        getFiles(fullPath, files);
      }
    } else if (entry.endsWith('.jsx') || entry.endsWith('.js')) {
      files.push(fullPath);
    }
  });
  return files;
};

// Fix unescaped entities
const fixUnescapedEntities = (content) => {
  return content
    .replace(/(\s)'(\w)/g, '$1&apos;$2')
    .replace(/(\w)'(\w)/g, '$1&apos;$2')
    .replace(/(\w)'s/g, '$1&apos;s')
    .replace(/(\s)"([^"]+)"/g, '$1"$2"')
    .replace(/'t(\s|$)/g, '&apos;t$1');
};

// Fix unused variables by prefixing with underscore
const fixUnusedVariables = (content) => {
  const unusedVarRegex = /warning\s+'(\w+)' is assigned a value but never used/g;
  let match;
  let fixedContent = content;
  while ((match = unusedVarRegex.exec(content)) !== null) {
    const varName = match[1];
    fixedContent = fixedContent.replace(
      new RegExp(`(const|let|var)\\s+${varName}\\s*=`, 'g'),
      `$1 _${varName} =`
    );
  }
  return fixedContent;
};

// Add PropTypes
const addPropTypes = (content, componentName) => {
  const propsRegex = /(\w+)\s*:\s*PropTypes\.(.*?),/g;
  const existingProps = new Set();
  let match;

  while ((match = propsRegex.exec(content)) !== null) {
    existingProps.add(match[1]);
  }

  // Extract props from function parameters
  const funcRegex = new RegExp(`function\\s+${componentName}\\s*\\(\\{([^}]+)\\}\\)`);
  const funcMatch = content.match(funcRegex);
  
  if (funcMatch) {
    const props = funcMatch[1].split(',').map(p => p.trim());
    const propTypes = props
      .filter(p => !existingProps.has(p))
      .map(p => `  ${p}: PropTypes.any,`)
      .join('\n');

    if (propTypes) {
      const propTypesBlock = `\n\n${componentName}.propTypes = {\n${propTypes}\n};\n`;
      return content.replace(/export default .*$/, `${propTypesBlock}\nexport default ${componentName};`);
    }
  }

  return content;
};

// Main function
const fixWarnings = async () => {
  const srcDir = path.join(process.cwd(), 'src');
  const files = getFiles(srcDir);

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    const componentName = path.basename(file, path.extname(file));

    // Add PropTypes import if needed
    if (!content.includes('import PropTypes')) {
      content = `import PropTypes from 'prop-types';\n${content}`;
    }

    // Fix unescaped entities
    content = fixUnescapedEntities(content);

    // Fix unused variables
    content = fixUnusedVariables(content);

    // Add PropTypes
    content = addPropTypes(content, componentName);

    fs.writeFileSync(file, content);
  }

  // Run ESLint fix
  try {
    execSync('npm run lint -- --fix', { stdio: 'inherit' });
  } catch (error) {
    console.error('Error running ESLint fix:', error);
  }
};

fixWarnings().catch(console.error);
