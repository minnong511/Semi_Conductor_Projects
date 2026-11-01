# 반도체 AX 포트폴리오

- **프로젝트 1 — 공정 데이터 분석** (`project1_process_analysis`): 데이터 전처리, 상관관계 분석, Split 실험 및 회귀분석을 통한 증착 두께·산포 최적화.
- **프로젝트 2 — Recipe 최적화** (`project2_recipe_optimization`): 다중회귀 및 최적화 알고리즘으로 목표 두께·Uniformity·공정능력을 고려한 Recipe 도출과 데이터 한계·부작용 관리 방안 설계.
- **프로젝트 3 — Virtual Metrology 및 이상감지** (`project3_virtual_metrology`): 주요 변수 선정, 분류·회귀 모델 평가 및 튜닝을 통한 가상 계측·공정 이상감지 시스템 구축.

## 데이터셋

원본 데이터는 `datasets/`에 저장하며, 두 프로젝트 이상에서 공통으로 사용합니다.

### PVD AlCu 공정·두께 데이터

- 출처: [Zenodo — Advanced Process Control and Statistical Process Control Data for Thickness Prediction of AlCu and WTi Metal Layer](https://zenodo.org/records/16881338), Mević, Laber, Krivić (2025), DOI: [10.5281/zenodo.16881338](https://doi.org/10.5281/zenodo.16881338). 사용 시 원본 페이지의 인용 및 이용 조건을 확인합니다.
- 파일: `datasets/pvd_alcu/X_pvd_AlCu.csv`, `datasets/pvd_alcu/Y_pvd_AlCu.csv`.
- 내용: 실제 AlCu 물리기상증착(PVD) 공정의 센서 집계값과 웨이퍼 17개 지점의 두께 측정값. X와 Y의 대응 관계는 원본 데이터를 확인하여 사용합니다.
- 활용 계획: 프로젝트 1의 전처리·두께 및 산포 분석, 프로젝트 2의 다중회귀와 최적화, 프로젝트 3의 두께 예측 및 Virtual Metrology 회귀에 사용합니다.
- 한계: 센서 열 이름이 익명화되어 있고 센서 측정값이 제어 가능한 Recipe 설정값과 반드시 같지는 않습니다. 계획된 Split 실험 여부와 조건을 확인하지 않은 상태에서는 인과관계나 실제 적용 가능한 최적 Recipe를 주장할 수 없습니다. 목표 두께와 규격을 가정한다면 명시하고, 균일도 정의와 공정능력의 산정 조건도 함께 제시합니다.

### SECOM 반도체 공정 데이터

- 출처: [UCI Machine Learning Repository — SECOM](https://archive.ics.uci.edu/dataset/179/secom), McCann & Johnston (2008), DOI: [10.24432/C54305](https://doi.org/10.24432/C54305), CC BY 4.0.
- 파일: `datasets/secom/secom.data` (센서 특성), `datasets/secom/secom_labels.data` (판정 및 시각), `datasets/secom/secom.names` (설명).
- 내용: 1,567개 샘플, 591개 특성과 결측값을 포함하며, 라벨은 합격(-1) 또는 불합격(1)입니다.
- 활용 계획: 프로젝트 3의 변수 선택과 공정 이상 분류 모델 평가에 사용하고, PVD 데이터의 두께 회귀 결과와 함께 살펴봅니다.
- 한계: 불합격 샘플이 적어 클래스 불균형을 고려해야 하며, 연속적인 두께 실측값은 제공하지 않으므로 두께 VM의 정답 데이터로 사용하지 않습니다.

`datasets/`는 `.gitignore`에 포함되어 있어 다운로드한 원본 파일은 Git에 자동으로 추적되지 않습니다.

## 프로젝트별 도메인 학습 자료

반도체 공정의 기초부터 각 프로젝트에 필요한 개념을 살펴보는 HTML 자료입니다. 파일을 브라우저에서 열면 회전 가능한 3D 개념 모델과 조작 가능한 예시를 볼 수 있습니다. 모델의 형태와 가상 수치는 실제 장비나 분석 결과가 아니며 이해를 돕기 위한 것입니다. 3D 장면은 함께 저장된 Three.js 0.160.1을 사용합니다([라이선스](assets/three/LICENSE)). WebGL을 지원하는 브라우저가 필요합니다.

1. [프로젝트 1 — 증착 공정과 데이터 이해](project1_process_analysis/02_도메인_학습.html): 웨이퍼, PVD, 두께와 산포, 상관관계 및 Split 실험.
2. [프로젝트 2 — Recipe 최적화](project2_recipe_optimization/02_도메인_학습.html): 목표 두께와 균일도, 최적화의 절충, Cp·Cpk와 검증 실험.
3. [프로젝트 3 — Virtual Metrology 및 이상탐지](project3_virtual_metrology/02_도메인_학습.html): 두께 회귀와 불량 분류, 모델 평가 및 데이터 누출.
