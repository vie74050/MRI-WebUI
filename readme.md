# MRI-WebUI Web application

## ABOUT

MRI-WebUI is an MRI workflow simulator designed for users to practice entering patient registration details, reviewing scheduling processes and practice the admin user-interface workflow tasks.
Below is a summary of the main features and improvements based on recent GitHub issues:

### Main Features

#### Patient registration workflow simulation  

- Fillable form based on Siemans MRI user interface
  - Patient orientation selection with visual thumbnails and icons
  - Age calculation based on date of birth
  - Metric and US measurement unit conversion

- Ability to clear the form from `Delete Procedure`, with confirmation prompt before clearing
- Validation that mandatory fields are filed before registering patient
- Ability to `Register Patient`:
  - Adds `schedulerTableRowType` data to sceduler table data
  - Saves `FormDataType` to `__DATA__`
  - Resorts the table by table index so the most recently added is last row

#### Scheduler table with sorting functionality

- Ability to load specfied registration data to `Patient Registration` when scehduler row is clicked
- Enable `save`, `cancel`, and `delete` options when saved data is loaded
  - Deactiviates registration options since the patient is already registered
  - `save` : Upon confirmation prompt OK, saves the current form fields to `__DATA__` (overwrites existing) & updates scheduler table if associated fields are changed
  - `cancel`: clears the form, re-enables new patient registration options
  - `delete`: Upon confirmation prompt OK, deletes patient info from `__DATA__` and assocated scheduler row.

#### Test and QA

For testing, you can use `Prior Studies` to load randomly generated data for mandatory fields.
