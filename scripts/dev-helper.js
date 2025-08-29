#!/usr/bin/env node

/**
 * 🔧 Development Helper Script
 * Provides advanced development utilities and project analysis
 */

import { execSync } from 'child_process';
import { existsSync, readdirSync, readFileSync, statSync } from 'fs';
import path from 'path';

const commands = {
  analyze: () => analyzeProject(),
  deps: () => analyzeDependencies(),
  size: () => analyzeBundleSize(),
  health: () => checkProjectHealth(),
  help: () => showHelp(),
};

function execCommand(command, options = {}) {
  try {
    return execSync(command, {
      encoding: 'utf8',
      stdio: 'pipe',
      ...options,
    }).trim();
  } catch (err) {
    return err.stdout ? err.stdout.trim() : '';
  }
}

function countFiles(dir, extension) {
  try {
    function countFilesRecursive(directory) {
      let count = 0;
      if (!existsSync(directory)) return count;

      const items = readdirSync(directory);

      for (const item of items) {
        const fullPath = path.join(directory, item);
        const stat = statSync(fullPath);

        if (stat.isDirectory()) {
          count += countFilesRecursive(fullPath);
        } else if (stat.isFile() && item.endsWith(`.${extension}`)) {
          count++;
        }
      }

      return count;
    }

    return countFilesRecursive(dir).toString();
  } catch {
    return '0';
  }
}

function analyzeProject() {
  // eslint-disable-next-line no-console
  console.log('🔍 Analyzing project...\n');

  // File counts using Windows-compatible commands
  const astroFiles = countFiles('src', 'astro');
  const tsFiles = countFiles('src', 'ts');
  const jsFiles = countFiles('src', 'js');
  const componentFiles = countFiles('src/components', 'astro');

  // eslint-disable-next-line no-console
  console.log('📊 Project Statistics:');
  // eslint-disable-next-line no-console
  console.log(`   Astro files: ${astroFiles}`);
  // eslint-disable-next-line no-console
  console.log(`   TypeScript files: ${tsFiles}`);
  // eslint-disable-next-line no-console
  console.log(`   JavaScript files: ${jsFiles}`);
  // eslint-disable-next-line no-console
  console.log(`   Components: ${componentFiles}`);

  // Git status
  try {
    const branch = execCommand('git branch --show-current');
    const status = execCommand('git status --porcelain');
    const commits = execCommand('git rev-list --count HEAD');

    // eslint-disable-next-line no-console
    console.log('\n📝 Git Status:');
    // eslint-disable-next-line no-console
    console.log(`   Current branch: ${branch}`);
    // eslint-disable-next-line no-console
    console.log(`   Total commits: ${commits}`);
    // eslint-disable-next-line no-console
    console.log(
      `   Uncommitted changes: ${status ? status.split('\n').length : 0}`
    );
  } catch {
    // eslint-disable-next-line no-console
    console.log('\n📝 Git Status: Not a git repository');
  }

  // Package info
  try {
    const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
    // eslint-disable-next-line no-console
    console.log('\n📦 Package Info:');
    // eslint-disable-next-line no-console
    console.log(`   Name: ${pkg.name}`);
    // eslint-disable-next-line no-console
    console.log(`   Version: ${pkg.version}`);
    // eslint-disable-next-line no-console
    console.log(
      `   Dependencies: ${Object.keys(pkg.dependencies || {}).length}`
    );
    // eslint-disable-next-line no-console
    console.log(
      `   Dev Dependencies: ${Object.keys(pkg.devDependencies || {}).length}`
    );
  } catch {
    // eslint-disable-next-line no-console
    console.log('\n📦 Package Info: Error reading package.json');
  }
}

function analyzeDependencies() {
  // eslint-disable-next-line no-console
  console.log('📦 Analyzing dependencies...\n');

  try {
    // eslint-disable-next-line no-console
    console.log('🔍 Checking for outdated packages:');
    const outdated = execCommand('npm outdated --json');

    if (outdated) {
      const outdatedPkgs = JSON.parse(outdated);
      const count = Object.keys(outdatedPkgs).length;
      // eslint-disable-next-line no-console
      console.log(`   Found ${count} outdated packages:`);

      Object.entries(outdatedPkgs).forEach(([name, info]) => {
        // eslint-disable-next-line no-console
        console.log(`   - ${name}: ${info.current} → ${info.latest}`);
      });
    } else {
      // eslint-disable-next-line no-console
      console.log('   ✅ All packages are up to date');
    }
  } catch {
    // eslint-disable-next-line no-console
    console.log('   ℹ️  Unable to check outdated packages');
  }

  try {
    // eslint-disable-next-line no-console
    console.log('\n🔒 Security audit:');
    const audit = execCommand('npm audit --json');

    if (audit) {
      const auditData = JSON.parse(audit);
      if (auditData.metadata && auditData.metadata.vulnerabilities) {
        const vulns = auditData.metadata.vulnerabilities;
        const total =
          vulns.info + vulns.low + vulns.moderate + vulns.high + vulns.critical;

        if (total > 0) {
          // eslint-disable-next-line no-console
          console.log(`   ⚠️  Found ${total} vulnerabilities:`);
          // eslint-disable-next-line no-console
          console.log(`   - Critical: ${vulns.critical}`);
          // eslint-disable-next-line no-console
          console.log(`   - High: ${vulns.high}`);
          // eslint-disable-next-line no-console
          console.log(`   - Moderate: ${vulns.moderate}`);
          // eslint-disable-next-line no-console
          console.log(`   - Low: ${vulns.low}`);
          // eslint-disable-next-line no-console
          console.log(`   - Info: ${vulns.info}`);
        } else {
          // eslint-disable-next-line no-console
          console.log('   ✅ No known vulnerabilities');
        }
      }
    }
  } catch {
    // eslint-disable-next-line no-console
    console.log('   ℹ️  Unable to run security audit');
  }
}

