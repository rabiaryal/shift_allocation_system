from pulp import LpProblem, LpVariable, lpSum, LpMinimize

# Sample Data
employees = {
    "E1": "Cashier",
    "E2": "Inventory Manager",
    "E3": "Customer Help",
    "E4": "Cleaning Staff",
    "E5": "Cashier",
    "E6": "Cashier",
    "E7": "Cashier",
    "E8": "Cashier",
    "E9": "Cashier",
}

shifts = {
    "Shift1": {"Designation": "Cashier", "WorkHours": 8, "EmployeesRequired": 10},
    "Shift2": {"Designation": "Inventory Manager", "WorkHours": 8, "EmployeesRequired": 19},
    "Shift3": {"Designation": "Customer Help", "WorkHours": 8, "EmployeesRequired": 22},
    "Shift4": {"Designation": "Cleaning Staff", "WorkHours": 8, "EmployeesRequired": 21}
}

max_hours = {"E1": 36, "E2": 28, "E3": 42, "E4": 21}

# Initialize the optimization model
model = LpProblem("Shift_Allocation_with_Designation_Match", LpMinimize)

# Decision Variables: x[(employee, shift)] is 1 if the employee is assigned to the shift
x = LpVariable.dicts("ShiftAssignment", [(e, s) for e in employees for s in shifts], cat="Binary")

# Objective Function: Minimize idle hours
model += lpSum(
    max_hours[e] - lpSum(shifts[s]["WorkHours"] * x[(e, s)] for s in shifts)
    for e in employees
)

# Constraints
# 1. Max working hours per employee
for e in employees:
    model += lpSum(shifts[s]["WorkHours"] * x[(e, s)] for s in shifts) <= max_hours[e]

# 2. Ensure shifts are covered
for s in shifts:
    model += lpSum(x[(e, s)] for e in employees if employees[e] == shifts[s]["Designation"]) == shifts[s]["EmployeesRequired"]

# 3. Designation match: Employees can only be assigned to shifts matching their designation
for e in employees:
    for s in shifts:
        if employees[e] != shifts[s]["Designation"]:
            model += x[(e, s)] == 0

# Solve the model
model.solve()

 # Output Results
# schedule = []
# for v in model.variables():
#     if v.varValue > 0:
#         emp, shift = v.name.split("_")[1:]
#         schedule.append({"Employee": emp, "Shift": shift, "Designation": employees[emp]})

# # Print the Schedule

schedule = []
for v in model.variables():
    if v.varValue > 0:
        # Split the variable name correctly to extract employee and shift
        _, emp, shift = v.name.split("_")  # Added an extra '_' to handle the tuple format
        
        # Remove parentheses, single quotes, and any commas from emp and shift
        emp = emp.replace("(", "").replace(")", "").replace("'", "").replace(",", "")  # Added .replace(",", "")
        shift = shift.replace("(", "").replace(")", "").replace("'", "").replace(",", "")  # Added .replace(",", "")
        schedule.append({"Employee": emp, "Shift": shift, "Designation": employees[emp]})

for assignment in schedule:
    print(f"Employee {assignment['Employee']} ({assignment['Designation']}) is assigned to {assignment['Shift']}")

import pandas as pd

# Convert schedule to DataFrame
schedule_df = pd.DataFrame(schedule)

# Save DataFrame to CSV
schedule_df.to_csv("optimized_schedule.csv", index=False)

print("Schedule saved to optimized_schedule.csv")
