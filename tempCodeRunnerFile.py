from pulp import LpProblem, LpVariable, lpSum, LpMinimize

# Sample Data
employees = {
    "E1": "Cashier",
    "E2": "Inventory Manager",
    "E3": "Customer Help",
    "E4": "Cleaning Staff"
}

shifts = {
    "Shift1": {"Designation": "Cashier", "WorkHours": 8, "EmployeesRequired": 2},
    "Shift2": {"Designation": "Inventory Manager", "WorkHours": 8, "EmployeesRequired": 1},
    "Shift3": {"Designation": "Customer Help", "WorkHours": 8, "EmployeesRequired": 2},
    "Shift4": {"Designation": "Cleaning Staff", "WorkHours": 8, "EmployeesRequired": 1}
}

max_hours = {"E1": 36, "E2": 28, "E3": 42, "E4": 21}

# Initialize the optimization model
model = LpProblem("Shift_Allocation_with_Designation_Match", LpMinimize)

# Decision Variables: x[(employee, shift)] is 1 if the employee is assigned to the shift
x = LpVariable.dicts("ShiftAssignment", [(e, s) for e in employees for s in shifts], cat="Binary")
print("Decision Variables:", x.keys())
print("Employee Keys:", employees.keys())
print("Shift Keys:", shifts.keys())