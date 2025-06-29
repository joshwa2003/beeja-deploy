#!/usr/bin/env node

/**
 * ESLint Status Checker
 * Shows current linting status and provides actionable next steps
 */

import { execSync } from 'child_process';

function runCommand(command) {
  try {
    return execSync(command, { encoding: 'utf8', cwd: process.cwd() });
  } catch (error) {
    return error.stdout || error.message;
  }
}

function analyzeLintOutput() {
  console.log('🔍 Analyzing ESLint Status...\n');
  
  const lintOutput = runCommand('npm run lint 2>&1');
  
  // Extract error and warning counts
  const errorMatch = lintOutput.match(/(\d+) errors?/);
  const warningMatch = lintOutput.match(/(\d+) warnings?/);
  const fixableMatch = lintOutput.match(/(\d+) errors? and \d+ warnings? potentially fixable/);
  
  const errors = errorMatch ? parseInt(errorMatch[1]) : 0;
  const warnings = warningMatch ? parseInt(warningMatch[1]) : 0;
  const fixable = fixableMatch ? parseInt(fixableMatch[1]) : 0;
  
  console.log('📊 Current Status:');
  console.log(`   ❌ Errors: ${errors}`);
  console.log(`   ⚠️  Warnings: ${warnings}`);
  console.log(`   🔧 Auto-fixable: ${fixable}`);
  console.log(`   📝 Total Issues: ${errors + warnings}\n`);
  
  // Progress calculation
  const totalIssues = errors + warnings;
  const targetIssues = 50; // Goal
  const progress = Math.max(0, Math.min(100, ((906 - totalIssues) / (906 - targetIssues)) * 100));
  
  console.log('📈 Progress:');
  console.log(`   🎯 Target: Under ${targetIssues} warnings`);
  console.log(`   📊 Progress: ${progress.toFixed(1)}%`);
  console.log(`   🚀 Remaining: ${Math.max(0, totalIssues - targetIssues)} issues to fix\n`);
  
  return { errors, warnings, fixable, totalIssues };
}

function showNextSteps(stats) {
  console.log('🎯 Recommended Next Steps:\n');
  
  if (stats.fixable > 0) {
    console.log('1. 🔧 Auto-fix issues:');
    console.log('   npm run lint:fix\n');
  }
  
  if (stats.errors > 0) {
    console.log('2. ❌ Fix critical errors first:');
    console.log('   - React Hooks rules violations');
    console.log('   - Unused import removals');
    console.log('   - Syntax errors\n');
  }
  
  if (stats.warnings > 500) {
    console.log('3. ⚠️  Add PropTypes to reduce warnings:');
    console.log('   npm run generate-proptypes');
    console.log('   Then manually add PropTypes to key components\n');
  }
  
  console.log('4. 📝 Focus on these component types:');
  console.log('   - Modal components (high priority)');
  console.log('   - Card components');
  console.log('   - Form components');
  console.log('   - Dashboard components\n');
  
  console.log('5. 🔄 Monitor progress:');
  console.log('   node scripts/eslint-status.js\n');
}

function showQuickWins() {
  console.log('⚡ Quick Wins (Easy fixes):');
  console.log('   - Remove unused React imports');
  console.log('   - Add PropTypes.func.isRequired for callbacks');
  console.log('   - Add PropTypes.object for data props');
  console.log('   - Add PropTypes.bool for boolean flags');
  console.log('   - Prefix unused variables with underscore (_)\n');
}

function main() {
  console.log('🛠  ESLint Status Report');
  console.log('========================\n');
  
  const stats = analyzeLintOutput();
  showNextSteps(stats);
  showQuickWins();
  
  console.log('📚 Documentation:');
  console.log('   See frontend/ESLINT_FIXES.md for detailed guide');
  console.log('   Run npm run generate-proptypes for PropTypes templates\n');
  
  if (stats.totalIssues < 100) {
    console.log('🎉 Great progress! You\'re close to the target!');
  } else if (stats.totalIssues < 300) {
    console.log('👍 Good progress! Keep going!');
  } else {
    console.log('💪 Let\'s tackle these issues step by step!');
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { analyzeLintOutput };
