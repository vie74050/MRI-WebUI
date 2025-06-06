# MRI-WebUI Web application

## ABOUT

MRI-WebUI is an MRI workflow simulator designed for users to practice entering patient registration details, reviewing scheduling processes and practice the admin user-interface workflow tasks.
Below is a summary of the main features and improvements based on recent GitHub issues:

### Main Features

#### Fillable form based on Siemans MRI user interface

![image](https://github.com/user-attachments/assets/3d3a952c-9593-4289-a2f3-8887ab059870)

Special Form Features:  
- **Age** calculation based on **date of birth**
- Metric and US measurement unit conversion for weight and height
- **Body part** selected determines if **Laterality** is enabled & set to mandatory
- **Patient Orientation** selection with icons

#### Registration Options:  

![image](https://github.com/user-attachments/assets/e23976db-7890-4ab0-9152-34c8d6339576)  
- Only active for new registrations; inactive if user loads registered patient data from **Scheduler**.
- Ability to clear the form from **Delete Procedure**, with confirmation prompt before clearing
- Ability to **Register Patient**:
  - Validae **mandatory** fields are filed before registering patient
  - Adds `schedulerTableRowType` data to sceduler table data
  - Saves `FormDataType` to `__DATA__`
  - Re-Sorts the table by table index so the most recently added is last row

#### Scheduler table with sorting 

![image](https://github.com/user-attachments/assets/1e8ff3cb-63d1-482b-8fcf-bffa069c1966)

- Sort by row index (1-9) or Patient (A-Z) by toggling the first column header
- When scehduler row is clicked, load the patient registration info to the form
- Enable `save`, `cancel`, and `delete` options when saved data is loaded
  - Deactiviates **Registration Options** since the patient is already registered
  - **Save** : Upon confirmation prompt OK, saves the current form fields to `__DATA__` (overwrites existing) & updates scheduler table if associated fields are changed
  - **Cancel**: clears the form, re-enables new patient registration options
  - **Delete**: Upon confirmation prompt OK, deletes patient info from `__DATA__` and assocated scheduler row.

#### Test and QA

For testing, you can use **Prior Studies** to load randomly generated data for mandatory fields.
