 Statistical Analysis of a Tuberculosis Patient Dataset

This repository contains a statistical analysis of a tuberculosis patient dataset, performed as a project for the course "Inferential Statistics & Predictive Analytics".



 Project Overview

This project presents a statistical analysis of the tuberculosis_xray_dataset.csv, a dataset containing demographic, symptomatic, and historical data for 20,000 patients. The primary objective of this study was to perform hypothesis testing to uncover significant statistical relationships related to the mean age of the patient cohort.



 Dataset

The dataset used for this analysis is tuberculosis_xray_dataset.csv. It is a clean, well-structured collection of 20,000 patient records with no missing values. The dataset includes the following features:

* Demographics: Age, Gender
* Clinical Symptoms: Chest Pain, Cough Severity, Breathlessness, Fatigue, Weight Loss, Fever, Night Sweats, Sputum Production, Blood in Sputum
* Medical History: Smoking History, Previous TB History
* Diagnosis: Class (Tuberculosis or Normal)



 Analysis and Key Findings

Three key statistical tests were conducted at a significance level (α) of 0.05: a one-sample t-test, an independent two-sample t-test, and a one-way Analysis of Variance (ANOVA).

The analysis yielded three principal findings:

* One-Sample T-Test: The mean age of the patient population (53.47 years) was found to be significantly different from a hypothesized reference value of 50 years (p < 0.001).
* Two-Sample T-Test: A statistically significant difference exists in the mean age between male and female patients (p=0.0115), with the mean age of males being slightly lower than that of females.
* One-Way ANOVA: There was no statistically significant difference in the mean age across different patient smoking history groups (Former, Current, Never) (p=0.4434).

These results suggest that while demographic factors such as gender are associated with age variation in this patient cohort, a behavioral factor like smoking history is not.



 Tools and Libraries

The analysis was performed using Python and the following libraries:

* pandas: For data manipulation and analysis.
* scipy.stats: For statistical testing.
* matplotlib & seaborn: For data visualization.



 Repository Contents

* Statistical Analysis of a Tuberculosis Patient Dataset.docx: A detailed report of the statistical analysis, including the abstract, introduction, methods, results, and conclusion.
* ISPA_Reg24.ipynb: The Jupyter Notebook containing the Python code for the entire analysis, from data loading and cleaning to statistical testing and visualization.
* tuberculosis_xray_dataset.csv: The dataset used for the analysis.



 How to Reproduce

To reproduce the analysis, you can run the ISPA_Reg24.ipynb Jupyter Notebook. Ensure you have the required libraries installed and the tuberculosis_xray_dataset.csv file in the same directory.



 Future Work

As a next step, it would be highly valuable to explore the relationships between the various symptom severity scores (Cough Severity, Fatigue, Weight Loss, etc.) and the diagnostic Class variable. Such an analysis could lead to the development of predictive models capable of classifying a patient's likelihood of having tuberculosis based on their reported symptoms and demographic profile.
