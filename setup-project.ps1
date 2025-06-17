# project/setup-project.ps1
$projectDir = "."

$dirs = @(
    "src/assets/images",
    "src/components/estimate",
    "src/composables/estimate",
    "src/data/materials",
    "src/types",
    "src/views"
)

$files = @(
    "src/assets/images/logo.png",
    "src/components/estimate/EstimateRow.vue",
    "src/components/estimate/EstimateRow.css",
    "src/components/estimate/EstimateSheet.vue",
    "src/composables/estimate/useEstimateRow.ts",
    "src/composables/estimate/useFittingCalculator.ts",
    "src/composables/estimate/usePipeCalculator.ts",
    "src/composables/estimate/index.ts",
    "src/composables/useMaterialData.ts",
    "src/data/materials/pipes.json",
    "src/data/materials/fittings.json",
    "src/data/materials/valves.json",
    "src/data/materials/steels.json",
    "src/data/materials/categories.json",
    "src/types/estimate.ts",
    "src/types/materials.ts",
    "src/types/index.ts",
    "src/views/EstimationView.vue",
    "src/App.vue",
    "src/main.ts",
    "src/style.css",
    "src/vite-env.d.ts",
    "README.md",
    ".eslintrc.cjs",
    ".prettierrc",
    "tsconfig.json",
    "tsconfig.node.json",
    "vite.config.ts"
)

# Create directories
foreach ($dir in $dirs) {
    New-Item -ItemType Directory -Path "$projectDir/$dir" -Force
}

# Create files
foreach ($file in $files) {
    New-Item -ItemType File -Path "$projectDir/$file" -Force
}

# Initialize Vite project
Set-Location $projectDir
npm create vite@latest . -- --template vue-ts --force
npm install
npm install vue-router@4
npm install -D prettier eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin vue-eslint-parser gh-pages

# Initialize Git
git init
git add .
git commit -m "Initial commit: Set up Vue.js project with TypeScript"

# Create GitHub repository
gh repo create estimation-app --public --source=. --remote=origin
git push -u origin main

# Build and deploy
npm run build
npm run deploy

Write-Host "Project setup completed."