function analyzeBundleSize() {
  // eslint-disable-next-line no-console
  console.log('📏 Analyzing bundle size...\n');

  if (!existsSync('dist')) {
    // eslint-disable-next-line no-console
    console.log('⚠️  No build found. Run "npm run build" first.');
    return;
  }

  try {
    function getDirSize(dir) {
      let size = 0;
      const items = readdirSync(dir);

      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = statSync(fullPath);

        if (stat.isDirectory()) {
          size += getDirSize(fullPath);
        } else {
          size += stat.size;
        }
      }

      return size;
    }

    const totalSize = getDirSize('dist');
    const sizeMB = (totalSize / (1024 * 1024)).toFixed(2);
    const sizeKB = (totalSize / 1024).toFixed(0);

    // eslint-disable-next-line no-console
    console.log(`📦 Total build size: ${sizeMB} MB (${sizeKB} KB)`);

    // Get largest files
    function getLargestFiles(dir, files = []) {
      const items = readdirSync(dir);

      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = statSync(fullPath);

        if (stat.isDirectory()) {
          getLargestFiles(fullPath, files);
        } else {
          files.push({
            name: fullPath.replace('dist/', '').replace('dist\\', ''),
            size: stat.size,
            sizeKB: (stat.size / 1024).toFixed(1),
          });
        }
      }

      return files;
    }

    const files = getLargestFiles('dist')
      .sort((a, b) => b.size - a.size)
      .slice(0, 10);

    if (files.length > 0) {
      // eslint-disable-next-line no-console
      console.log('\n🔍 Top 10 largest files:');
      files.forEach((file, index) => {
        // eslint-disable-next-line no-console
        console.log(`   ${index + 1}. ${file.name} (${file.sizeKB} KB)`);
      });
    }
  } catch {
    // eslint-disable-next-line no-console
    console.log('   ℹ️  Unable to analyze bundle size');
  }
}

function checkProjectHealth() {
  // eslint-disable-next-line no-console
  console.log('🏥 Checking project health...\n');

  const checks = [
    {
      name: 'TypeScript Check',
      command: 'npm run type-check',
      critical: true,
    },
    {
      name: 'ESLint Check',
      command: 'npm run lint:eslint',
      critical: true,
    },
    {
      name: 'Prettier Check',
      command: 'npm run format:check',
      critical: false,
    },
    {
      name: 'Build Test',
      command: 'npm run build',
      critical: true,
    },
  ];

  let passed = 0;
  let critical = 0;

  checks.forEach(check => {
    process.stdout.write(`   ${check.name}... `);

    try {
      execCommand(check.command);
      // eslint-disable-next-line no-console
      console.log('✅ PASS');
      passed++;
    } catch {
      // eslint-disable-next-line no-console
      console.log('❌ FAIL');
      if (check.critical) critical++;
    }
  });

  // eslint-disable-next-line no-console
  console.log(`\n📊 Health Summary:`);
  // eslint-disable-next-line no-console
  console.log(`   Passed: ${passed}/${checks.length}`);
  // eslint-disable-next-line no-console
  console.log(`   Critical failures: ${critical}`);

  if (critical > 0) {
    // eslint-disable-next-line no-console
    console.log('   🚨 Action required: Fix critical issues before deployment');
  } else if (passed === checks.length) {
    // eslint-disable-next-line no-console
    console.log('   ✅ Project is healthy and ready for deployment');
  } else {
    // eslint-disable-next-line no-console
    console.log('   ⚠️  Some non-critical issues found');
  }
}

function showHelp() {
  // eslint-disable-next-line no-console
  console.log('🔧 Development Helper Script\n');
  // eslint-disable-next-line no-console
  console.log('Available commands:');
  // eslint-disable-next-line no-console
  console.log('   analyze  - Analyze project structure and statistics');
  // eslint-disable-next-line no-console
  console.log('   deps     - Check dependencies and security');
  // eslint-disable-next-line no-console
  console.log('   size     - Analyze bundle size and largest files');
  // eslint-disable-next-line no-console
  console.log('   health   - Run comprehensive project health check');
  // eslint-disable-next-line no-console
  console.log('   help     - Show this help message');
  // eslint-disable-next-line no-console
  console.log('\nUsage:');
  // eslint-disable-next-line no-console
  console.log('   npm run dev:analyze');
  // eslint-disable-next-line no-console
  console.log('   npm run dev:deps');
  // eslint-disable-next-line no-console
  console.log('   npm run dev:size');
  // eslint-disable-next-line no-console
  console.log('   npm run dev:health');
}

// Parse command line arguments
const command = process.argv[2] || 'help';

if (commands[command]) {
  commands[command]();
} else {
  // eslint-disable-next-line no-console
  console.log(`❌ Unknown command: ${command}`);
  showHelp();
}
