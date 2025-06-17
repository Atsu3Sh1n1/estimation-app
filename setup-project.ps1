# project/setup.ps1
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
    "README.md"
)

# ディレクトリ作成
foreach ($dir in $dirs) {
    New-Item -ItemType Directory -Path $dir -Force
}

# 空ファイル作成
foreach ($file in $files) {
    New-Item -ItemType File -Path $file -Force
}

Write-Host "ディレクトリとファイルを作成しました。"