# Employees and their designations
employees = {
    "E1": "Cashier",
    "E2": "Inventory Manager",
    "E3": "Customer Help",
    "E4": "Cleaning Staff"
}

# Shifts and their required designations
shifts = {
    "Shift1": {"Designation": "Cashier", "WorkHours": 8, "EmployeesRequired": 2},
    "Shift2": {"Designation": "Inventory Manager", "WorkHours": 8, "EmployeesRequired": 1},
    "Shift3": {"Designation": "Customer Help", "WorkHours": 8, "EmployeesRequired": 2},
    "Shift4": {"Designation": "Cleaning Staff", "WorkHours": 8, "EmployeesRequired": 1}
}

# Maximum working hours per employee
max_hours = {"E1": 36, "E2": 28, "E3": 42, "E4": 21}


from pulp import LpBinary , LpProblem , lpSum , LpMinimize , LpVariable


# problem define
model = LpProblem("Constrained_scheduling",LpMinimize)

#decision variables 
# x[(employee,shift)] = 1 if assigned else 0

x = LpVariable.dicts("Assign" , [(e,s) for e in employees for s in shifts] , cat = "Binary")

#objective function : minimize the idle hours of the employee

idle_hours = lpSum(
    max_hours[e] - lpSum(shifts[s]["WorkHours"] * x[(e, s)] for s in shifts)
    for e in employees
)
model += idle_hours

 #constraints

# Maxmimum working hours of employees
for e in employees:
    model = model + lpSum(shifts[s]["WorkHours"]* x[(e,s)] for s in shifts) <= max_hours[e]

#All shifts are covered

for s in shifts:
    model = model + lpSum(x[(e, s)] for e in employees if employees[e] == shifts[s]["Designation"]) == shifts[s]["EmployeesRequired"]

# designation match

for e in employees:
    for s in shifts:
        if employees[e] != shifts[s]["Designation"]:
            model = model + x[(e,s)] == 0

#solving the model

model.solve()

#output results

schedule = []

for v in model.variables():
    if v.varvalue > 0:
        emp , shift = v.name.split("--")[1:]
        schedule.append({"Employee": emp , "Shift" : shift , "Designation" : employees[emp]})

for assignment in schedule:
    print(f"Employee {assignment['Employee']} ({assignment['Designation']}) is assigned to {assignment['Shift']}")